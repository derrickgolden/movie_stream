import axios from "axios";
import Swal from "sweetalert2";
import { MovieFile } from "./types";
import { server_baseurl } from "../../baseUrl";
import { NavigateFunction } from "react-router-dom";

interface UploadMovieRes {
    success: boolean;
    msg: string;
    details: MovieFile[];
}

export const requestMovieApi = async (data: string, navigate: NavigateFunction): Promise<UploadMovieRes> => {
    // const data = JSON.stringify({ shop_id, phone, full_name, email, country, address });
    return await makeApiCall('user/movie-request', 'post', data, navigate);
};

const makeApiCall = async(url: string, method: string, data: string, navigate: NavigateFunction) =>{
    const tokenString = localStorage.getItem("viewerToken");

    if (tokenString !== null) {
        var token = JSON.parse(tokenString);
    } else {
        navigate("/");
        return {success: false, msg: "Token not found. Try to login again", details: []}
    }

    let config = {
        method: method,
        maxBodyLength: Infinity,
        url: `${server_baseurl}/${url}`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bear ${token}`
        },
        data : data
        
    };

    return await axios.request(config)
    .then((response) => {
        if(response.data.success){
            return {success: true, msg: response.data.msg, details: response.data.details};
        }else{
            Swal.fire({
                text: `${response.data.msg}`,
                showCloseButton: true,
                showConfirmButton: false,
                animation: false,
                color: "#dc3545",
                padding: "5px"
            })
            return {success: false, msg: response.data.msg, details: []};
        };
    })
    .catch((error) => {
        console.log(error);
        Swal.fire({
            text: `${error.response.data?.msg || `Server Side Error`}`,
            showCloseButton: true,
            showConfirmButton: false,
            animation: false,
            color: "#dc3545",
            padding: "0px 0px 10px 0px"
        })
        return {success: false, msg: error.response.data?.msg, details: []};
    })
};