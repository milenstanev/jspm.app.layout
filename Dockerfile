FROM node:latest
COPY . /usr/local/app
WORKDIR /usr/local/app
###RUN npm install
CMD ["npm", "start"]
