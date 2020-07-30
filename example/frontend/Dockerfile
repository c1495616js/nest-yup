FROM node:12.13-alpine

WORKDIR /app

COPY ./frontend/package*.json ./
COPY ./custom_modules ../custom_modules

RUN npm install

COPY ./frontend .

EXPOSE 3000

ENTRYPOINT [ "npm","run", "start" ]