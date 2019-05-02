FROM node:8-alpine

WORKDIR /usr/src/app
COPY . .

WORKDIR /usr/src/app/Server
RUN npm install

EXPOSE 8080

CMD ["npm","start"]