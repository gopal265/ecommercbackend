import  RC from   "../middlewares/resolveAndCatch.js";
import User from '../models/user.js'
import sendEmail from "../utils/sendMail.js";
import sendMsg from "../utils/sendMessage.js";
import dotenv from "dotenv"
import { createToken } from "../utils/createToken.js";
dotenv.config();

// const Errorhandler = require('../utilis/errorhandel')

export const registerByMobile = RC(async (req, res, next) => {
  
  const { phonenumber } = req.body

  console.log(phonenumber)
  const user = await User.findOne({"phonenumber": phonenumber})

  if (!user) {
    const newUser = await User.create({
      phonenumber,
    })
   
  }

  const newUser = await User.findOne({"phonenumber": phonenumber})

  let otp = Math.floor((1 + Math.random()) * 90000)

  let options = { authorization: process.env.YOUR_API_KEY, message: `This Website is made by Vikas Verma Thank You to use my Website Your OTP: is ${otp}`, numbers: [phonenumber] }
  
  sendMsg(options,res,req,next);
  

})

export const registerBYMail = RC(async (req,res,next) =>{

  const {email} = req.body;

  const user =   await  User.findOne({email})
 
  if(!user){
    const newUser = await User.create({email})
    console.log(newUser)
  }
 

  const newUser = await User.findOne({email})
  let otp = Math.floor((1 + Math.random()) * 90000)
  sendEmail(email,otp,newUser,res,next);


})

export const getuser = RC(async(req, res, next)=>{
      const user = await User.findOne({"phonenumber": req.params.id})
      
      res.status(200).json({
        success:true,
        user
      })
})

export const verifyOtp = RC(async (req, res, next)=>{
  
  
  console.log(req.body)
  
    const {otp} = req.body
    const user = await User.findOne({email: req.params.email})
    if (!user.otp) {
      return next( new Errorhandler("Your OTP has been expired or not has been genrated pls regenrate OTP", 400))
    }
    if (user.otp !== otp) {
      return next( new Errorhandler("You entered expire or wrong OTP", 400))
    }
    if(otp === user.otp){
      user.verify = 'verified'
      user.otp =null
      await user.save({ validateBeforeSave: false })
      if (user.userName) {
        createToken(user, 200, res)
      }else{
        console.log('yes')
        res.status(200).json({
          success:true,
          user
        })
      }
    }

})

export const resendOtp = RC(async (req, res, next)=>{
  console.log(req.params.id)
  const {email} = req.params
  const user = await User.findOne({email})
  let otp = Math.floor((1 + Math.random()) * 90000)
  console.log(user, otp)

  sendEmail(email,otp,user,res)

  res.status(200).json({
    success:true
  })

})

// exports.updateuser =A( async(req,res,next)=>{
//   console.log(req.body)

//   const users = await User.updateOne({phonenumber: req.params.id}, req.body)
//   const user = await User.findOne({phonenumber: req.params.id})

//   if(!user){
//     return next( new Errorhandler('mobile incorrect', 400))
//   }
  
//   sendtoken(user, 200, res)
  
// })

// exports.updateuserdetails =A( async(req,res,next)=>{
//   console.log(req.body)
// const {name, pincode, address1, address2, citystate, phonenumber} = req.body
  
//   const user = await User.updateOne({_id: req.params.id}, 
//     {
//       name,
//       phonenumber,
//       'address.address1':address1,
//       'address.address2':address2,
//       'address.pincode':pincode,
//       'address.citystate':citystate,
//     })


//   res.status(200).json({
//     success:'Addres Update Successfully'
//   })
  
// })


// exports.logout = A( async(req, res, next)=>{
  
//   res.cookie('token', null,{
//     expire:new Date(Date.now()),
//     httpOnly:true
// });
// res.status(200).json({
//     success:true,
//     message:"Log Out sucessfully"
// })
// })