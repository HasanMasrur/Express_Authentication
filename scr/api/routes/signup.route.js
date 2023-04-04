import express from 'express';
import {postUser} from '../../controllers/userHandler.js'
import {UserRegValidationMiddleware} from '../../middlewares/validations/user.middleware.js'

const router = express.Router();
router.post('/signup',UserRegValidationMiddleware,postUser);

export default router ;