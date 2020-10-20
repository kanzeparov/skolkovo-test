FROM node:13-slim
WORKDIR /app
COPY . /app
RUN yarn build
EXPOSE 9001
CMD ["node", "./dist/main.js"]
