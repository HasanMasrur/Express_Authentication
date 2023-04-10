import userSchema from '../models/userSchema.js';
import bcrypt from 'bcrypt';
import  jwt  from 'jsonwebtoken';
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

export const SignInRepository = {
    postSignIn: async (req, res, next) => {
        try {
const user = await userSchema.find({email:req.body.email});
console.log(user);
if(user &&  user.length> 0){
    const isValidPassword = await bcrypt.compare(req.body.password, user[0].password);

    if(isValidPassword) {
        // generate token
        const token = jwt.sign({
            username: user[0].username,
            userId: user[0]._id,
        }, "hasan123210", {
            expiresIn: '1h'
        });
console.log(token);
       return {token:token,user:user[0]} ;
    }
}
        } catch (error) {
            next(error);
        }
    }
}