const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const validator = require('validator');
const morgan = require('morgan');

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    eMail: { type: String, trim: true, unique:true, match:[/.+@.+\..+/, "Please enter a valid e-mail address"],  require: "Email is Required" },
    passWord: { type: String, trim: true, require: "Password is Required", validate:  [
        function(input) {
          return input.length >= 6;
        },
        "Password should be longer."
      ]
   },
    address: { type: String, require: true },
    address2: { type: String, require: true },
    city: { type: String, require: true },
    state: { type: String }
});

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;