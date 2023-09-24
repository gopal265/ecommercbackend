import mongoose from "mongoose"

const orders = new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:"MynUser",
        required:true
    },
    orderItems: [{
        type:mongoose.ObjectId,
        ref:"myntraproduct",
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