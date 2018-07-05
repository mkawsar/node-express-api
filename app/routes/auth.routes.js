const auth = require('../controllers/auth/auth.controller');
module.exports = (app) => {
    // user login route
    app.post('/login', auth.login);

    // create new user account
    app.post('/sign-up', auth.create);
};
