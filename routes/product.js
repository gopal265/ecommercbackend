import express from "express"
import { createProduct, getSingleProduct, getallproducts } from "../controllers/product.js";

const router =  express.Router();

router.post('/createproduct',createProduct)
router.get('/getproducts',getallproducts)
router.get('/singleproduct/:id',getSingleProduct)

export default router;