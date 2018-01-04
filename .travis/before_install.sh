#!/bin/sh

openssl aes-256-cbc -K $encrypted_b7b87b4dd2e2_key -iv $encrypted_b7b87b4dd2e2_iv -in .netrc.enc -out .netrc -d
sudo cat .netrc > ~/.netrc