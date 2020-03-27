FROM node:latest

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

ENTRYPOINT [ "npm" ]
CMD ["start"]

# /*
# Docker build coommands

# docker build --tag egads-backend:1.0 .

# docker run -it -w /usr/src/app egads-backend:1.0
# docker run -d -v ./:/usr/src/app/ --name backend egads-backend:1.0
# */