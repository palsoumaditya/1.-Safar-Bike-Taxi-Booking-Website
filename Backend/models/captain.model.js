const moongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const captainSchema = new moongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3, "First name must be at least 3 characters long"]
        },
        lastname:{
            type:String,
            minlength:[3, "Last name must be at least 3 characters long"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match:[/^|\S+@\S+\.\S+$/, "Please enter a valid email"]
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum:['active', 'inactive'],
        default:'inactive'
    },
    vechicle:{
        color:{
            type:String,
            required:true,
            minlength:[3, "Color must be at least 3 characters long"]
        },
        number_plate:{
            type:String,
            required:true,
            minlength:[3, "Number plate must be at least 3 characters long"]
        },
      capacity:{
        type:Number,
        required:true,
        minlength:[1, "Capacity must be at least 1 "]
      },
      vechicle_type:{
        type:String,
        enum:['car', 'bus', 'van','bike','boat','toto','auto'],
        required:true,
      }
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token= jwt.sign({_id:this._id}, process.env.JWT_SECRET, {expiresIn:'24h'});
    return token;
}
captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}
const captaionModel = moongoose.model('Captain', captainSchema);


module.exports = captaionModel;