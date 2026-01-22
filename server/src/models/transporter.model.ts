import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

const transporter: Transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_FROM!,
    pass: process.env.GMAIL_FROM_PASS!,
  },
});

export default transporter;
