const { generateToken, verifyRefreshToken } = require('../utils/auth');

async function refreshTokenController(req, res) {
   const refreshToken = req.cookies.refreshToken;

   if (!refreshToken) {
      return res.status(401).json({ error: "No refresh token" });
   }

   try {
      const payload = verifyRefreshToken(refreshToken);

      const newAccessToken = generateToken({
         id: payload.id,
         username: payload.username
      });

      res.cookie("authToken", newAccessToken, {
         httpOnly: true,
         secure: process.env.NODE_ENV === "production",
         sameSite: "lax",
         maxAge: 60 * 60 * 1000
      });

      return res.status(200).json({ message: "Token refreshed" });

   } catch (err) {
      res.clearCookie("authToken");
      res.clearCookie("refreshToken");
      return res.status(403).json({ error: "Invalid refresh token" });
   }
}

module.exports = refreshTokenController;
