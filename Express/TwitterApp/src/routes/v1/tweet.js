import express from "express";
import { getTweets, getTweetsById ,createTweet, deleteTweet, updateTweet } from "../../Controllers/tweetControllers.js";
import { createTweetManualValidator, getTweetByIdManualValidator } from "../../validators/tweetManualValidator.js";
import {validate} from '../../validators/zodValidator.js'
import { tweetZodSchema } from "../../validators/tweetZodSchema.js";
import { s3Uploader } from "../../config/multerConfig.js";
const router = express.Router();

router.get('/' , getTweets );

router.get('/:id' ,getTweetByIdManualValidator ,getTweetsById);

// router.post('/' ,createTweetManualValidator , createTweet);

router.post('/' ,s3Uploader.single('tweetImage') ,   validate(tweetZodSchema) , createTweet);

router.delete('/:id',getTweetByIdManualValidator,deleteTweet)

router.put('/:id',getTweetByIdManualValidator,updateTweet);

export default router; 