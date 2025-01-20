FROM node:20.18.1-alpine3.21
#@sha256:24fb6aa7020d9a20b00d6da6d1714187c45ed00d1eb4adb01395843c338b9372 as backend
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
# Docker-compose.yaml will deploy the .env file
RUN env
RUN node --version
CMD ["npm", "start"]