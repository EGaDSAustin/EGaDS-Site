FROM node:lts-buster AS install
RUN mkdir /src
WORKDIR /src
COPY ./package*.json ./
RUN npm i --save-dev --production --silent
# COPY . .
WORKDIR /usr/src/app
EXPOSE 8080

ENTRYPOINT [ "npm" ]
CMD ["start"]

# /*
# Docker build coommands

# docker build --tag egads-backend-prod:1.0 -f Dockerfile.prod .

# docker run -it egads-backend:1.0
# docker run -d -v -p 8080:8080 ./:/usr/src/app/ --name backend egads-backend:1.0
# */