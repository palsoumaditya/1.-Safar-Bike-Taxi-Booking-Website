const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({firstname, lastname, email, password,color,number_plate,capacity, vehicleType}) => {
    if(!firstname || !lastname || !email || !password || !color || !number_plate || !capacity || !vehicleType){
        throw new Error("All fields are required");
    }
    const captain = new captainModel({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            number_plate,
            capacity,
            vehicle_type:vehicleType
        }
    });

    return captain.save();
}