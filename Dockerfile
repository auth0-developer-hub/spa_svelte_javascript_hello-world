FROM node:16.15.0-slim
ENV NODE_ENV development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY src src
COPY index.html index.html
COPY vite.config.js vite.config.js

EXPOSE 4040

CMD [ "npm", "run", "dev" ]
