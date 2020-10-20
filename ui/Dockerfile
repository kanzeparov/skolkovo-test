FROM node:13-slim
WORKDIR /app
COPY . /app
RUN apt-get update
RUN apt-get install -y nginx
COPY /nginx/nginx-prod.conf /etc/nginx/nginx.conf
EXPOSE 80
RUN chmod 777 -R /usr/share/nginx/html
RUN chmod 777 /app/ENTRYPOINT.sh
RUN yarn install
CMD "./ENTRYPOINT.sh"
