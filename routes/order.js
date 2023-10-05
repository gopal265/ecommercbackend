import express from 'express'
import { createBag, createOrder, createWishList, deleteBag, deleteWish, getBag, getOrders, getWishList, sendOTP } from '../controllers/order.js';

const router = express.Router();

router.post('/sendOtp',sendOTP)
router.post('/placeorder/:id',createOrder)
router.get('/getorders/:id',getOrders)
router.post('/createwish',createWishList)
router.get('/getwish/:id',getWishList)
router.put('/deletewish',deleteWish)
router.post('/createbag',createBag)
router.get('/getbag/:id',getBag)
router.put('/deletebag',deleteBag)
export default router;
