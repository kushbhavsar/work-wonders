const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    address: { type: String, require: true },
    address2: { type: String, require: true },
    city: { type: String, require: true },
    USstate: { type: String, require: true },
    zip: { type: Number, require: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;