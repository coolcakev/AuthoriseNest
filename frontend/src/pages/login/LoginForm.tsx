import React from 'react';
import {Button, FormControl, FormLabel, TextField} from "@mui/material";
import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useMutation} from "react-query";
import {LoginRequest, LoginResponse} from "./login.model";
import {login} from "./login.api";
import {useNavigate} from "react-router-dom";
import {saveToken} from "../../helpers/localStorage.helper";

const yupSchema = yup.object().shape({
    userName: yup.string().required(),
    password: yup.string().required(),
})

type ShemaType = yup.InferType<typeof yupSchema>
const LoginForm = () => {
const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<ShemaType>({
        resolver: yupResolver(yupSchema),
        defaultValues: {
            userName: '',
            password: '',
        }
    })

    const mutation = useMutation<LoginResponse,void,LoginRequest>({
       mutationFn: async (data) =>  login(data),
        onSuccess: (data) => {
            saveToken( data.token)
            navigate("/")
        },
        onError: () => {

        }

    })

    const onHandleSubmit: SubmitHandler<ShemaType> = (data) => {
        mutation.mutate(data)
    }
    const onHandleSubmitError: SubmitErrorHandler<ShemaType> = (data) => {
        console.log(data)
    }

    return (
        <form style={{  width: "50%"}} onSubmit={handleSubmit(onHandleSubmit, onHandleSubmitError)}>
        <FormControl sx={{  width: "50%", display :"flex"}}>
            <FormLabel>Enter Name</FormLabel>
            <TextField {...register("userName")}/>
            <FormLabel>Enter Password</FormLabel>
            <TextField {...register("password")}/>
            <Button type="submit">Submit</Button>
        </FormControl>
        </form>

    );
};

export default LoginForm;