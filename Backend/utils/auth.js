const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 10;
const JWT_SECRET = process.env.JWT_SECRET || 'please-set-a-secret';

async function hashPassword(password) {
   return bcrypt.hash(password, SALT_ROUNDS);
}

async function verifyPassword(password, hash) {
   return bcrypt.compare(password, hash);
}

function generateToken(payload) {
   return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

function verifyToken(token) {
   return jwt.verify(token, JWT_SECRET);
}

module.exports = { hashPassword, verifyPassword, generateToken, verifyToken };
