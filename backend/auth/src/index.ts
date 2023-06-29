import express from 'express'; 
import { json } from 'body-parser';
import mongoose from 'mongoose';
import 'express-async-errors'

import { currentUserRouter } from './routes/current-user';
import { signinUserRouter } from './routes/signin';
import { signupUserRouter } from './routes/signup';
import { signoutUserRouter } from './routes/signout';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/error-404';

const app = express();
app.use(json());


// Création des routes 
app.use(currentUserRouter);
app.use(signinUserRouter);
app.use(signupUserRouter);
app.use(signoutUserRouter);


app.all('*', async (req, res) => {
    throw new NotFoundError();
});

app.use(errorHandler);

// Connexion à la base de données
const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    
    console.log('Connecté à la base de données');
  } catch (err) {
    console.error(err);
  }
};

app.listen(3001, () => {
  console.log('Le service d\'authentification est démarré sur le port 3001 !');
});

start();
