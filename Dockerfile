FROM node:latest
COPY . /usr/local/app
WORKDIR /usr/local/app
RUN npm i jspm -g
CMD ["npm", "start"]
