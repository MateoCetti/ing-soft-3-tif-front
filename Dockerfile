# pull the official base image
FROM node:alpine AS BUILD_STAGE

# set working direction
WORKDIR /app

# install application dependencies
COPY . ./
RUN npm i

# build
RUN npm run build

FROM nginx as DEPLOY_STAGE

COPY --from=BUILD_STAGE /app/build /usr/share/nginx/html

EXPOSE 80 443