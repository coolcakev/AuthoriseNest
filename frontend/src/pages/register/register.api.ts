import {RegisterRequest, RegisterResponse} from "./register.model";
import {api} from "../../index";
import {basePost} from "../login/login.api";
export const registerApi=async(data:RegisterRequest)=> basePost<RegisterResponse>(`${api}/auth/register`,data)