const { verifyToken } = require('../utils/auth');

function authMiddleware(req, res, next) {
   const authHeader = req.headers.authorization;
   if (!authHeader) return res.status(401).json({ error: 'No token provided' });
   const parts = authHeader.split(' ');
   if (parts.length !== 2) return res.status(401).json({ error: 'Invalid authorization header' });
   const token = parts[1];
   try {
      const payload = verifyToken(token);
      req.user = payload;
      next();
   } catch (err) {
      return res.status(401).json({ error: 'Invalid token' });
}
}

module.exports = authMiddleware;
