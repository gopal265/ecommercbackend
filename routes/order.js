import express from 'express'
import { createWishList, deleteWish, getWishList } from '../controllers/order.js';

const router = express.Router();

router.post('/createwish',createWishList)
router.get('/getwish/:id',getWishList)
router.put('/deletewish',deleteWish)

export default router;