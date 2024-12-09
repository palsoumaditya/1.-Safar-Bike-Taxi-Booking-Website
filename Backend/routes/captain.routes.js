const express = require('express')
const router = express.Router()
const {body} = require('express-validator')

router.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),

    body('email').isEmail().withMessage('Invalid email'),

    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),

    body('vechicle.color').isLength({min:3}).withMessage('Color must be at least 3 characters long'),


    body('vechicle.number_plate').isLength({min:3}).withMessage('Number plate must be at least 3 characters long'),


    body('vechicle.capacity').isLength({min:1}).withMessage('Capacity must be at least 1'),

    body('vechicle.vechicle_type').isIn(['car', 'bus', 'van','bike','boat','toto','auto']).withMessage('Invalid vechicle type')
],

userController.registerCaptain

)




module.exports = router