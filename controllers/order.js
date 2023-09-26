import RC from "../middlewares/resolveAndCatch.js"
import WishList from "../models/wishlist.js"
import Bag from "../models/bag.js"
import errorHandler from "../utils/errorhandle.js"

export const createOrder = RC(async (req, res, next) => {
    
    const {} = req.body
  
  })

export const createWishList = RC(async (req, res, next) => {
   const {user, orderItems} = req.body
   const Finduser = await WishList.find({user: user})
    
   if (Finduser.length !== 0 ) {
      const product = await WishList.find({user:user})
      function f (data){
        return data.product ==  orderItems[0].product
      }
      if (product[0].orderItems.filter(f).length > 0) {
     
        return next(new errorHandler("Product all ready added in Wishlist", 404));
      }else{
        await WishList.updateOne({user: user}, {$push:{
          orderItems: [orderItems[0]]
        }})
      
      }
      
    }else{
       console.log('else')
      const wishlist = await WishList.create(req.body)

    }
    
    res.status(200).json({
      success:true,
      
  })
  
  })

export const   getWishList = RC(async (req, res, next) => {
    
    const wishlist = await WishList.findOne({user: req.params.id}).populate('orderItems.product')

    res.status(200).json({
      success:true,
      wishlist
      
  })
  
})

export const deleteWish = RC(async (req, res, next) => {
    console.log(req.body)
    const {user, product} = req.body
  
    const users =  await Wishlist.updateOne({user: user}, {$pull:{
          orderItems: {product:product}
        }})
  
        console.log(users)
     
     res.status(200).json({
       success:true
       
   })
   
   })

export const createBag = A(async (req, res, next) => {
  // console.log(req.body)
  const {user, orderItems} = req.body
  console.log(orderItems)
  const Finduser = await Bag.find({user: user})
   if (Finduser.length !== 0 ) {
    
    const product = await Bag.find({user:user})
    function f (data){
      return data.product ==  orderItems[0].product
    }
    
    if ( product[0].orderItems.filter(f).length > 0 ) {

      return next(new Errorhandler("Product all ready added in Bag", 404));

    }else{

      await Bag.updateOne({user: user}, {$push:{
        orderItems: [orderItems[0]]
      }})
    
    }
     
   }else{

     await Bag.create(req.body)

   }
   
   res.status(200).json({
     success:true,
     
 })
 
 })

 exports.getbag = A(async (req, res, next) => {
    
  const bag = await Bag.findOne({user: req.params.id}).populate('orderItems.product')

  
  res.status(200).json({
    success:true,
    bag
    
})

})

exports.updateqtybag = A(async (req, res, next) => {
 
  const {id, qty} = req.body
  
  const bag = await Bag.updateOne({'orderItems._id':id},{
    $set:{'orderItems.$.qty': qty}
  })

   res.status(200).json({
     success:true
     
 })
 
 })

 exports.deletebag = A(async (req, res, next) => {
  console.log(req.body)
  const {user, product} = req.body

  const users =  await Bag.updateOne({user: user}, {$pull:{
        orderItems: {product:product}
      }})
   
   res.status(200).json({
     success:true
     
 })
 
 })

