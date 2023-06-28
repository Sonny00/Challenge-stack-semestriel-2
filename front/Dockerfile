# Utilisez une image de base contenant Node.js
FROM node:14-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
