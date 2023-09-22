import mongoose from "mongoose"

const wishlistSchema = new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:"MynUser",
        required:true
    },
    orderItems: [
    {
        product:{
        type:mongoose.ObjectId,
        ref:"myntraproduct",
        required:true}
    }
    ],
   
})

const WishList = mongoose.model('WishList', wishlistSchema)
