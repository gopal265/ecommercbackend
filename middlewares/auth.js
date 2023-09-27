import jwt from "jsonwebtoken"
import errorHandler from "../utils/errorhandle.js"
import User from '../models/user.js'
import RC from "../middlewares/resolveAndCatch.js"

const  isAuthenticateuser = RC(async(req, res, next)=>{
    const { token } = req.cookies;

    if (!token) {
       return next( new errorHandler('User token has been expired or not been genrated', 400)) 
    }

    const verifytoken = jwt.verify(token, process.env.SECRETID)
    req.user = await User.findById(verifytoken.id)
    next()
})

export default isAuthenticateuser;