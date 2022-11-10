# syntax=docker/dockerfile:1
FROM node:12-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /swagger_website
COPY . /
RUN yarn install --production
CMD ["node", "index.js"]
EXPOSE 3000