const {
    HEROKU_APP_NAME = 'iosr2017clients'
} = process.env;

module.exports = {
    acm: false,
    name: HEROKU_APP_NAME,
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: {
        NODE_ENV: 'production'
    },
    addons: {
        librato: {
            plan: 'librato:development'
        },
        logentries: {
            plan: 'logentries:le_tryit'
        },
        mongolab: {
            plan: 'mongolab:sandbox'
        }
    }
};