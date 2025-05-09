const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail", // or your SMTP
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

module.exports = (to, subject, html) =>
  transporter.sendMail({ from: process.env.MAIL_USER, to, subject, html });
