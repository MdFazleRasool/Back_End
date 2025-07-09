import { StatusCodes } from "http-status-codes";
import { success } from "zod/v4";

export const errorResponse = (error) => {
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

export const successResponse = (data,statusCodes,message) =>{
    return res.status(statusCodes).json({
        success:true ,
        data ,
        message
    }) ;
}