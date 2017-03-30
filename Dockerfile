FROM node:latest
COPY . /usr/local/app
WORKDIR /usr/local/app
RUN npm i jspm -g ## Add other stuff als well if you need
CMD ["npm", "start"]
