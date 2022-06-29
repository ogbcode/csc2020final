FROM nginx:latest

COPY nginx-primer/conf.d/* /etc/nginx/conf.d/

RUN mkdir /www

RUN mkdir /www/html

COPY nginx-primer/html/ /www/html/
