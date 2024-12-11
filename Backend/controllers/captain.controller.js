const CaptainModel = require('../models/captain.model');
const CaptainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const BlacklistTokenModel = require('../models/blacklistToken.model');
module.exports.registerCaptain = async (req, res) => {
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

   
    const { fullname, email, password, vehicle } = req.body;

    
    const isCaptainExist = await CaptainModel.findOne({ email });
    if (isCaptainExist) {
        return res.status(400).json({ errors: [{ msg: 'Captain already exists' }] });
    }

  
    const hashedPassword = await CaptainModel.hashPassword(password);

   
    const captain = await CaptainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        number_plate: vehicle.number_plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicle_type
    });

    // Generate the token from the captain instance
    const token = captain.generateAuthToken(); // Use instance method

    // Return the response with captain and token
    res.status(201).json({ captain, token });
};
module.exports.loginCaptain = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {email, password} = req.body;

    const captain = await CaptainModel.findOne({email}).select('+password');

    if(!captain){
        return res.status(401).json({message:'Invalid email or password'});
    }

    const isValid = await captain.comparePassword(password);


    if(!isValid){
        return res.status(401).json({message:'Invalid email or password'});
    }

    const token = captain.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({token, captain});
}

module.exports.getCaptainProfile = async (req, res) => {
    res.status(200).json({ captain: req.captain });
}
module.exports.logoutCaptain = async (req, res) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    await BlacklistTokenModel.create({ token });

    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successfully' });
}