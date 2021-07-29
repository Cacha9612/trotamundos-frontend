FROM node:14.17

WORKDIR /usr/src/app
COPY . .
RUN npm install -g @angular/cli
RUN yarn install
EXPOSE 4200

CMD [ "ng", "serve" ]