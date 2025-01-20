export interface DBServicesRes{
    success: boolean,
    msg: string
}

export interface PersonDetails{
    email: string,
    phone: string,
    password: string,
    confirm_password: string,
    auth_with?: "google" | "app",
    prevelages: "admin" | "viewer";
}
// Define the TypeScript interface
export interface User {
    id: number;
    user_type: string;
    email: string;
    password: string;
    houseNumber: string;
    apartment: string;
    location: string;
    ip: string;
    name: string;
    phone: string;
    mac: string;
    account2: string;
    account: string;
    expiry: string; // Use Date type if you prefer working with Date objects
    house_number: string;
    auth_with: string;
    hash: string;
  }


export interface LoginMysqlRes{
    id: number, account:string, name:string, email:string, remember_me: boolean, 
    account2: string,  password?: string, phone: number, prevelages: "admin" | "viewer"
}

export interface LoginResponse{
    userAvailable: boolean,
    passwordHash?: string,
    details?: [LoginMysqlRes],
    res?: DBServicesRes
}

export interface SignupResponse{
    success: boolean,
    admin_id?: number,
    msg: string,
    rejectInput?: string,
    details?: Array<{}>
}

// link token
export interface LinkTokenRes extends DBServicesRes{
    email?: string, user_id?: number
}

// google signin/up
export interface GoogleUserProfile {
    id: string;
    email: string;
    verified_email: boolean;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    locale: string;
  }

  // express.d.ts
declare namespace Express {
    interface Request {
      user?: any; // Adjust the type based on your user object structure
    }
  }
  