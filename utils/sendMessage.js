import {sendMessage} from 'fast-two-sms'

const  sendMsg = (options,user,res,req,next) =>sendMessage(options).then(response => {
  
    if (response.return === true) {
      
      async function fun() {
        user.otp = otp;
        await user.save({ validateBeforeSave: false })
      }
      fun()
     
      res.status(200).json({
        success: true,
        user,
        message:`OTP Sent on ${user.phonenumber} Successfully`
      })
      
    } else {
      console.log(response)
      res.status(400).json({
        success: false,
        
      })
      
    }
  });

  export default sendMsg;