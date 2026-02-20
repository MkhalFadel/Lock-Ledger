const { verifyToken } = require('../utils/auth');

function authMiddleware(req, res, next) {
   const token = req.cookies.authToken;
   if (!token) return res.status(401).json({ error: 'No token provided' });
   try {
      const payload = verifyToken(token);
      req.user = payload;
      next();
   } catch (err) {
      return res.status(401).json({ error: 'Invalid token' });
   }
}

module.exports = authMiddleware;
