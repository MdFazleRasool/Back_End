import express from "express";
import tweetRouter from './tweet.js'
import commentRouter from './comment.js'

const router = express.Router(); // create new router Object

router.use('/tweet',tweetRouter); // if the request url starts with  / tweet ,use the tweetRouter
router.use('/comment',commentRouter); // if the request url starts with  / comment ,use the commentRouter


export default router ; //Export the router Object