#!/bin/sh
set -e

docker login --username=_ --password=$HEROKU_AUTH_TOKEN registry.heroku.com

if [ "$TRAVIS_BRANCH" = "master" ]; then
    TAG="latest"
else
    TAG="$TRAVIS_BRANCH"
fi

docker build -f Dockerfile -t registry.heroku.com/$HEROKU_APP_NAME/web .
docker push registry.heroku.com/$HEROKU_APP_NAME/web
