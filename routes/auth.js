import express from "express";
import { registerBYMail, registerByMobile, verifyOtp } from "../controllers/auth.js";

const router = express.Router();

router.post("/registerbymobile",registerByMobile);
router.post('/registerbymail',registerBYMail)
router.post('/verifyotp',verifyOtp)

export default router;