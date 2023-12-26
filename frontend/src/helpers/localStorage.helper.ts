import {Session} from "../models/auth.model";
import { jwtDecode } from "jwt-decode";
const userTokenKey="token";
export const getToken = (): Session => {
    const tokenString = localStorage.getItem(userTokenKey) ?? undefined;
    const session:Session={
        id: 0,
        userName: "",
        token: ""
    }
    if (!tokenString) return session;

    const decoded = jwtDecode(tokenString) as any;
    return {
        ...session,
        ...decoded
    };
};
export const saveToken = (token:string) => {
    localStorage.setItem(userTokenKey,token);
};