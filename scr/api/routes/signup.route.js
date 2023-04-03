import express from 'express';
import {postUser} from '../../controllers/userHandler.js'

const router = express.Router();
router.post('/signup',postUser);

export default router ;