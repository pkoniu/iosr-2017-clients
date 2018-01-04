#!/bin/sh

sh .travis/dockerhub/build.sh
sh .travis/dockerhub/push.sh
npm run infra
heroku git:remote -a $(HEROKU_APP_NAME)-staging
git push heroku master
npm run test:integration
