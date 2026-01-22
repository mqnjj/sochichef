import { Router } from 'express';
import { checkFormDataMiddleware } from '../middlewares/mail.middleware.js';
import mailController from '../controllers/mail.controller.js';

const router: Router = Router();

router.post('/mail', checkFormDataMiddleware, mailController.sendMail);

export default router;
