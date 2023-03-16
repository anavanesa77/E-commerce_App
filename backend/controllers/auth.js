const jwt = require('jsonwebtoken');

exports.isAuthenticated = (req, res, next) => {
    const headerToken = req.headers['authorization'];
    
    if (headerToken != undefined && headerToken.startsWith('Bearer ')){
        //tiene Token
        try {
            const bearerToken = headerToken.slice(7);    
            jwt.verify(bearerToken, process.env.JWT_SECRET || 'alTernaTiva,123');
            next();            
        } catch (error) {
            res.status(401).json({
                message: 'Token no válido'
            });
        }

    } else {
        res.status(401).json({
            message: 'Acceso denegado'
        });
    }
}