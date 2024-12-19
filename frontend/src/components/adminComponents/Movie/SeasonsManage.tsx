import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SeasonInfo from "./SeasonInfo";
import { getSerieSeasonsEpisodes } from "../../apiCalls/getData";
import { Season, TvSeries } from "../../apiCalls/types";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdOutlinePreview } from "react-icons/md";

const SeasonsManage = () =>{
    const [seriesDetails, setSeriesDetails] = useState({title: "", order: 0, url: "", label:"", movie_id: 0});
    const [seasonsEpisodes, setSeasonsEpisodes] = useState<TvSeries>()

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() =>{
        const {title, movie_id, id} = location.state[0];
        setSeriesDetails((obj)=>({...obj, label: title,  title, movie_id, id}));
        getSerieSeasonsEpisodes(movie_id).then((data) =>{
            if(data.success){
                setSeasonsEpisodes(data.details[0])
                console.log(data.details)
            }
        })
    }, []);

    const handleManageSession = (season: Season) =>{
        navigate("/admin/episodes-manage", {state: {season, seriesDetails}});  
    }

    return(
        <div className="bg-light w-100 p-4">
            <h3>{seriesDetails.title}</h3>
            <div className="bg-white m-4 p-4">
                <div className="">
                    <button className="btn btn-success btn-sm me-4">Back To List</button>
                    <button type="button" className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#seasonInfoModal">
                        Add Seasons
                    </button>
                </div>
                    <table className="table mt-2">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Season Name</th>
                            <th scope="col">Episodes</th>
                            <th scope="col">Order</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                seasonsEpisodes?.seasons?.map((season, i) =>(
                                <tr key={i + 89293}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{season.season_name}</td>
                                    <td>{season.episodes.length}</td>
                                    <td><input type="number" onChange={()=>{}} 
                                        value={season.season_order} style={{width: "60px"}} />
                                    </td>
                                    <td>
                                        <button onClick={() => handleManageSession(season)}
                                            className="btn btn-info btn-sm me-2 ">Manage Episodes</button>
                                        <FaEdit size={24} className="text-warning me-2"/>
                                        <FaDeleteLeft size={24} className="text-danger"/>
                                    </td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                <div className="w-100 text-end">
                    <button className="btn btn-success btn-sm">Save Order</button>
                </div>
            </div>
            <SeasonInfo seriesDetails={seriesDetails} />
        </div>
    )
}

export default SeasonsManage;