FROM node:16-alpine

WORKDIR /src

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

ENTRYPOINT [ "yarn", "start:dev" ]