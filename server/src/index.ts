import type { Express } from 'express';

import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import mailRouter from './routes/mail.router.js';
import cors from 'cors';
import transporter from './models/transporter.model.js';

dotenv.config();

const PORT: number = +process.env.PORT!;
const app: Express = express();
app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND!,
  }),
);

app.use('/api', mailRouter);

app.listen(PORT, async () => {
  try {
    console.log(`Server has been started on port ${PORT}`);
    transporter.verify((error: Error | null) => {
      console.log(error ? `Error with transporter: ${error?.message}` : 'Server is ready to send emails');
    });
  } catch (err) {
    console.error('Error: ', err);
  }
});
