import axios from "axios";
import { server_baseurl } from "../../baseUrl";
import Swal from "sweetalert2";
import { SeriesListDetails } from "../../redux/seriesList";
import { NavigateFunction } from "react-router-dom";

interface SeriesData {
    success: boolean;
    details: SeriesListDetails[];
}

export const getSeriesPosters = async (path: string, data: string, navigate: NavigateFunction): Promise<SeriesData> => {
    return await makeApiCall("posters/get", 'get', data, navigate);
};

const makeApiCall = async(url: string, method: string, data: string, navigate: NavigateFunction) =>{

    const tokenString = localStorage.getItem("viewerToken");
    
    if (tokenString !== null) {
        var token = JSON.parse(tokenString);
    } else {
        // navigate("/")
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