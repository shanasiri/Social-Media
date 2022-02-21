const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";

//REGISTER
router.post("/register", async (req, res) => {
    try{
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashedPassword,
        });
        
        //save user and return response 
        const user = await newUser.save();
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({email : req.body.email});
        !user && res.status(404).json("user not found");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("wrong password");

        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
    
})

//google authentication
router.get("/login/success", (req, res) => {
    if(req.user){
        res.status(200).json({
            success: true,
            message: "successful",
            user: req.user
        });
    }    
});

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "failure",
    });
});

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", {scope : ["profile"]}));

router.get("/google/callback", passport.authenticate("google", {
    successRedirect : CLIENT_URL,
    failureRedirect : "/login/failed"
}));

module.exports = router;