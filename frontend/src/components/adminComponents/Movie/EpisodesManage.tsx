import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addEpisodeDetails } from "../../apiCalls/postData";
import { Episode } from "../../apiCalls/types";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { getSerieSeasonsEpisodes } from "../../apiCalls/getData";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { setCallApi } from "../../../redux/callApi";
import Swal from "sweetalert2";
import axios from "axios";
import { API_KEY } from "./AddNewMovie";
import { MdOutlinePreview } from "react-icons/md";

const EpisodeManage = () =>{
    const [epidodeDetails, setEpisodeDetails] = useState(
        {episode_no:"", season_no: "", episode_name: "", isEdit: false, url: "", episode_order: 0}
    )
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const callApi = useSelector((state: RootState) => state.callApi);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {season, seriesDetails} = location.state;

    useEffect(() =>{
        setEpisodes(season.episodes)
        getSerieSeasonsEpisodes(seriesDetails.movie_id).then((data) =>{
            if(data.success){
                const updatedSeason = data.details[0].seasons.filter((season1) => season1.season_id === season.season_id);
                if(updatedSeason.length === 1) setEpisodes(updatedSeason[0].episodes);
            }
        })
       
    }, [callApi]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const name = e.target.id;
        let value;
        name === "isEdit"? value = e.target.checked: value = e.target.value;
        console.log(name, value)
        setEpisodeDetails((obj) => ({...obj, [name]: value}))
    }

    const handleSubmitEpisode = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log(e)
        const episodeData = JSON.stringify({epidodeDetails, season});
        addEpisodeDetails(episodeData).then((data) =>{
            if(data.success){
                Swal.fire(data.msg)
                dispatch(setCallApi(!callApi));
                setEpisodeDetails({episode_no:"", season_no: "", episode_name: "", isEdit: false, url: "", episode_order: 0});
            }
        })
    }

    const handleFetchEpisode = (e:  React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const {episode_no, season_no} = epidodeDetails;
        const url =  `https://api.themoviedb.org/3/tv/${seriesDetails.movie_id}/season/${season_no}/episode/${episode_no}?api_key=${API_KEY}&language=en-US`

        const request = axios.get(url);
        request.then((data) =>{
            if(data.status === 200){
                console.log(data.data);
                const {name, overview, runtime, still_path, id} = data.data;
                setEpisodeDetails((obj) =>({...obj,
                    episode_name: name, overview, runtime, still_path, id
                }))
            }
        });
    }
console.log(epidodeDetails);
    return(  
        <div className="w-100 bg-light p-4">
            <h3>Episodes For {seriesDetails?.title} - {season?.season_name}</h3>
            <div className="bg-white m-4 p-4">
                <div className="d-flex justify-content-between">
                    <button onClick={() =>navigate(-1)} className="btn btn-success btn-sm me-4">
                        Back To Seasons
                    </button>
                    <div className="form-check form-switch d-flex gap-2 align-items-center">
                        <input className="form-check-input fs-4" onChange={handleInput} checked={epidodeDetails.isEdit}
                            type="checkbox" role="switch" id="isEdit" />
                        <label  className="form-check-label fw-4 text-warning" htmlFor="isEdit">Edit Video</label>
                    </div>
                </div>
                <div className="mt-4">
                    <h5 className="w-100 bg-info p-1">Add Episode</h5>
                    <form onSubmit={handleFetchEpisode}>
                        <div className="d-flex gap-5 justify-content-between align-items-center bg-secondary-subtle px-4 py-2 my-4">
                            <div className="mb-3">
                                <label htmlFor="season_no" className="form-label ms-2">Season number</label>
                                <input type="number" onChange={handleInput} required
                                className="form-control" id="season_no" placeholder="1"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="episode_no" className="form-label ms-2">Episode number</label>
                                <input type="number" onChange={handleInput} required
                                className="form-control" id="episode_no" placeholder="1"/>
                            </div>
                            <div>
                                <button type="submit"
                                    className="btn btn-success btn-sm me-4">Fetch</button>
                            </div>
                        </div>
                    </form>
                    <form onSubmit={handleSubmitEpisode}>
                        <div className="mb-3">
                            <label htmlFor="episode_name" className="form-label ms-2">Episode Name</label>
                            <input type="text" onChange={handleInput} value={epidodeDetails.episode_name}
                            className="form-control" id="episode_name" placeholder="Episode 1" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="episode_order" className="form-label ms-2">Episode Order</label>
                            <input type="number" onChange={handleInput} value={epidodeDetails.episode_order}
                            className="form-control" id="episode_order" placeholder="1" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label ms-2">Select Thumbnail</label>
                            <input onChange={handleInput}
                                className="form-control" type="file" id="formFile"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="url" className="form-label ms-2">URL</label>
                            <input type="text" onChange={handleInput} value={epidodeDetails.url} required
                            className="form-control" id="url" placeholder="https://series/hello"/>
                        </div>
                        {
                            epidodeDetails.isEdit? (
                                <button type="submit" className="btn btn-warning btn-sm"><FaEdit /> Edit</button>
                            ):(
                                <button type="submit" className="btn btn-success btn-sm">+ Add</button>
                            )
                        }
                    </form>

                    <h5 className="w-100 bg-info p-1 mt-4">Episode List</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Thumbnail</th>
                                 <th scope="col">Episode Name</th>
                                <th scope="col">Order</th>
                                <th scope="col">Url</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                episodes.map((episode, i) =>(
                                <tr key={i}>
                                    <th scope="row">
                                        <img src={`https://image.tmdb.org/t/p/w92/${episode.thumbnail_path}`} alt="" />
                                    </th>
                                    <td>{episode.episode_name}</td>
                                    <td><input type="number" onChange={()=>{}} 
                                        value={episode.episode_order} style={{width: "60px"}} /></td>
                                    <td>{episode.url}</td>
                                    <td>
                                        <FaEdit role="button" onClick={() =>setEpisodeDetails((obj) =>({...obj, ...episode, isEdit: true}))}
                                            size={24} className="text-warning me-2"/>
                                        <Link to={episode.url} target="_blank" className="">
                                            <MdOutlinePreview  role="button" size={24} />
                                        </Link>
                                        <FaDeleteLeft role="button" size={24} className="text-danger"/>
                                    </td>
                                </tr>
                                 ))
                            }
                                            
                        </tbody>
                    </table>
                </div>
                <div className="w-100 text-end">
                    <button className="btn btn-success btn-sm me-4">Save Order</button>
                </div>
            </div>
        </div>
    )
}

export default EpisodeManage;


