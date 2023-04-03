import express from 'express';
import userRoute from './routes/signup.route.js';
const router = express.Router();
router.use('/auth',userRoute);
export default router ;