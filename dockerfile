FROM nginx:alpine

COPY . /usr/share/nginx/html

RUN ls -R /usr/share/nginx/html > /debug.txt

EXPOSE 80