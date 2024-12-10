const CaptainModel = require('../models/captain.model');
const CaptainService = require('../services/captain.service');
const { validationResult } = require('express-validator');

module.exports.registerCaptain = async (req, res) => {
    // Validate the request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Extract data from request body
    const { fullname, email, password, vehicle } = req.body;

    // Check if the captain already exists
    const isCaptainExist = await CaptainModel.findOne({ email });
    if (isCaptainExist) {
        return res.status(400).json({ errors: [{ msg: 'Captain already exists' }] });
    }

    // Hash the password
    const hashedPassword = await CaptainModel.hashPassword(password);

    // Create the captain and save to the database
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
