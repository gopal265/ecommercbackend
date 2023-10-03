import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    phoneNumber :{
        type : Number,
        require : [true,'Error : Please enter valid number'],
        default : 0,
        sparse :true
    },
    password :{
        type : String,
        default : ''
    },
    verify:{
        type :String,
        default : "Unverified"
    },
    firstName :{
        type:String,
        require:[true,'Please Enter First Name ']
    },
    lastName :{
        type : String
    },
    userName:{
        type : String,
        require :true 

    },
    email :{
        type : String,
        validate : [validator.isEmail,"Please Enter Valid Email"],
        unique : true,
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
         city:{
             type:String
         },
    },
    otp :{
        type : Number,
        createdAt:{
            type:Date,
            require :true,
            expires : 300,
            default: Date.now()
        },
    token:{
        type:String
    }
        
    }
}
)

const User =  mongoose.model("User",userSchema);

export default User;