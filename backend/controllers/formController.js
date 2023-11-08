const Form = require("../model/formModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.submitForm = catchAsyncErrors(async(req, res, next) => {
    const {name, email, number, message} = req.body;
    
    const myForm = await Form.create({
        name: name,
        email: email,
        number: number,
        message: message
    });
    res.status(200).json({
        success:true,
    })
});