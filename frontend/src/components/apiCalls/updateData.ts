import axios from "axios";
import { server_baseurl } from "../../baseUrl";
import Swal from "sweetalert2";
import { MovieFile } from "./types";

interface UploadMovieRes {
    success: boolean;
    msg: string;
    details: MovieFile[];
}

export const deleteMovieApi = async (movie_id: number): Promise<UploadMovieRes> => {
    return await makeApiCall(`videos/delete-movie/${movie_id}`, 'get', "");
};
export const deleteEpisodeApi = async (episode_id: number): Promise<UploadMovieRes> => {
    return await makeApiCall(`videos/delete-episode/${episode_id}`, 'get', "");
};
export const deleteSeasonApi = async (season_id: number): Promise<UploadMovieRes> => {
    return await makeApiCall(`videos/delete-season/${season_id}`, 'get', "");
};
export const deleteSeriesApi = async (series_id: number): Promise<UploadMovieRes> => {
    return await makeApiCall(`videos/delete-series/${series_id}`, 'get', "");
};
export const updateActiveSeries = async (series_id: number, newStatus: boolean): Promise<UploadMovieRes> => {
    const data = JSON.stringify({id: series_id, is_active: newStatus});
    return await makeApiCall(`videos/update-active-series`, 'patch', data);
};

const makeApiCall = async(url: string, method: string, data: string) =>{
    const tokenString = sessionStorage.getItem("adminToken");

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