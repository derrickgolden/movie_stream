import {Request} from 'express';

export interface universalResponse{
    success: boolean;
    admin_id?: number;
    msg: string;
    details?: Array<{}>;
    err?: string | boolean;
}

export interface TokenUser {
    id: number;
    phone: number;
    prevelages: string;
    account: string;
    account2: string;
    mac: string;
}
export interface ModifiedReq extends Request{
    user: TokenUser
}