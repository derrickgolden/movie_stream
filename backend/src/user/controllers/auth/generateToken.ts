const jwt = require('jsonwebtoken');
require('dotenv').config()

export interface TokenResponse{
  token: string, exp_date: Date
}

export function generateAuthToken(id: number, account: string, account2: string, 
  phone: number, prevelages: string, expiresInDays: number): TokenResponse {
  // Calculate the expiration date based on the provided expiresInDays
  const exp_date: Date = new Date();
  exp_date.setDate(exp_date.getDate() + expiresInDays);

  // Generate a token with the specified expiration time
  const  key = process.env.TOKEN_SECRET_KEY || "skajskdhcdhsjhdwe836";
  const token = jwt.sign(
    { 
        id, account, account2, phone, prevelages
    }, 
    key, 
    { 
        expiresIn: `${expiresInDays}d` 
    }
  );

  return { token, exp_date };
}


