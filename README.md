# iosr-2017-clients

### FAQ
- Cannot start docker with app on OSX because of failure about connecting to mongo?
    - `sudo ifconfig lo0 alias 10.0.2.2`
    - Put `MONGO_HOST=10.0.2.2` to .env.