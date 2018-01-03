#!/bin/sh

sh .travis/dockerhub/build.sh
sh .travis/heroku/build.sh
npm run infra
sh .travis/dockerhub/push.sh
sh .travis/heroku/push.sh