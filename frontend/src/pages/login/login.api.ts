import {LoginRequest, LoginResponse} from "./login.model";
import axios from 'axios';
import {api} from "../../index";
import {toast} from "react-toastify";
export const basePost=async <T> (url:string,data:any)=>{

    try {
        const result=await axios.post<T>(url, data)
        console.log(result)
        return  result.data
    }catch (e:any) {

        toast.error(e.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        throw new Error()
    }
    return {} as T
}
export const login=async(data:LoginRequest)=> basePost<LoginResponse>(`${api}/auth/login`,data)