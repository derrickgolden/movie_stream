import axios from "axios";
import { server_baseurl } from "../../../baseUrl";
import Swal from "sweetalert2";
import { MovieFile } from "../../apiCalls/types";

interface UploadMovieRes {
    success: boolean;
    msg: string;
    details: MovieFile[];
}

export const addMovieDetails = async (data: string): Promise<UploadMovieRes> => {
    return await makeApiCall('videos/add/movie-details', 'post', data);
};
export const uploadMovieDetails = async (data: string): Promise<UploadMovieRes> => {
    // const data = JSON.stringify({ shop_id, phone, full_name, email, country, address });
    return await makeApiCall('videos/add/movie-path', 'post', data);
};
export const addSeasonsInfo = async (data: string): Promise<UploadMovieRes> => {
    // const data = JSON.stringify({ shop_id, phone, full_name, email, country, address });
    return await makeApiCall('videos/add/season-info', 'post', data);
};
export const addEpisodeDetails = async (data: string): Promise<UploadMovieRes> => {
    // const data = JSON.stringify({ shop_id, phone, full_name, email, country, address });
    return await makeApiCall('videos/add/episode-info', 'post', data);
};
export const addUser = async (data: string): Promise<UploadMovieRes> => {
    // const data = JSON.stringify({ shop_id, phone, full_name, email, country, address });
    return await makeApiCall('user/signup', 'post', data);
};

const makeApiCall = async(url: string, method: string, data: string) =>{
    const tokenString = sessionStorage.getItem("userToken");

    if (tokenString !== null) {
        var token = JSON.parse(tokenString);
    } else {
        Swal.fire({
            title: "Token not Found",
            text: "Log out and log in then try again.",
            icon: "warning"
        });
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