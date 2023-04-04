import userSchema from '../models/userSchema.js';
import bcrypt from 'bcrypt';
import { constants } from 'buffer';
export const SignupRepository = {
    postSignUp: async (req, res, next) => {
        try {
            if(req.body.password .length>6){
                const data = await userSchema.findOne({ 'email': req.body.email });
                console.log(data);
                if (data) {
                    return {'status':401,message:"Email Allready used"};
                  
                } else {
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
              //  return {'status':200,message:"SignUp was Successfully"};
                }
            }else{
return {'status':401,message:"Password should be more then 6 character"};
            }
   
        } catch (error) {
            next(error);
        }


    }
}