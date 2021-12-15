FROM node:14.17 as builder
WORKDIR /usr/src/app/
COPY . .
RUN yarn
RUN npm run build --prod

FROM nginx as final 
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/
RUN mkdir /usr/src/dist/
COPY --from=builder /usr/src/app/dist/ /usr/src/dist/
EXPOSE 80:80