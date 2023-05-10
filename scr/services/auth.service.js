import {SignupRepository} from "../repositories/auth.repository.js";
import {SignInRepository} from "../repositories/auth.repository.js";
import {tokenRepository} from "../repositories/auth.repository.js";
export const SignupService = {
    postSignUp : async (req,res)=>{
        return await SignupRepository.postSignUp(req,res);
    }
}
export const SignInService = {
    postSignIn : async (req,res)=>{
        return await SignInRepository.postSignIn(req,res);
    }
}

export const tokenService = {
    getToken : async (req,res)=>{
        return await tokenRepository.getToken(req,res);
    }
}