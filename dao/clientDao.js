const ClientUser = require("../models/ClientUser");

exports.createClient = (data) => new ClientUser(data).save();

exports.getClientByEmail = (email) => ClientUser.findOne({ email });

exports.getClientById = (id) => ClientUser.findById(id);

exports.updateClient = (id, data) => ClientUser.findByIdAndUpdate(id, data, { new: true });

exports.setResetToken = (email, token, expiry) =>
    ClientUser.findOneAndUpdate(
      { email },
      { resetToken: token, resetTokenExpiry: expiry },
      { new: true }
    );
  
  exports.getClientByResetToken = (token) =>
    ClientUser.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() },
    });
  
  exports.clearResetToken = (id) =>
    ClientUser.findByIdAndUpdate(id, { resetToken: null, resetTokenExpiry: null });
  