import express from 'express';
import {postUser} from '../../controllers/userHandler.js'
import {getUser} from '../../controllers/userHandler.js'
import {getToken} from '../../controllers/userHandler.js'
import {UserRegValidationMiddleware} from '../../middlewares/validations/user.middleware.js'
import {UserLogValidationMiddleware} from '../../middlewares/validations/user.middleware.js'
import {UserTokenMiddleware} from '../../middlewares/validations/user.middleware.js'
const router = express.Router();
router.post('/signup',UserRegValidationMiddleware,postUser);
router.post('/signin',UserLogValidationMiddleware,getUser);
router.get('/token',getToken);

export default router ;