import RC from "../middlewares/resolveAndCatch.js"
import WishList from "../models/wishlist.js"
import Bag from "../models/bag.js"
import errorHandler from "../utils/errorhandle.js"

export const createOrder = RC(async (req, res, next) => {
    
    const {} = req.body
  
  })

export const createWishList = RC(async (req, res, next) => {
   const {user, orderItems} = req.body
   const findUser = await WishList.findOne({user: user})
    
   if (findUser) {
   
      if (findUser.orderItems.filter(prod => prod.product == orderItems[0].product).length > 0) {
     
        return next(new errorHandler("Product already added in Wishlist", 400));
      }else{
        await WishList.updateOne({user: user}, {$push:{
          orderItems: [orderItems[0]]
        }})
        return res.status(200).json({message:"Product added to WishList",success:true})
      
      }
      
    }else{
      
      const wishlist = await WishList.create(req.body)
      return res.status(200).json({message:"Product added to WishList",success:true})

    }
    
  
  
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
  
    const users =  await WishList.updateOne({user: user}, {$pull:{
          orderItems: {product:product}
        }})
  
        console.log(users)
     
     res.status(200).json({
       success:true
       
   })
   
   })

export const createBag = RC(async (req, res, next) => {
  // console.log(req.body)
  const {user, orderItems} = req.body
  console.log(orderItems)
  const findUser = await Bag.findOne({user: user})
   if ( findUser ) {
    
    if(findUser.orderItems.filter(prod => prod.product == orderItems[0].product).length > 0){

      return next(new errorHandler("Product all ready added in Bag", 400));

    }else{

      await Bag.updateOne({user: user}, {$push:{
        orderItems: [orderItems[0]]
      }
    })
      return res.status(2000).json({message:"Product added to Bag successfully",success:true})
    
    }
     
   }else{

     await Bag.create(req.body)
     return res.status(200).json({message:"Product added to Bag successfully",success:true})

   }
   
 
 
 })

 export const getBag = RC(async (req, res, next) => {
    
  const bag = await Bag.findOne({user: req.params.id}).populate('orderItems.product')

  
  res.status(200).json({
    success:true,
    bag
    
})

})

export const updateBagQty = RC(async (req, res, next) => {
 
  const {id, qty} = req.body
  
  const bag = await Bag.updateOne({'orderItems._id':id},{
    $set:{'orderItems.$.qty': qty}
  })

   res.status(200).json({
     success:true
     
 })
 
 })

 export const deleteBag = RC(async (req, res, next) => {
  console.log(req.body)
  const {user, product} = req.body

  const users =  await Bag.updateOne({user: user}, {$pull:{
        orderItems: {product:product}
      }})
   
   res.status(200).json({
     success:true
     
 })
 
 })

