import axios from "axios";
import Swal from "sweetalert2";
import { server_baseurl } from "../../../baseUrl";
import { Feedback, MovieRequestRes, Statistics, UserWatchStats } from "./type";
import { TvSeries, WatchedMovieOrSeries } from "../../apiCalls/types";


interface ResponseData {
    success: boolean;
    msg: string;
    details: MovieRequestRes[];
}
interface SeasonEpisode {
    success: boolean;
    details: TvSeries[];
}
interface UserListStats {
    success: boolean;
    details: UserWatchStats[];
}
interface  WatchedMovieOrSeriesRes {
    success: boolean;
    details: WatchedMovieOrSeries[];
}
interface  FeedbackRes {
    success: boolean;
    details: Feedback[];
}
interface  StatisticsRes {
    success: boolean;
    details: Statistics[];
}

export const getMovieRequests = async (data: string): Promise<ResponseData> => {
    return await makeApiCall("admin/videos/movie-requests", 'get', data);
};

export const getAllFeedbacks = async (data: string): Promise<FeedbackRes> => {
    return await makeApiCall("admin/feedback/all", 'get', data);
};

export const getSerieSeasonsEpisodes = async (movie_id: string): Promise<SeasonEpisode> => {
    return await makeApiCall('videos/get-seasons-episodes', 'get', movie_id);
};

export const getClientWatchedMoviesApi = async (user_id: string): Promise<WatchedMovieOrSeriesRes> => {
    return await makeApiCall('admin/clients/watched-movies', 'get', user_id);
};

export const getUsersList = async (): Promise<UserListStats> => {
    return await makeApiCall('admin/clients/get-list', 'get', "");
};

export const getStatistics = async (): Promise<StatisticsRes> => {
    return await makeApiCall('admin/statistics/get', 'get', "");
};

export const deleteUser = async (data: string): Promise<ResponseData> => {
    return await makeApiCall('admin/clients/delete-user', 'get', data);
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
        url: `${server_baseurl}/${url}/${data}`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bear ${token}`
        },
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
            return {success: false, msg: "", details: []};
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
        return {success: false, msg: "", details: []};
    })
};