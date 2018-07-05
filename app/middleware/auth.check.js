const jwt = require('jsonwebtoken');
const secretConfig = require('../../config/secret.config');

module.exports = (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1];
    if(token) {
        jwt.verify(token, secretConfig.secretKey, (err, decoded) => {      
            if (err) {
                return res.json({ 
                    success: false,
                    message: 'Failed to authenticate token.'
                });    
            } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;    
                    next();
            }
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });
    }
};
