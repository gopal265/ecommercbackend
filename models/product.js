import mongoose, { Schema } from "mongoose"

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required : true,
        unique : true
    },
    description:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        min:1,
        max:5
    },
    sellingPrice:{
        type:Number,
        required:true,
        min:[1,'Invalid Price']
    },
    mrp :{
        type:Number,
        required:true,
        min:[1,'Invalid Price']
    },
    brand:{
        type:String,
        required:true
    },
    stock:{
        type:String,
        min:[0,'Invalid Stock Number'],
        default:0
    },
    category:{
        type:String,
        required:true
    },
    images:{
        type:[String],
        required:true,
    },
    colors:{
        type:Schema.Types.Mixed
    },
    sizes:{
        type:Schema.Types.Mixed
    },
    thumbnail:{
        type:String
    },
    highlights:{
        type:[String]
    },
    deleted:{
        type:Boolean,
        default:false
    },
    gender:{
        type:String,
        required:true
    },
    createdDate:{
        type:Date,
        default:Date.now()
    }


    
    
    


})



const Product = mongoose.model('Product', productSchema)

export default Product;