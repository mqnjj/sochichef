import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import type { Transporter } from 'nodemailer';

dotenv.config();

const transporter: Transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_FROM!,
    pass: process.env.GMAIL_FROM_PASS!,
  },
});

export default transporter;
