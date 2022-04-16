const Admin = require('../models/adminModel');
const jwt =require("jsonwebtoken");
exports.login=(request,response)=>{
    Admin.findOne({email:request.body.email,password:request.body.password})
    .then(result=>{ 
        let payload = {subject:result._id};
        let token = jwt.sign(payload,"jkfhsdjfskfdsjfsddv");
        return response.status(200).json({
            CurrentUser:result,
            token:token
           });
    }).catch(err=>{
        return response.status(500).json(err);
    });
};