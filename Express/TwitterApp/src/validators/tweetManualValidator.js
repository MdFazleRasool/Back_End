import mongoose from "mongoose";
import { success } from "zod/v4";

export const createTweetManualValidator = (req,res,next) => {
    if(!req.body.tweet) {
        return res.status(400).json ({
            error : 'Tweet is required'
        }) ;
    }
    if(req.body.tweet.length > 280) {
        return res.status(400).json ({
            error : 'Tweet must be 280 characters or less '
        }) ;
    }
    next();
}

export const getTweetByIdManualValidator =(req,res,next) => { 
    const isValidId =   mongoose.Types.ObjectId.isValid(req.params.id);
    if(!isValidId){
        return res.status(400).json({
            success :false ,
            mesaage:'invalid tweet id'
        });
    }
    next();
}