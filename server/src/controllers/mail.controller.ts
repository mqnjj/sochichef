import type { Request, Response, NextFunction } from 'express';
import type { iFormData } from '../types/mail.types.js';
import mailService from '../service/mail.service.js';
import type { SentMessageInfo } from 'nodemailer';

class mailController {
  async sendMail(_: Request, res: Response, next: NextFunction) {
    try {
      const data: iFormData = res.locals.formData;
      if (!data) {
        throw new Error(`Данные формы отсутствуют в res.locals`);
      }
      const info: SentMessageInfo = await mailService.sendMail(data);
      return res.status(201).json({
        title: 'Created',
        message: 'Письмо отправлено',
        info: {
          messageId: info.messageId,
          data,
        },
      });
    } catch (err) {
      return next(err);
    }
  }
}

export default new mailController();
