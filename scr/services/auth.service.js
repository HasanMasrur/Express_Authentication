import {SignupRepository} from "../repositories/auth.repository.js";

export const SignupService = {
    postSignUp : async (req,res)=>{
        return await SignupRepository.postSignUp(req,res);
    }
}