FROM node:latest

RUN mkdir /usr/src/app
RUN cd /usr/src/app
COPY ./package.json /usr/src/app/package.json
RUN npm install
COPY ./ /usr/src/app/
EXPOSE 8080
WORKDIR /usr/src/app

ENTRYPOINT [ "npm" ]
CMD ["start"]

# /*
# Docker build coommands

# docker build --tag egads-backend:1.0 .

# docker run -it -w /usr/src/app egads-backend:1.0
# docker run -d -v ./:/usr/src/app/ --name backend egads-backend:1.0
# */