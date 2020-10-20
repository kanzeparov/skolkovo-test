#!/bin/bash

export REACT_APP_BACKEND_URL=$BACKEND_URL
echo $BACKEND_URL
echo $BACKEND
yarn build
cp -rf -r build/* /usr/share/nginx/html/
nginx -g "daemon off;"
