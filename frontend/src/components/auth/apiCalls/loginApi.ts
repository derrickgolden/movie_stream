import Swal from "sweetalert2";
import { server_baseurl } from "../../../baseUrl";
import { Dispatch } from "react";
import { PersonDetails } from "../Login";
import { ActionCreatorWithPayload, AnyAction } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";

interface LoginApiProps {
    data: string;
    navigate: NavigateFunction; 
    setLoginDetails: React.Dispatch<React.SetStateAction<PersonDetails>>;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
    prevelages: "admin" | "viewer";
}

const loginApi = ({ data, navigate, setLoginDetails, setIsLogin, prevelages }: LoginApiProps) =>{
    fetch(`${server_baseurl}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data
        })
        .then(response =>{
            return response.json();
        } )
        .then(data => {
            if(data.success){
                console.log(data)
                if(data.details[0].prevelages === "viewer"){

                    localStorage.setItem("viewer", JSON.stringify(data?.details[0]));
                    localStorage.setItem("viewerToken", JSON.stringify(data?.token));
                }else if(data.details[0].prevelages === "admin"){
                    sessionStorage.setItem("admin", JSON.stringify(data?.details[0]));
                    sessionStorage.setItem("adminToken", JSON.stringify(data?.token));
                }
                setIsLogin(true);
                navigate(`/${prevelages}/dashboard`, {replace: true});
                console.log(data);
            }else{
                Swal.fire({
                    text: `${data.msg}`,
                    showCloseButton: true,
                    showConfirmButton: false,
                    animation: false,
                    color: "#dc3545",
                    padding: "5px"
                })
            }
        })
        .catch(error => {
            console.log(error);
            setLoginDetails(obj => ({ ...obj, password: '' }));
            Swal.fire({
                text: "Sorry, something went wrong",
                showCloseButton: true,
                showConfirmButton: false,
                animation: false,
                color: "#dc3545",
                padding: "5px"
            })
        });
}

export default loginApi;