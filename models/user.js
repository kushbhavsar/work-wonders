const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const validator = require('validator');
mongoose.promise = Promise


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        require: "Email is Required"
    },
    password: {
        type: String, trim: true, require: "Password is Required", validate: [
            function (input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]
    },
    address: {
        type: String,
        // require: true 
    },
    address2: {
        type: String,
        // require: true 
    },
    city: {
        type: String,
        // require: true 
    },
    USstate: {
        type: String
    },
    zip: {
        type: Number,
        // require: true 
    }
});

// UserSchema.pre('save', function (next) {
//     var user = this;
//     if (this.isModified('password') || this.isNew) {
//         bcrypt.genSalt(10, function (err, salt) {
//             if (err) {
//                 return next(err);
//             }
//             bcrypt.hash(user.password, salt, null, function (err, hash) {
//                 if (err) {
//                     return next(err);
//                 }
//                 user.password = hash;
//                 next();
//             });
//         });
//     } else {
//         return next();
//     }
// });

// UserSchema.methods.comparePassword = function (passw, cb) {
//     bcrypt.compare(passw, this.password, function (err, isMatch) {
//         if (err) {
//             return cb(err);
//         }
//         cb(null, isMatch);
//     });
// };


//Define schema methods

userSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        var salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(plainTextPassword, salt)
    }
};

// Define pre-hooks for the save method

userSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('models/user.js =======NO PASSWORD PROVIDED=======')
        next()
    } else {
        console.log('models/user.js hashPassword in pre save');
        this.password = this.hashPassword(this.password)
        next()
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;