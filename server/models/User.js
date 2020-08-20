const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    profilePic: {
        type: String,
        default:"https://res.cloudinary.com/dqmpbgxs3/image/upload/v1597126913/dummyimage_eqxuo1.png"
    },
    accessToken: {
        type: String,
        default: ""
    },
    // resetToken: {
    //     type: String
    // },
    // expireToken:{
    //     type:Date
    // },
    followers: [
        {
            type: Schema.Types.ObjectId,
            ref: "user"
        }
    ],
    following: [
        {
            type: Schema.Types.ObjectId,
            ref: "user"
        }
    ],
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "post"
        }
    ],
    saved: [ ],
    savedId:[
        {
            type: Schema.Types.ObjectId,
            ref: "post"
        }
    ]

},
    { timestamps: true })

userSchema.pre("save", function (next) {
    var user = this
    if (user.isModified("password")) {
        bcrypt.hash(user.password, 10).then(function (hased) {
            user.password = hased
            next();

        }).catch(function (err) {
            next(err);
        })
    }
})


const User = mongoose.model("user", userSchema);
module.exports = User