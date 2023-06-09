import express from 'express';
import mongoose from 'mongoose';
import router from '../api/routes/signup.route.js';
import userSchema from '../models/userSchema.js';
import bcrypt from 'bcrypt';
import { SignupService } from '../services/auth.service.js'
import { SignInService } from '../services/auth.service.js'
import { tokenService } from '../services/auth.service.js'
import Status from '../const/status.js';
import StatusCode from '../const/status_code.js';
import ResponseHelper from '../helpers/response/response.helper.js';
export const postUser = async (req, res, next) => {
    try {
        const data = await SignupService.postSignUp(req, res);
        console.log(data);
        return res.status(200).json(ResponseHelper.successMessage(StatusCode.SUCCESS, Status.SUCCESS, '', data))

    } catch (error) {
        next(error);
        // return res.status().json({
        //     message: "Signup failed",
        // });
    }

}

export const getUser = async (req, res, next) => {
    try {
        const data = await SignInService.postSignIn(req, res);
        console.log(data);
        return res.status(200).json(ResponseHelper.successMessageToken(StatusCode.SUCCESS, Status.SUCCESS, '', data))

    } catch (error) {
        return res.status().json({
            message: "SignIn failed",
        });
    }

}

export const getToken = async (req, res, next) => {
    try {
        console.log('userhandler');
        const data = await tokenService.getToken(req, res);
        console.log(data);
        return res.status(200).json(ResponseHelper.successMessageToken(StatusCode.SUCCESS, Status.SUCCESS, '', data))

    } catch (error) {
       next(error);
        // return res.status(200).json({
        //     message: error,
        // });
    }

}
