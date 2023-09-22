import mongoose  from "mongoose"

const  bagSchema = new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:"MynUser",
        required:true
    },
    orderItems: [{
        product:{
            type:mongoose.ObjectId,
            ref:"myntraproduct",
            
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
