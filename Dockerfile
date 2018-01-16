FROM node:8.7-alpine

RUN mkdir -p /usr/src/client

WORKDIR /usr/src/client

COPY package.json yarn.lock ./
RUN yarn install

COPY . ./

CMD yarn start
