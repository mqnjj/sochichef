import type { Request, Response, NextFunction } from 'express';
import type { iFormData } from '../types/mail.types.js';

interface iMyLocals {
  formData: iFormData;
}

export const checkFormDataMiddleware = (req: Request, res: Response<any, iMyLocals>, next: NextFunction) => {
  const { name, email, tel }: iFormData = req.body;

  if (!name || !email || !tel) {
    return res.status(400).json({
      title: 'Bad Request',
      message: 'Запрос содержит недостаточное количество данных',
    });
  } else {
    res.locals.formData = { name, tel, email };
    return next();
  }
};

// export const validateFormDataMiddleware = (req: Request, res: Response, next: NextFunction) => {};
