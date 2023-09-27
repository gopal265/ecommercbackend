import mongoose from "mongoose"

const orders = new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:"User",
        required:true
    },
    orderItems: [{
        type:mongoose.ObjectId,
        ref:"Product",
        qty:{type:Number},
        required:true
    }],
    createdAt:{
        type:Date,
        default: Date.now
    },
    paymentInfo:{
        status: { type: String, required: true },
    },
    

})

const Order = mongoose.model('Order', orders)

export default Order;