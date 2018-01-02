# iosr-2017-clients
[![Build Status](https://travis-ci.org/pkoniu/iosr-2017-clients.svg?branch=master)](https://travis-ci.org/pkoniu/iosr-2017-clients)

### Step by step
1. Clone the repository
2. `npm install`
3. `docker build -t iosr-2017-clients .`
4. `docker run -p 4000:80 iosr-2017-clients`
    - If there's a problem with connection to mongodb either wait for docker-compose to be ready or look at FAQ.

### FAQ
- Cannot start docker with app on OSX because of failure about connecting to mongo?
    - `sudo ifconfig lo0 alias 10.0.2.2`
    - Put `MONGO_HOST=10.0.2.2` to .env.
- How to start everything using docker-compose?
    - `docker-compose -f [docker-compose.yml for your OS] up -d`