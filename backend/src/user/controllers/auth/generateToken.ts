const jwt = require('jsonwebtoken');
require('dotenv').config()

export interface TokenResponse{
  token: string, exp_date: Date
}

export function generateAuthToken(id: number, account: string, account2: string, 
  phone: number, mac: string, prevelages: string, expiresInDays: number): TokenResponse {
  // Calculate the expiration date based on the provided expiresInDays
  const exp_date: Date = new Date();
  exp_date.setDate(exp_date.getDate() + expiresInDays);

  // Generate a token with the specified expiration time
  const secretKey = process.env.JWT_SECRET;
  if (!secretKey) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  const token = jwt.sign(
    { 
        id, account, account2, phone, mac, prevelages
    }, 
    secretKey, 
    { 
        expiresIn: `${expiresInDays}d` 
    }
  );

  return { token, exp_date };
}


