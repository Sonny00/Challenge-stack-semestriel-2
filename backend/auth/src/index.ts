import express from 'express'; 
import { json } from 'body-parser';

import { currentUserRouter } from './routes/current-user';
import { signinUserRouter } from './routes/signin';
import { signupUserRouter } from './routes/signup';
import { signoutUserRouter } from './routes/signout';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/error-404';
import 'express-async-errors'

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

// Error handlers
app.use(errorHandler);


app.use(currentUserRouter);

app.listen(3001, () => {
    console.log('Le serveur est démarré sur le port 3001');
}); 

