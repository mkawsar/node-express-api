
module.exports = (app) => {
    const auth = require('../controllers/auth/auth.controller');
    const checkAuth = require('../middleware/auth.check');
    // user login route
    app.post('/login', auth.login);

    // create new user account
    app.post('/sign-up', auth.create);

    // auth user profile information
    app.get('/profile', checkAuth, auth.profile);
};
