# Manual heroku deployment guide

## requirements:
- [heroku cli](https://devcenter.heroku.com/articles/heroku-cli)
- [docker](https://www.docker.com/products/docker-desktop)


## guide:
1. login to heroku cli with `heroku login` and follow the steps there
2. login to heroku container with `heroku container:login` make sure your docker daemon is runnin'
3. cd into backend folder with `cd backend`
4. push changes to the heroku container repo with `heroku container:push web`
5. Run `python heroku_env.py` to set heroku environment variables
6. release the image with `heroku container:release web`


## references:
- [Heroku article for deployment](https://devcenter.heroku.com/articles/container-registry-and-runtime)