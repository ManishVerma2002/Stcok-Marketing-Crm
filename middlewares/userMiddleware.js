const jwt = require('jsonwebtoken');

function requireAuth(req, res, next) {
    const token = req.header('Authorization');
    
    if (!token) {
        return res.status(401).json({ msg: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], 'trupoint'); 
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ msg: "Invalid or expired token.", error: err.message });
    }
}

function errorHandler(err, req, res, next) {
    res.status(500).json({ msg: "Internal server error", error: err.message });
}

module.exports = { requireAuth, errorHandler };
