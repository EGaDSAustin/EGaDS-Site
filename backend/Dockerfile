FROM node:latest

RUN mkdir /usr/src/app
COPY ./package.json /usr/src/app/package.json
RUN cd /usr/src/app
RUN npm install


CMD ["node", "app.js"]