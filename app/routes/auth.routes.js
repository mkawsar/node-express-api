const auth = require('../controllers/auth/auth.controller');
module.exports = (app) => {
    app.post('/login', auth.login);
    app.post('/sign-up', auth.create);
};
