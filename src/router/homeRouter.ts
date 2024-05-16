import { Request, Response, Router } from 'express';
import { store } from '../controllers/homeController'

const router = Router();

router.post('/validate-password', store);


export default router;