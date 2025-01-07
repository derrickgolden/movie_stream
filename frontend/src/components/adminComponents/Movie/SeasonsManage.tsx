import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SeasonInfo from "./SeasonInfo";
import { getSerieSeasonsEpisodes } from "../../apiCalls/getData";
import { Season, TvSeries } from "../../apiCalls/types";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import { deleteSeasonApi } from "../../apiCalls/updateData";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { setCallApi } from "../../../redux/callApi";

const SeasonsManage = () =>{
    const [seriesDetails, setSeriesDetails] = useState({title: "", order: 0, url: "", label:"", movie_id: 0});
    const [seasonsEpisodes, setSeasonsEpisodes] = useState<TvSeries>();
    const [editSession, setEditSession] = useState<{season: Season, isEdit: Boolean}>();
    const callApi = useSelector((state: RootState) => state.callApi);
    const dispatch = useDispatch();

    const location = useLocation();
    const navigate = useNavigate();
    const btnRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() =>{
        const {title, movie_id, id} = location.state[0];
        setSeriesDetails((obj)=>({...obj, label: title,  title, movie_id, id}));
        getSerieSeasonsEpisodes(movie_id).then((data) =>{
            if(data.success){
                if(data.details[0].seasons[0].season_name){
                    setSeasonsEpisodes(data.details[0])
                }
            }
        })
    }, [callApi]);

    const handleManageSession = (season: Season) =>{
        navigate("/admin/episodes-manage", {state: {season, seriesDetails}});  
    }

    const handleDeleteSeason = (season: Season) =>{
        Swal.fire({
            title: `Are you sure you want to delete ${season.season_name} from ${seriesDetails.title}?`,
            text: "All episodes related to the season will be deleted!",
            showCancelButton: true,
            confirmButtonText: "Delete",
          }).then((result) => {
            if (result.isConfirmed) {
                deleteSeasonApi(season.season_id).then((data) =>{
                    if(data.success){
                        Swal.fire("Season deleted successfully")
                        dispatch(setCallApi(!callApi));
                    }else{
                        Swal.fire(data.msg);
                    }
                });
            };
        });
    }

    const handleEditSession = (season: Season) =>{
        setEditSession({season, isEdit: true});
        if(btnRef.current){
            btnRef.current.click();
        }
    }
    return(
        <div className="bg-light w-100 p-4">
            <h3>{seriesDetails.title}</h3>
            <div className="bg-white m-4 p-4">
                <div className="">
                    <button onClick={() => navigate("/admin/all-series")}
                        className="btn btn-success btn-sm me-4">Back To List</button>
                    <button type="button" ref={btnRef} 
                        className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#seasonInfoModal">
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
                                <th scope="col">Trailer Url</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                seasonsEpisodes?.seasons?.map((season, i) =>(
                                <tr key={i + 89293}>
                                    <th scope="row">{i + 1}</th>
                                    <td className="text-wrap text-break">{season.season_name}</td>
                                    <td>{season.episodes.length}</td>
                                    <td>
                                        <input type="number" onChange={()=>{}} 
                                        value={season.season_order} style={{width: "60px"}} />
                                    </td>
                                    <td className="text-wrap text-break">{season.trailer_url}</td>
                                    <td className="d-flex flex-wrap gap-2">
                                        <button onClick={() => handleManageSession(season)}
                                            className="btn btn-info btn-sm me-2 ">Manage Episodes</button>
                                        <FaEdit size={32} className="text-warning p-1 border border-warning  me-2"
                                            onClick={() =>handleEditSession(season)}/>
                                        <FaDeleteLeft size={32} className="text-danger p-1 border border-danger" 
                                            onClick={() =>handleDeleteSeason(season)}/>
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
            <SeasonInfo 
                seriesDetails={seriesDetails} 
                editSeason = {editSession}
                setEditSession={setEditSession}
            />
        </div>
    )
}

export default SeasonsManage;