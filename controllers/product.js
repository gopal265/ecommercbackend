import RC from "../middlewares/resolveAndCatch.js"
import Product from "../models/product.js";
import errorHandler from "../utils/errorhandle.js";
import ImageKit from "imagekit";
import searchFilter from "../utils/searchFilter.js";
import dotenv from "dotenv"

dotenv.config()

export const createProduct = RC( async(req, res, next)=>{
    const product = await Product.create(req.body)

    res.status(200).json({
        success:true,
        product
    })
})

export const imagekits = RC(async (req, res, next)=>{
    var imagekit = new ImageKit({
        publicKey : process.env.PUBLIC_KEY,
    privateKey : process.env.PRIVATE_KEY,
    urlEndpoint : 'https://ik.imagekit.io/shopcart578/'
});
    
  
imagekit.listFiles({
    
}, function(error, result) { 
    if(error) console.log(error);
    else {
        res.status(200).json({
            result
        })
    }
   
});
})

export const getallproducts = RC(async (req, res, next)=>{
    const {low,date, width} = req.query
    const searchFilter1 = new searchFilter(Product.find(), req.query).filter().sort(low, date).pagination(width).search()
    const searchFilter2 = new searchFilter(Product.find(), req.query).fiterbyCategory()
    const searchFilter3 = new searchFilter(Product.find(), req.query).filter().sort(low, date).search()
    const products = await searchFilter1.Product_find;
    const pro = await searchFilter2.Product_find;
    const productlength = await searchFilter3.Product_find;
    let length = productlength.length
    res.status(200).json({
        products,
        pro,
        length
    })
})

export const  getSingleProduct = RC(async (req, res, next)=>{
    const product = await Product.findById(req.params.id)
    console.log(product)
    if (!product) {
        return next(new errorHandler("product not found", 400));
    }
    
    const similar_product = await Product.find({category: product.category}).limit(15)
    
    res.status(200).json({
        success:true,
        product,
        similar_product
    })
})

 