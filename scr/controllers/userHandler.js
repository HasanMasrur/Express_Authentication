import express from 'express';
import mongoose from 'mongoose';
import router  from '../api/routes/signup.route.js';
import userSchema from '../models/userSchema.js';
import bcrypt from 'bcrypt';
import {SignupService} from '../services/auth.service.js'
export const postUser = async (req, res, next) =>{
    try {
 const data = await SignupService.postSignUp(req,res);
 console.log(data);
 if(data['status'] == "200")
{
 return   res.status(200).json({
       result:data,
    })
}  
else {
    return   res.status(200).json({
        result:data
    })
}
    
    } catch (error) {
        res.status(500).json({
            message : "Signup failed",
        });
    }

}

