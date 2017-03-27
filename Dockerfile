FROM node:latest
COPY . /usr/local/app
WORKDIR /usr/local/app
RUN npm install && npm i jspm -g && jspm install
CMD ["npm", "start"]
