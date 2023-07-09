# Utilisez une image de base contenant Node.js
FROM node:14-alpine

# Définissez le répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# Copiez le package.json et le package-lock.json dans le conteneur
COPY package*.json ./

# Installez les dépendances du projet
RUN npm install

# Copiez tous les fichiers du projet dans le conteneur
COPY . .

# Démarrez l'application Express.js
CMD ["npm", "start"]
