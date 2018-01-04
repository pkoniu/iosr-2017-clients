const {
    HEROKU_APP_NAME = 'iosr2017clients'
} = process.env;

module.exports = {
    name: 'iosr2017-clients-pipeline',
    apps: {
        staging: `${HEROKU_APP_NAME}-staging`,
        production: `${HEROKU_APP_NAME}-production`
    }
};