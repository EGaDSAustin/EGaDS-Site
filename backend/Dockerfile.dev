FROM node:lts-buster

RUN mkdir -p /usr/src/build
WORKDIR /usr/src/build
COPY ./package*.json ./
RUN npm i --production --silent
# COPY . .
WORKDIR /usr/src/app
EXPOSE 8080

ENTRYPOINT [ "make" ]
CMD [ ".docker-start" ]

# /*
# Docker build coommands

# docker build --tag egads-backend:1.0 .

# docker run -it -w /usr/src/app egads-backend:1.0
# docker run -d -v ./:/usr/src/app/ --name backend egads-backend:1.0
# */