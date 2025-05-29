const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
    name: { type: String, required: true },
    email: { type: String, required: false },
    login: { type: String, required: true },
    password: { type: String, required: true },
    api_token: String,
    status: { type: String, required: true },
    // permissions: [{ type: Schema.Types.ObjectId, ref: "Permission" }],
   
  },
  { timestamps: true }
);
module.exports = mongoose.model('User', userSchema);
