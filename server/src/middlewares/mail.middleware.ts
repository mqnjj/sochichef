import type { Request, Response, NextFunction } from 'express';
import type { iFormData } from '../types/mail.types.js';
import { isValidName, isValidPhoneNumber, isValidEmail } from '../utils/mail.validate.js';

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

export const validateFormDataMiddleware = (_: Request, res: Response, next: NextFunction) => {
  const data: iFormData = res.locals.formData;
  if (!data) {
    throw new Error(`Данные формы отсутствуют в res.locals`);
  }

  if (!isValidName(data.name)) {
    return res.status(400).json({
      title: 'Validation Error',
      message: `Request is incorrect`,
    });
  } else if (!isValidPhoneNumber(data.tel)) {
    return res.status(400).json({
      title: 'Validation Error',
      message: `Request is incorrect`,
    });
  } else if (!isValidEmail(data.email)) {
    return res.status(400).json({
      title: 'Validation Error',
      message: `Request is incorrect`,
    });
  }

  return next();
};
