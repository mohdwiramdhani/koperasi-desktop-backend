import jwt from "jsonwebtoken";

export const generateAccessToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY || 'secret_key', { expiresIn: '15m' });
};

export const generateRefreshToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_REFRESH_SECRET_KEY || 'refresh_secret_key', { expiresIn: '7d' });
};