import mongoose  from "mongoose"

const  bagSchema = new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:"User",
        required:true
    },
    orderItems: [{
        product:{
            type:mongoose.ObjectId,
            ref:"Product",
            
            required:true,
        },
        qty:{
            type:Number, 
            default: 1, 
            required:true
        },
    }],
   
})

const Bag = mongoose.model('Bag', bagSchema);

export default Bag;
