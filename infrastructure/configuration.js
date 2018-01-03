const {
    HEROKU_APP_NAME = 'iosr2017clients'
} = process.env;

module.exports = {
    acm: false,
    name: HEROKU_APP_NAME,
    region: 'eu',
    maintenance: false,
    stack: 'container',
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
    },
    collaborators: [
            'patryk.konior@gmail.com',
            'stawickipiotr94@gmail.com'
    ]
};
