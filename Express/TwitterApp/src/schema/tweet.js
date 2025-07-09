import mongoose from "mongoose";
import { maxLength } from "zod/v4";
const tweetSchema = new mongoose.Schema({
    body: {
        type : String ,
        trim : true ,
        require : true ,
        maxLength : 280 
    },
    image:{
        type:String ,
        default : null
    }

},{timestamps:true});

const Tweet = mongoose.model("Tweet" , tweetSchema); // tweet collection
export default Tweet;   