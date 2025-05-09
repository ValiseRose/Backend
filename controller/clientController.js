const clientService = require("../service/clientService");

exports.register = async (req, res) => {
  try {
    const { client, token } = await clientService.registerClient(req.body);
    res.status(201).json({ client, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { client, token } = await clientService.loginClient(email, password);
    res.json({ client, token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const client = await clientService.getClientById(req.client.id);
    if (!client) return res.status(404).json({ message: "Client not found" });
    res.json(client);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const client = await clientService.updateClient(req.client.id, req.body);
    res.json(client);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.forgotPassword = async (req, res) => {
  try {
    await clientService.forgotPassword(req.body.email);
    res.json({ message: "Password reset email sent" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    await clientService.resetPassword(token, newPassword);
    res.json({ message: "Password reset successful" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
