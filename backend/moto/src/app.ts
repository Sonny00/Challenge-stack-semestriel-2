import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { currentUser, errorHandler, NotFoundError } from '@esgivroom/common';
import { createMotoRouter } from '../routes/new'
import { showMotoRouter } from '../routes/show'
import { indexMotoRouter } from '../routes/index'
import { updateMotoRouter } from '../routes/update'

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);

app.use(createMotoRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);
app.use(currentUser)
app.use(showMotoRouter)
app.use(indexMotoRouter)
app.use(updateMotoRouter)

export { app };