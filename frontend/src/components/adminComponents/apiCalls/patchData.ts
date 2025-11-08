import axios from "axios";
import { server_baseurl } from "../../../baseUrl";
import Swal from "sweetalert2";
import { MovieFile } from "../../apiCalls/types";
import { MovieListDetails } from "../../../redux/movieList";

export const API_KEY = "086cfe05dd16828e37291d2f37293a38";

interface UploadMovieRes {
    success: boolean;
    msg: string;
    details: MovieFile[];
}

export const updateRequestedMovieStatus = async (data: string): Promise<UploadMovieRes> => {
    return await makeApiCall('admin/videos/movie-request-status', 'patch', data);
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

export const updateGenre = (row: MovieListDetails) =>{
    async function fetchData() {
        const {is_series} = row;
        const url = row.is_series ? 
            `https://api.themoviedb.org/3/tv/${row.video_id}?api_key=${API_KEY}&language=en-US`:
            `https://api.themoviedb.org/3/movie/${row.video_id}?api_key=${API_KEY}&language=en-US`;
        const request = await axios.get(url);
        if(request.status === 200){
            const {genres, id} = request.data;
            const data = JSON.stringify({genres, is_series, id});
            return await makeApiCall('videos/update-genres', 'patch', data)
        }
    }
    fetchData().then((data) =>{
        Swal.fire(`${data?.msg || 'error'}`);
    });
}