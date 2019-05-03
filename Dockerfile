FROM node:8-alpine

WORKDIR /usr/src/app
COPY . .

WORKDIR /usr/src/app/Server
RUN npm install

EXPOSE 3939

CMD ["npm","start"]