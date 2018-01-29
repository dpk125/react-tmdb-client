FROM node:8.7-alpine

RUN mkdir -p /usr/src/client
WORKDIR /usr/src/client

CMD yarn install && yarn start
