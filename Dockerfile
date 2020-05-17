FROM node:12.16.3-alpine3.11

WORKDIR /app

RUN yarn install

CMD [ "yarn", "start" ]