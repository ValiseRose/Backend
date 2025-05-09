const jwt = require("jsonwebtoken");
const clientDao = require("../dao/clientDao");
const ClientUser = require("../models/ClientUser");
const crypto = require("crypto");
const sendMail = require("../utils/sendMail"); // Create a helper

exports.registerClient = async (data) => {
  const existing = await clientDao.getClientByEmail(data.email);
  if (existing) throw new Error("Email already registered");

  const client = await clientDao.createClient(data);
  const token = jwt.sign({ id: client._id }, process.env.CLIENT_JWT_SECRET, { expiresIn: "1d" });
  return { client, token };
};

exports.loginClient = async (email, password) => {
  const client = await clientDao.getClientByEmail(email);
  if (!client || !(await client.comparePassword(password))) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign({ id: client._id }, process.env.CLIENT_JWT_SECRET, { expiresIn: "1d" });
  return { client, token };
};

exports.getClientById = (id) => clientDao.getClientById(id);

exports.updateClient = (id, data) => clientDao.updateClient(id, data);



exports.forgotPassword = async (email) => {
  const client = await clientDao.getClientByEmail(email);
  if (!client) throw new Error("No account with that email");

  const token = crypto.randomBytes(32).toString("hex");
  const expiry = Date.now() + 3600000; // 1 hour

  await clientDao.setResetToken(email, token, expiry);

  // Send reset email
  const resetUrl = `${process.env.CLIENT_URL}/reset-password?token=${token}`;
  await sendMail(email, "Reset Your Password", `Click here: ${resetUrl}`);

  return true;
};

exports.resetPassword = async (token, newPassword) => {
  const client = await clientDao.getClientByResetToken(token);
  if (!client) throw new Error("Invalid or expired token");

  client.password = newPassword;
  await client.save();
  await clientDao.clearResetToken(client._id);

  return true;
};
