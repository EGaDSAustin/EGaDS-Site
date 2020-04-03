DOCKER_BUILD_DIR=/usr/src/build
DOCKER_APP_DIR=/usr/src/app
DOCKER_START_COMMAND=npm start


.docker-start: package.json 
	ln -s $(DOCKER_BUILD_DIR)/node_modules /usr/src/app/ ; ${DOCKER_START_COMMAND}