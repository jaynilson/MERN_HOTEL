import express from "express";//what is difference between express and Express and {}
import { registerUser, loginUser, getMe } from "../controllers/authController";
import protect from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

export default router;