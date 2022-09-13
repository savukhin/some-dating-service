FROM node:16.15.0-alpine as build

WORKDIR /app

COPY ./app/package.json ./app/package-lock.json ./

RUN npm ci
ENV PATH /app/node_modules/.bin:$PATH

COPY ./app .
RUN npm run build


FROM nginx:1.17.1-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 4200
