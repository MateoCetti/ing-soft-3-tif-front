FROM nginx as DEPLOY_STAGE

ARG REACT_APP_BACK_URI

COPY ./build /usr/share/nginx/html

EXPOSE 80 443