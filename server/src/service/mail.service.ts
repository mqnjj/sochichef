import transporter from '../models/transporter.model.js';
import type { iFormData } from '../types/mail.types.js';
import type { SendMailOptions, SentMessageInfo } from 'nodemailer';

class MailService {
  async sendMail({ name, tel, email }: iFormData) {
    const mailOptions: SendMailOptions = {
      to: process.env.GMAIL_TO!,
      from: process.env.GMAIL_FROM!,
      subject: `Новая заявка с сайта https://sochichef.ru`,
      text: `Имя: ${name}\nПочта: ${email}\nТелефон: ${tel}`,
    };

    const info: SentMessageInfo = await transporter.sendMail(mailOptions);
    return info;
  }
}

export default new MailService();
