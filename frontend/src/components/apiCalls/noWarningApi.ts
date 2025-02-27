import axios from "axios";
import { server_baseurl } from "../../baseUrl";
import Swal from "sweetalert2";
import { SeriesListDetails } from "../../redux/seriesList";
import { NavigateFunction } from "react-router-dom";

interface SeriesData {
    success: boolean;
    details: SeriesListDetails[];
}
interface GetSettingsApi {
    success: boolean;
    details: {show_subtitles: boolean}[];
}

export const getSeriesPosters = async (path: string, data: string, navigate: NavigateFunction): Promise<SeriesData> => {
    return await makeApiCall("posters/get", 'get', data);
};

export const getSettingsApi = async (data: string, navigate: NavigateFunction): Promise<GetSettingsApi> => {
    return await makeApiCall("user/settings/subtitle", 'get', data, navigate);
};

export const postWatchProgressApi = async (data: string, navigate: NavigateFunction): Promise<SeriesData> => {
    // const data = JSON.stringify({ shop_id, phone, full_name, email, country, address });
    return await makeApiCall('user/watch-progress', 'post', data, navigate);
};

const makeApiCall = async(url: string, method: string, data: string, navigate?: NavigateFunction) =>{

    const tokenString = localStorage.getItem("viewerToken");
    
    if (tokenString !== null) {
        var token = JSON.parse(tokenString);
    } else {
        if(navigate){
            navigate("/");
            return {success: false, details: []};
        } ;
    }

    let config = {
        method: method,
        maxBodyLength: Infinity,
        url: `${server_baseurl}/${url}`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bear ${token}`
        },
        data,
    };

    return await axios.request(config)
    .then((response) => {
        if(response.data.success){
            return {success: true, details: response.data.details};
        }else{
            return {success: false, details: []};
        };
    })
    .catch((error) => {
        console.log(error);
        return {success: false, details: []};
    })
};