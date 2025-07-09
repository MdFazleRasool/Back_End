import { success } from "zod/v4";
import {
  createTweet as createTweetService,
  getTweet as getTweetService,
  getTweetsById as getTweetsByIdService,
  deleteTweet as deleteTweetService,
  updateTweet as updateTweetService,
} from "../Services/tweetService.js";

import { StatusCodes } from "http-status-codes";
import { errorResponse, successResponse } from "../utils/response.js";

export const createTweet = async (req, res) => {
  console.log(req.file);
  try {
    const response = await createTweetService({
      body: req.body.body,
      image: req.file?.location,
    });
    //201
    return successResponse(
      response,
      StatusCodes.CREATED,
      "Tweet Created Successfully"
    );
  } catch (error) {
    errorResponse(error);
  }
};

export const getTweets = async (req, res) => {
  try {
    const response = await getTweetService();

    return successResponse(
      response,
      StatusCodes.OK,
      "Tweets fetched Successfully"
    );
  } catch (error) {
    errorResponse(error);
  }
};

export const getTweetsById = async (req, res) => {
  try {
    const response = await getTweetsByIdService(req.params.id);

    return successResponse(
      response,
      StatusCodes.OK,
      "Tweets fetched Successfully"
    );
  } catch (error) {
    errorResponse(error);
  }
};

export const deleteTweet = async (req, res) => {
  try {
    const response = await deleteTweetService(req.params.id);
    return successResponse(
      response,
      StatusCodes.OK,
      "Tweets  Successfully delete"
    );
  } catch (error) {
    errorResponse(error);
  }
};

export const updateTweet = async (req, res) => {
  try {
    const response = await updateTweetService(req.params.id, req.body.body);
    return successResponse(
      response,
      StatusCodes.OK,
      "Tweets  Successfully updated"
    );
  } catch (error) {
    errorResponse(error);
  }
};
