FROM node:12.13-alpine

WORKDIR /app

COPY ./backend/package*.json ./
COPY ./custom_modules ../custom_modules

RUN npm install

COPY ./backend .

EXPOSE 4000

ENTRYPOINT [ "npm","run", "start:dev" ]