import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

export default async function connectDB() {
    try {
        await mongoose.connect(MONGO_URL) ;
        console.log("Connected To MongoDB");
        
    } catch (error) {
       console.log("Failed to Connect to MongoDB");
       console.log(error);
        
    }
}