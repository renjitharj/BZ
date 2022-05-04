const mongoose = require('mongoose')
const Schema = mongoose.Schema
bcrypt = require('bcrypt')
SALT_WORK_FACTOR = 10;

const UserSchema = new Schema
    ({
        username: { type: String, required: true, unique: true },
        firstname:{type:String},
        password: { type: String, required: true },
        phone: { type: String, required: true, trim: true, unique: true },
        email: { type: String, required: true, unique: true },
        role: { type: String, enum: ["ADMIN", "USER"], default: "USER"},
      //  accessToken: { type: String, default: null }



    })
UserSchema.methods.comparePassword = function (candidatePassword, cb) {

    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {

        if (err) return cb(err);

        cb(null, isMatch);

    });

};
UserSchema.pre('save', function (next) {

    var user = this

    // only hash the password if it has been modified (or is new)

    if (!user.isModified('password')) return next();

    // generate a salt

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {



        if (err) return next(err);

        // hash the password along with our new salt



        bcrypt.hash(user.password, salt, function (err, hash) {

            if (err) return next(err);

            // override the cleartext password with the hashed one

            user.password = hash;

            next();

        });
    }

    )

})

module.exports = mongoose.model('User', UserSchema);
