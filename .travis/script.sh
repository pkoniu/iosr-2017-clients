#!/bin/sh

sh ./dockerhub/build.sh
sh ./heroku/build.sh
npm run infra
sh .travis/dockerhub/push.sh
sh .travis/heroku/push.sh