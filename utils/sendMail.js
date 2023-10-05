import nodemailer from "nodemailer"


  
const sendEmail = async (email,otp,user,res,type='') => {
    try {
        console.log(email,otp,user)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port:465,
            secure:true,
            secureConnection:false,

            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
            tls :{
                rejectUnauthorized:true
            }
        });

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: "OTP for registration",
            text: `Your OTP for registeration  is: ${otp}`,
        });
        console.log(user)
        user.otp = otp;
        await user.save({ validateBeforeSave: false })
        res.status(200).json({message:"OTP send to the mail",success:true,user})
    } catch (error) {
       res.status(400).json({success:false})
    }
};
export default   sendEmail;