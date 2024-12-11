const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blacklistToken.model');
const CaptainModel = require('../models/captain.model'); // Ensure this import exists

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthenticated' });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthenticated' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findById(decoded._id);
        req.user = user;

        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthenticated' });
    }
};

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthenticated' });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthenticated' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await CaptainModel.findById(decoded._id);
        req.captain = captain;
        return next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthenticated' });
    }
};
