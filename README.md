# VoltBot
## By Florian "FloRide" Reimat

## About
This repo is a discord bot for Epita, use to detect and show mistake for student's messages.

## Setup
Create a text file name `.env` at the root of the project
```sh
touch .env
```

And fill it with these lines
```sh
# Postgres
POSTGRES_USER=voltbot
POSTGRES_PASSWORD=<YOUR_DATABASE_PASSWORD>
POSTGRES_PORT=5432
POSTGRES_DB=${POSTGRES_USER}
PGDATA=/var/lib/postgresql/data

# Prisma
DATABASE_TYPE=postgresql
DATABASE_USER=${POSTGRES_USER}
DATABASE_PASSWORD=${POSTGRES_PASSWORD}
DATABASE_HOST=localhost
DATABASE_PORT=${POSTGRES_PORT}
DATABASE_DB=${POSTGRES_DB}

DATABASE_URL="${DATABASE_TYPE}://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_DB}?schema=public"

# Discord
DISCORD_TOKEN="<YOUR_DISCORD_BOT_TOKEN>"
``` 


## Launch the bot
There are 2 ways possible:

### Simple:
```sh 
# Launch docker-compose in --detach mode
docker-compose up -d
```

### Less simple :P:
You need to manually setup your postgresql database and then:
```sh
# Install Package
npm install

# Migrate Database
npx prisma generate

# Launch it
npm start
```
