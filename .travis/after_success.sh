#!/bin/sh

heroku pipelines:promote -a $(HEROKU_APP_NAME)-staging -r master -t $(HEROKU_APP_NAME)-production
