import express from 'express';
import mongoose from 'mongoose';
import router  from '../api/routes/signup.route.js';
import userSchema from '../models/userSchema.js';
import bcrypt from 'bcrypt';
import {SignupService} from '../services/auth.service.js'
import Status from '../const/status.js';
import StatusCode from '../const/status_code.js';
import ResponseHelper from '../helpers/response/response.helper.js';
export const postUser = async (req, res, next) =>{
    try {
 const data = await SignupService.postSignUp(req,res);
 console.log(data);
 return res.status(200).json(ResponseHelper.successMessage(StatusCode.SUCCESS,Status.SUCCESS,'',data))

    } catch (error) {
 return       res.status().json({
            message : "Signup failed",
        });
    }

}

