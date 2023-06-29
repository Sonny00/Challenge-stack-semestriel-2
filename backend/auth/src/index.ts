import mongoose from 'mongoose';
import { app } from './app';

// Connexion à la base de données
const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY doit être défini');
  }
  
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
