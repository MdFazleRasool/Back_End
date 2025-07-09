import { Schema } from "zod";
import { success } from "zod/v4";


export const validate = (Schema) =>{
    // it returns a validating middleware(req,res,next)
    return  async (req,res,next) => {
        try{
            console.log(req.body);
            Schema.parse(req.body) ;
            next();
           
        }
        catch(error){
            return res.status(400).json({
                error : error.errors ,
                success : false ,
                message : "validation failed"
            }) ; 

        }
    }
}