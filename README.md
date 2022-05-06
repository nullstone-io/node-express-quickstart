# Node Express Quickstart

This is a Node Express Quickstart for [Nullstone](https://nullstone.io).
This is based on the Express official [Hello World](https://expressjs.com/en/starter/hello-world.html).

This uses the Nullstone official [nullstone/node](https://hub.docker.com/repository/docker/nullstone/node) image.

## How to launch via Nullstone

1. Create a public web app. (Remember `app-name` for later)
2. Provision
  ```shell
  nullstone up --wait --block=<app-name> --env=<env-name>
  ```
3Build, push, and deploy
  ```shell
  docker build -t express .
  nullstone launch --source=express --app=<app-name> --env=<env-name>
  ```

## How to run locally

You can run this project locally inside Docker or using node alone.
To use docker, this project contains `docker-compose.yml` that runs with `NODE_ENV=development`.
This setup ensures that using Docker doesn't inhibit typical development workflows:
- Dependencies are installed on boot of docker container

```shell
docker compose up
```

Visit [http://localhost:9000](http://localhost:9000).

### Update dependencies

Any time you change `package.json`, you need to update your dependencies.
The dependencies will be installed on boot of the docker container; restart the container to update.

```shell
docker compose restart app
```

## Details about quickstart

This app was generated following these steps.
1. `yarn init`
2. `yarn add express`
3. Copy `app.js` from Hello World example.
