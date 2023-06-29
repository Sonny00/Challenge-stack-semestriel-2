import express from 'express'; 
import { json } from 'body-parser';
import 'express-async-errors'
import cookieSession from 'cookie-session'; 

import { currentUserRouter } from './routes/current-user';
import { signinUserRouter } from './routes/signin';
import { signupUserRouter } from './routes/signup';
import { signoutUserRouter } from './routes/signout';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/error-404';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);


// Création des routes 
app.use(currentUserRouter);
app.use(signinUserRouter);
app.use(signupUserRouter);
app.use(signoutUserRouter);


app.all('*', async (req, res) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app }; 