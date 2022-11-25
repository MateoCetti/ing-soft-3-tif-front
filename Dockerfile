FROM nginx as DEPLOY_STAGE

COPY ./build /usr/share/nginx/html

EXPOSE 80 443