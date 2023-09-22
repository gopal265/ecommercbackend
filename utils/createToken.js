import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config();
export const createToken = (user,statusCode,res) =>{

    const token = jwt.sign(user._id,process.env.JWT_SECRECT,{expiresIn :"2h"})
    const option = {
        expire: new Date(
            Date.now() + 5 * 24*60*60*1000
        ),
        httpOnly:true
    }

    res.status(statusCode).cookie('token',token,option).json({
        success:true,
        user,
        token

    })


}