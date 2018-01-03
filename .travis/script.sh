#!/bin/sh

sh .travis/dockerhub/build.sh
sh ./heroku/build.sh
npm run infra
sh ./dockerhub/push.sh
sh ./heroku/push.sh