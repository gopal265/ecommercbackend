import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config();
export const createToken = (user,statusCode,res) =>{

    const token = jwt.sign({id:user._id},process.env.JWT_SECRECT,{expiresIn :"2h"})
    const options = {
        maxAge: 60*1000
    }

    res.status(statusCode).cookie('token',token).json({
        success:true,
        user,
        token

    })


}