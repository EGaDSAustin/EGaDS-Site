FROM node:lts-buster
COPY ./package*.json ./
RUN npm i --production --silent
COPY . .
EXPOSE 8080
CMD [ "npm start" ] 
# /*
# Docker build coommands

# docker build --tag egads-backend-prod:1.0 -f Dockerfile.prod .

# docker run -it egads-backend:1.0
# docker run -d -v -p 8080:8080 ./:/usr/src/app/ --name backend egads-backend:1.0
# */