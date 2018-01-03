#!/bin/sh

sh ./dockerhub/build.sh
sh ./heroku/build.sh
npm run infra
sh ./dockerhub/push.sh
sh ./heroku/push.sh