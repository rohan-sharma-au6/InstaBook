const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

module.exports = {
    register(req, res) {
        const { name, email, password,profilePic,bio } = req.body
        if (!email || !password || !name) {
            return res.json({ error: "please add all the fields" })
        }
        User.findOne({ email: email }).then(
            savedUser => {
                if (savedUser) {
                    return res.send("Already registered")
                }
                console.log(req.body)
                const user = new User({ 
                    name,
                    email,
                    password,
                    profilePic,
                    bio
                });
                user.save()
                    .then(function (user) {
                        res.json(user)
                    })
            })
            .catch(err => {
                console.error(err)
            })
    },

    login(req, res) {
        const { email, password } = req.body
        if (!email || !password) {
            return res.json({ error: "please add all the fields" })
        }
        User.findOne({ email: email }).
            then(savedUser => {
                if (!savedUser) {
                    res.json({ error: "Invalid Email or password" })
                }
                bcrypt.compare(password, savedUser.password)
                    .then(matched => {
                        if (matched) {
                            const token = jwt.sign({ _id: savedUser._id }, "jwt", {
                                expiresIn: "12h"
                            })
                            savedUser.accessToken = token;
                            savedUser.save()
                            //console.log(savedUser)

                            res.cookie("token", token, {
                                expires: new Date(Date.now() + 1000 * 60 * 60 * 12),
                                httpOnly: true,
                                sameSite: "none"
                            });
                            res.status(200).send({
                                token,
                                savedUser,
                                message: "Logged In"
                            });
                        }
                        else {
                            res.send("Wrong PassWord")
                        }
                    })
            })

    },
    
    logout(req,res){
        //console.log("cdnjdn", req.user._id)
        User.findOne(req.user._id).then(user=>{
            user.acessToken = "";
            user.save()
            res.json({message:"logged out",user})

        })
    },
    getUser(req,res){
        User.findOne(req.user._id)
        .then(user=>{
            res.json(user)
        }).catch(err=>{
            res.json({error:err})
        })
    },
    updateUser(req,res){
        User.findOneAndUpdate({_id:req.params.id},{
            name:req.body.name,
            email:req.body.email,
            profilePic:req.body.profilePic,
            bio:req.body.bio
        },(err,result)=>{
            if(err){
                res.json({error:err})
            }else{
                res.json({result})
            }
        })
    }
}


