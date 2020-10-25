DOCKER_BUILD_DIR=/usr/src/build
DOCKER_APP_DIR=/usr/src/app
DOCKER_START_COMMAND=npm start
DOCKER_START_COMMAND_DEV=npm start


.docker-start: package.json 
	echo "${MONGO_USER}"
	ln -s $(DOCKER_BUILD_DIR) /usr/src/app/node_modules ; ${DOCKER_START_COMMAND_DEV}
