# Simple NestJS

## Table of content
- [Technologies](#technologies)
- [About](#about)
- [Running the Project](#running-the-project)
  - [Using Docker](#using-docker)
  - [On your machine](#on-your-machine)
- [Services documentation](#services-documentation)
- [Author](#author)

## Technologies
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=ffffff)
![Nest.js](https://img.shields.io/badge/-NestJS-E0234E?style=flat&logo=nestjs&logoColor=fff)
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat&logo=Docker&logoColor=fff)
![Redis](https://img.shields.io/badge/-Redis-DC382D?style=flat&logo=Redis&logoColor=fff)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat&logo=PostgreSQL&logoColor=fff)
![Swagger](https://img.shields.io/badge/-Swagger-85EA2D?style=flat&logo=swagger&logoColor=000)


## About
**Simple NestJS** is an API that handles users, products, and order information bringing basic services to shopping platforms.

## Before Running the Project
It's necessary to create a new `.env` file in the root project to define all necessary environment variables, there is a `.env.example` file with a variable list. Anyway, you can learn more about them here.
| Key | Description |
|-----|-------------|
| `PORT` | Port to expose the API |
| `DB_PG_HOST` | Postgres server host |
| `DB_PG_PORT` | Postgres server port |
| `DB_PG_DATABASE` | Postgres database name |
| `DB_PG_USERNAME` | Postgres access username |
| `DB_PG_PASSWORD` | Postgres access password |

## Running the Project
### Using Docker
I truly recommend you use docker and avoid any conflicts with other dependencies, libraries, and projects. In the same way, you will be able to start the project and database with just one command.
#### Prerequisite
- Have any experience using docker as a development tool. Here is the [docs](https://docs.docker.com/get-started/02_our_app/) 
- Install [Docker](https://docs.docker.com/get-docker/) by your OS.

#### Build the Project
Before running the project, it's necessary to build the docker image for the app and database on your machine. So, you need to run the command above in your terminal located on the root project directory.
```bask
$ docker-compose build
```

#### Run The Project
Now we can run the project and database. Once you build the image you can run the above command to initialize all your environment.
```bash
$ docker-compose run -d
```
When you execute this, in general, docker will do two things:
1. Initialize and expose the PostgreSQL container on port 5432. You can see all configurations and make any changes on the `docker-compose.yml` file.
2. Once PostgreSQL is already up, the app container will begin to set up on port 3500. Automatically the command `npm run start:dev` will be executed, which means that when you make a change in the project the docker container will be updated automatically. You can see how is this working on `docker-compose.yml` and `docker-compose.override.yml`.

If you want to confirm that everything is running good, you can execute the command above and see the containers list:
```bash
$ docker ps
```

![image](https://user-images.githubusercontent.com/38932497/191145800-d3b0d479-415c-4846-bc40-9a4c86ce6266.png)

For more information visit docker documentation [here](https://docs.docker.com/get-started/02_our_app/)

### On your machine
If you prefer running the API locally, ensure you meet all these prerequisites:
#### Prerequisite
- Install NodeJS to execute javascript without any browser. You can install it [here](https://nodejs.org/en/download/).
- Install and set up PostgreSQL workspace for the database. You can install it [here](https://www.postgresql.org/download/).

#### Installation
Once you have NodeJS and PostgreSQL in your machine, run the command above in your terminal located on the root project:
```bash
$ npm install
```

#### Run the Project
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Services documentation
This project is using [Swagger](https://swagger.io/) to map all endpoints, requests, and responses for each module. If you want to see this information, in your browser, go to `http://localhost:[PORT]/api` and you will see something like this:

![image](https://user-images.githubusercontent.com/38932497/191145681-f7cf0dab-bfcf-4572-a88e-ed803321f7c6.png)


### Author
- Author: Rafael Vilomar
- LinkedIn: https://www.linkedin.com/in/rafavilomar/
- Email: rafavilomar@gmail.com

