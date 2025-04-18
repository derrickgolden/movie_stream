import axios from "axios";
import { server_baseurl } from "../../baseUrl";
import Swal from "sweetalert2";
import { LandingPageMovieDetails, MoviesSeriesCategories } from "./types";
import { MovieListDetails } from "../../redux/movieList";
import { SeriesListDetails } from "../../redux/seriesList";
import { NavigateFunction } from "react-router-dom";

interface ResponseData {
    success: boolean;
    details: MovieListDetails[];
}
interface SeriesData {
    success: boolean;
    details: SeriesListDetails[];
}
interface CategoriesData {
    success: boolean;
    details: MoviesSeriesCategories[];
}
interface LandingPageData {
    success: boolean;
    details: LandingPageMovieDetails;
}

export const getMoviesList = async (path: string, data: string, navigate: NavigateFunction, tokenString: string | null): Promise<ResponseData> => {
    return await makeApiCall("videos/get-movies", 'get', data, navigate, tokenString);
};
export const getSeriesList = async (path: string, data: string, navigate: NavigateFunction, tokenString: string | null): Promise<SeriesData> => {
    return await makeApiCall("videos/get-series", 'get', data, navigate, tokenString);
};

export const getMovieSeriesByID = async (movie_id: string, data: string, navigate: NavigateFunction, tokenString: string | null): Promise<SeriesData> => {
    return await makeApiCall(`videos/get-movie-series`, 'post', data, navigate, tokenString);
};
export const getMovieSeriesCategory = async (data: string, navigate: NavigateFunction, tokenString: string | null): Promise<CategoriesData> => {
    return await makeApiCall(`user/categories/get`, 'get', data, navigate, tokenString);
};
export const getLandingPageData = async (data: string, navigate: NavigateFunction, tokenString: string | null): Promise<LandingPageData> => {
    return await makeApiCall(`user/landing_page_data/get`, 'get', data, navigate, tokenString);
};

const makeApiCall = async(url: string, method: string, data: string, navigate: NavigateFunction, tokenString: string | null) =>{
    if (tokenString !== null) {
        var token = JSON.parse(tokenString);
    } else {
        navigate("/");
        return {success: false, details: []};
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
            return {success: true, details: response.data.details};
        }else{
            Swal.fire({
                text: `${response.data.msg}`,
                showCloseButton: true,
                showConfirmButton: false,
                animation: false,
                color: "#dc3545",
                padding: "5px"
            })
            return {success: false, details: []};
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
        return {success: false, details: []};
    })
};