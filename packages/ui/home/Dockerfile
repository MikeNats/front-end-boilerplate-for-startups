# STAGE 2
FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist /usr/share/nginx/html


EXPOSE 5001
CMD ["nginx", "-g", "daemon off;"]