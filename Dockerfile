FROM node:carbon

WORKDIR /usr/src/iosr-2017-clients

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80
CMD [ "npm", "start" ]