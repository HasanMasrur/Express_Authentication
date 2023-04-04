import userSchema from '../models/userSchema.js';
import bcrypt from 'bcrypt';
import { constants } from 'buffer';

export const SignupRepository = {
    postSignUp: async (req, res, next) => {
        try {
       console.log(req.body.name);
                    const hashedPassword = await bcrypt.hash(req.body.password, 10);
                    const newUser = new userSchema({
                        name: req.body.name,
                        username: req.body.username,
                        email: req.body.email,
                        password: hashedPassword,
                    });
                    console.log(newUser);
            return   await newUser.save();
        } catch (error) {
            next(error);
        }
    }
}