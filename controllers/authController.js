const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

module.exports = {
    createUser: async (req, res) => {
        const { username, password } = req.body;
        try {
            const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt),
            });
            res.status(200).json({ userDoc });
        } catch (error) {
            console.log(error.message);
            res.status(400).json(error);
        }
    },
    loginUser: async (req, res) => {
        const { username, password } = req.body;
        const userDoc = await User.findOne({ username });
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie("token", token).json({
                id: userDoc._id,
                username,
            });
            });
        } else {
            res.status(400).json("wrong credentials");
        }
    }
}