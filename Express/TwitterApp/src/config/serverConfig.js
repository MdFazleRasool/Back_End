import dotenv from "dotenv";

dotenv.config(); // load enviroment variables from .env file

// defining port variable
export const PORT = process.env.PORT   ; // define a port variable

export const MONGO_URL = process.env.MONGO_URL ; // define a mongodb_url

// aws ACCESS KEY , REGIONS AND NAME
export const AWS_REGION = process.env.AWS_REGION; // define a AWS_REGION variable

export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME; // define a AWS_BUCKET_NAME variable

export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID; // define a AWS_ACCESS_KEY_ID variable

export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY; // define a AWS_SECRET_ACCESS_KEY variable
