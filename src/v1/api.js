const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const _ = require('lodash');

const asyncMiddleware = fn => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next))
            .catch(next);
    };
};


module.exports = (mongodb) => {
    const app = express();

    const clientsRepo = require('./repositories/clients')(mongodb.collection('clients'));

    app.post('/auth/register', asyncMiddleware(async (req, res, next) => {
        const newUser = req.body;

        try {
            const hash = await bcrypt.hash(newUser.password, 10);
            console.log('registering user: ', {
                login: newUser.login,
                password: hash,
                registrationDate: new Date()
            });
            const ops = await clientsRepo.createNew({
                login: newUser.login,
                password: hash,
                registrationDate: new Date()
            });
            const toReturn = _.omit(ops, 'password');
            return res.status(201).json(toReturn);
        } catch (e) {
            return next(e);
        }

    }));

    app.post('/auth/login', asyncMiddleware(async (req, res, next) => {
        const userToLogin = req.body;
        let foundUser;

        try {
            const user = await clientsRepo.getByQuery({login: userToLogin.login});
            foundUser = user[0];
            const toAuthenticate = user[0];
            if (!toAuthenticate) {
                return next({
                    status: 404,
                    message: `User ${userToLogin.login} not found.`
                });
            }

            const compareResult = await bcrypt.compare(userToLogin.password, toAuthenticate.password);
            if (!compareResult) {
                return next({
                    status: 403
                });
            }

            const token = await jwt.sign({user: foundUser}, 'TURBO_SECRET');
            return res.status(200).json({token});
        } catch (e) {
            return next(e);
        }
    }));

    app.use('/clients', require('./routes/clients')(clientsRepo));

    return app;
};