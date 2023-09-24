import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    userEmail : {
        type : String,
        require:true
    },
    token : {
        type:String
    }
}

)

const Token = mongoose.model("Token",tokenSchema)

export default Token