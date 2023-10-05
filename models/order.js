import mongoose from "mongoose"

const orders = new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:"User",
        required:true
    },
    orderItem:{
        
            type:mongoose.ObjectId,
            ref:"Product",
            required:true
        }
       
   ,
    qty:{
        type:Number,
        default: 1
        },
    paymentInfo:{
        type:String,
        required:true
            },
    status: { type: String, required: true },
    orderStatus:{
            type:String,
            default:"Placed"
        },
    createdAt:{
        type:Date,
        default: Date.now
    }
    
    

})

const Order = mongoose.model('Order', orders)

export default Order;