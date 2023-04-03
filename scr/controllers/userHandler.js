import express from 'express';
import mongoose from 'mongoose';
import router  from '../api/routes/signup.route.js';
import userSchema from '../models/userSchema.js';
import bcrypt from 'bcrypt';

export const postUser = async (req, res, next) =>{
    console.log('i am calling');
    console.log(req.body.username);
   
    try {
        console.log(req.body.name);
        console.log(req.body.username);
        console.log(req.body.password);
        const hashedPassword = await bcrypt.hash(req.body.password,10);
        const newUser = new userSchema.UserModel({
            name:req.body.name,
            username:req.body.username,
            password:hashedPassword,
        });
        await newUser.save();
        res.status(200).json({
            message:"Signup was successful !",
        })
    } catch (error) {
        res.status(500).json({
            message : "Signup failed",
        });
    }

}

