import { Filter  } from "bad-words" ;
import {
    createTweet as createTweetRepository ,
    getTweet as getTweetRepository ,
    getTweetById as getTweetByIdRepository ,
    deleteTweet as deleteTweetRepository ,
    updateTweet as updateTweetRepository
} from '../repositories/tweetrepositories.js'
import { id } from "zod/v4/locales";
import { stat } from "fs";

export const createTweet = async ({body , image}) => {
    // try to find blocked words in the  tweet body  and if  any exists don't
    // create the tweet and  return an error message  
    const filter = new Filter() ;
    if(filter.isProfane(body)){
        console.log(body);
        console.log(filter.clean(body));
        throw {
            message : 'Tweet contains Bad Words' ,
            status : 400
        }        
    }

    const tweet = await createTweetRepository({body , image}) ;
    return tweet;
}

export const getTweet = async () =>{
    const tweets = await getTweetRepository();
    return tweets;
}

export const getTweetsById = async(id) =>{
    const tweetId = await getTweetByIdRepository(id);
    if(!tweetId){
        throw{
            message : ' tweet not found' ,
            status : 404
        }
    }
    return tweetId ;
}

export const deleteTweet = async(id) =>{
    const response = await deleteTweetRepository(id);
    if(!response){
        throw{
            message: 'Tweet not found',
            status : 404
        };
    }
    return response;
}

export const updateTweet = async (id,body) =>{
    try {
        const response = await updateTweetRepository(id,body);
        if(!response){
            throw {
                message : 'Tweet not found' ,
                status : 404
            };
        }
        return response;
    } catch (error) {
        throw error;
    }
}