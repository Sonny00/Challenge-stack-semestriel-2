import mongoose from 'mongoose';
import { app } from './app';

// Connexion à la base de données
const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY doit être défini');
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI doit être défini');
  }
  
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log('Connecté à la base de données');
  } catch (err) {
    console.error(err);
  }
};

app.listen(3000, () => {
  console.log('Le service d\'authentification est démarré sur le port 3001 !');
});

start();
