const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 10;
const JWT_SECRET = process.env.JWT_SECRET;

async function hashPassword(password) {
   return bcrypt.hash(password, SALT_ROUNDS);
}

async function verifyPassword(password, hash) {
   return bcrypt.compare(password, hash);
}

function generateToken(payload) {
   return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

function generateRefreshToken(payload){
   return jwt.sign(payload, process.env.REFRESH_SECRET, { expiresIn: '7d' })
}

function verifyToken(token) {
   return jwt.verify(token, JWT_SECRET);
}

function verifyRefreshToken(token) {
   return jwt.verify(token, process.env.REFRESH_SECRET);
}

module.exports = { hashPassword, verifyPassword, generateToken, generateRefreshToken, verifyToken, verifyRefreshToken };
