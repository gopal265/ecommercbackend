import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    phoneNumber :{
        type : Number,
        require : [true,'Error : Please enter valid number'],
        unique : true,
    },
    password :{
        type : String
    },
    firstName :{
        type:String,
        require:[true,'Error : Please Enter First Name ']
    },
    lastName :{
        type : String
    },
    userName:{
        type : String,

    },
    email :{
        type : String
    },
    address:{
        pincode:{
            type:Number
        },
        
        address1:{
            type:String
        },
        address2:{
         type:String
         },
         citystate:{
             type:String
         },
    },
    otp :{
        type : Number,
        
    }
}
)