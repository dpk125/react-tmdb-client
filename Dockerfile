FROM node:8.7-alpine

RUN mkdir -p /usr/src/client
WORKDIR /usr/src/client

RUN yarn install

CMD yarn start
