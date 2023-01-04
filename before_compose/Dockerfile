FROM nginx:1.21.6
RUN rm /etc/nginx/conf.d/default.conf
RUN mkdir -p /etc/nginx/ssl
RUN mkdir -p /etc/nginx/conf2.d
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY ./ssl /etc/nginx/ssl

