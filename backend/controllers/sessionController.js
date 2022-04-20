const Firebase = require('../utils/Firebase');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { response } = require('express');

module.exports = {
    async signIn(req, res){
        try{
            const { email, password } = req.body;
            let firebaseID;
            try{
                firebaseID = await Firebase.login(email, password);
            }catch(err){
                return res.status(403).json({
                    Success: false,
                    Notification: "Invalid Credentials"
                });
            }

            const user = await User.findOne({
                firebase_id: firebaseID
            });

            const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "1d",
            });

            return res.status(200).json({
                user,
                accessToken
            })

        }catch(err){
            console.log("User signIn failed: " + error);
            return response.status(500).json({
                Notification: "Internal server error while trying to create User",
            });
        }
    }
}