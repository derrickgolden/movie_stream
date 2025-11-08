import Swal from "sweetalert2";
import { server_baseurl } from "../../../baseUrl";
import { PersonDetails } from "../Login";
import { NavigateFunction } from "react-router-dom";

interface LoginApiProps {
    data: string;
    navigate: NavigateFunction; 
    setLoginDetails: React.Dispatch<React.SetStateAction<PersonDetails>>;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
    prevelages: "admin" | "viewer";
}

const loginApi = async({ data, navigate, setLoginDetails, setIsLogin, prevelages }: LoginApiProps) =>{
    await fetch(`${server_baseurl}/user/login`, {
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
                if(data.details[0].prevelages === "viewer"){
                    localStorage.setItem("viewer", JSON.stringify(data?.details[0]));
                    localStorage.setItem("viewerToken", JSON.stringify(data?.token));
                }else if(data.details[0].prevelages === "admin"){
                    sessionStorage.setItem("admin", JSON.stringify(data?.details[0]));
                    sessionStorage.setItem("adminToken", JSON.stringify(data?.token));
                }
                setIsLogin(true);
                return navigate(`/${prevelages}/dashboard`, {replace: true});
            }else{
                Swal.fire({
                    text: `${data.msg}`,
                    showCloseButton: true,
                    showConfirmButton: false,
                    animation: false,
                    color: "#dc3545",
                    padding: "5px"
                });
                return;
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
            return;
        });
}

export const validateTokenApi = async (viewerToken: string): Promise<{ success: boolean }> => {
    try {
        const response = await fetch(`${server_baseurl}/user/validate-token`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${viewerToken}`
            },
        });

        const data = await response.json();

        if (data.success) {
            return data; // Return success response
        } else {
            Swal.fire(data.msg);
            return { success: false };
        }
    } catch (error) {
        console.error("Token validation error:", error);
        return { success: false };
    }
};

export default loginApi;