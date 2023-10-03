import express from 'express'
import { createBag, createWishList, deleteBag, deleteWish, getBag, getWishList } from '../controllers/order.js';

const router = express.Router();

router.post('/createwish',createWishList)
router.get('/getwish/:id',getWishList)
router.put('/deletewish',deleteWish)
router.post('/createbag',createBag)
router.get('/getbag/:id',getBag)
router.put('/deletebag',deleteBag)
export default router;