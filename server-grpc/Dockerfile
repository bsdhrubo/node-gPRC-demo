FROM node:16-alpine as base

# create working dir
WORKDIR /app

# copy dependencies from local to docker
COPY package*.json yarn.lock ./

#install dependencies
RUN yarn install --frozen-lockfile

# copy all from local dir to docker workdir
COPY . . 