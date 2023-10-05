import express from "express";
import { registerBYMail,   verifyOtp ,updateUser, getuser, loginByPassword, updateUserDetails} from "../controllers/auth.js";
import isAuthenticateuser from '../middlewares/auth.js'
const router = express.Router();

// router.post("/registerbymobile",registerByMobile);
router.post('/registerbymail',registerBYMail)
router.post('/:email/verifyotp',verifyOtp)
router.patch('/:email/updateuser',updateUser)
router.get('/:email/getuser',getuser)
router.patch("/:email/updateuserdetails",updateUserDetails)
router.get('/:email/:password/login',loginByPassword)

export default router;