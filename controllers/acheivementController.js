const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const AchievementModel = require("../models/Achievements");

module.exports = {
    createAcheivement: async (req, res) => {
        const newAcheivement = new AchievementModel(req.body);

        try{
            const savedAcheivement = await newAcheivement.save();
            const { __v, createdAt, updatedAt, ...newAcheivementInfo } = savedAcheivement._doc;

            res.status(200).json(newAcheivementInfo);
        } catch(error) {
            res.status(500).json(error);
        }
    }
}