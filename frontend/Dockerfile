FROM node:lts-buster
RUN mkdir /src
WORKDIR /src
COPY ./package*.json ./
RUN npm i --save-dev --production --silent
COPY . .
EXPOSE 8080

ENTRYPOINT [ "npm" ]
CMD ["start"]
