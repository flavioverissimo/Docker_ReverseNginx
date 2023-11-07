<p align="center">Reverse Nginx to access nodejs application!<p align="center">

## Description

Application development using MySQL, Nodejs and Nginx. The objective was to create containers with their appropriate dependencies and configure reverse nginx to access the nodejs application that is obtaining data from mysql and also insert new data

## Requirements

To use this application you need to install Docker

## Docker Repository

- [My Repository](https://hub.docker.com/u/flavioverissimo)
- [My Nginx Image](https://hub.docker.com/r/flavioverissimo/nginx)
- [My NodeJS Image](https://hub.docker.com/r/flavioverissimo/nodejs)

## Running the application

First Option

```bash
# Creating network
$ docker network create netproject --driver bridge

# Creating MySQL container
$ docker run --name database -e MYSQL_ROOT_PASSWORD=mysql -e MYSQL_DATABASE=devproject --network netproject -d mysql:8.2.0

# Creating NodeJS container
$ docker run --name nodejs --network netproject -d flavioverissimo/nodejs:latest

# Creating Nginx container
$ docker run --name nginx -p 8080:80 --network netproject -d flavioverissimo/nginx:latest
```

Second Option

You just need to download the files and run:

```bash
# Running docker-compose.yaml
$ docker-compose up -d --build
```

## Stay in touch

- Author - [Flavio Verissimo Lima](https://www.flavioverissimo.dev)

## License

This project is licensed under the MIT License - see [LICENSE.md](LICENSE.md) for more information.
