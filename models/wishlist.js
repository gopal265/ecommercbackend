import mongoose from "mongoose"

const wishlistSchema = new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:"User",
        required:true
    },
    orderItems: [
    {
        product:{
        type:mongoose.ObjectId,
        ref:"Product",
        required:true}
    }
    ],
   
})

const WishList = mongoose.model('WishList', wishlistSchema)
export default WishList;