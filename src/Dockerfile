FROM nginx:1.20.2
EXPOSE 80
COPY ./web/images/ /usr/share/nginx/html/images
COPY ./web/js/ /usr/share/nginx/html/js
COPY ./web/less/ /usr/share/nginx/html/less
COPY ./web/shapes/ /usr/share/nginx/html/shapes
COPY ./web/node_modules/ /usr/share/nginx/html/node_modules
COPY ./web/* /usr/share/nginx/html/

CMD ["nginx-debug", "-g", "daemon off;"]

