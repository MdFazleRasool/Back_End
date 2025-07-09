import { success } from "zod/v4";
import {
  createTweet as createTweetService,
  getTweet as getTweetService,
  getTweetsById as getTweetsByIdService,
  deleteTweet as deleteTweetService ,
  updateTweet as updateTweetService
} from "../Services/tweetService.js";

import { StatusCodes } from "http-status-codes";

export const createTweet = async (req, res) => {
  console.log(req.file);
  try {
    const response = await createTweetService({
      body: req.body.body,
      image: req.file?.location,
    }); //201
    return res.status(StatusCodes.CREATED).json({
      success: true,
      data: response,
      message: "Tweet Created Successfully",
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        message: error.message,
        success: false,
      }); // 500 -> Internal Server error
      return res.status(500).json({
        message: "Internal Server Error",
        success: false,
      });
    }
  }
};

export const getTweets = async (req, res) => {
  try {
    const response = await getTweetService();
    return res.status(StatusCodes.OK).json({
      success: true,
      data: response,
      message: "Tweets fetched Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Internal Sever error",
      success: false,
    });
  }
};

export const getTweetsById = async (req, res) => {
  try {
    const response = await getTweetsByIdService(req.params.id);

    return res.status(StatusCodes.OK).json({
      success: true,
      data: response,
      message: " Tweet fetched Successfully",
    });
  } catch (error) {
    console.log(error);
    if(error.status){
        return res.status(error.status).json({
            message:error.message,
            success:false
        })
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message:'Internal Server error',
        success:false
    });
    
  }
};


export const deleteTweet = async(req,res) =>{
    try {
        const response = await  deleteTweetService(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:'Tweet successfully deleted' ,
            data:response
        })
    } catch (error) {
        console.log(error);
        if(error.status){
            return res.status(error.status).json({
            message : error.message ,
            succcess:false 
            
        });
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            succcess:false ,
            message : 'Id not found'
        })
    }
}

export const updateTweet = async (req,res) => {
    try {
        const response = await updateTweetService(req.params.id,req.body.body);
        return res.status(StatusCodes.OK).json({
                message:'Succesfully updated the tweet',
                success:true ,
                data : response
        });

    } catch (error) {
        console.log(error);
        if(error.status){
            return res.status(error.status).json({
                message:error.message,
                success:false
            });
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message:'Internal server error',
                success:false
        }); 
    }
}