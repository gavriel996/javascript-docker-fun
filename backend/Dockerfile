#FROM jenkins/jenkins:2.375.1-lts-alpine  
FROM node:20.18.1-alpine3.21@sha256:24fb6aa702 as backend
WORKDIR /usr/src/app
COPY . /usr/src/app
# COPY package.json .
# COPY package-lock.json .
RUN npm install
# test before and after to see its working
RUN env
RUN export .env
RUN env
RUN node --version
CMD "npm" "start"