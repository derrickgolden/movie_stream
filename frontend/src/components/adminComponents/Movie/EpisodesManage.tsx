import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addEpisodeDetails } from "../apiCalls/postData";
import { Episode } from "../../apiCalls/types";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { setCallApi } from "../../../redux/callApi";
import Swal from "sweetalert2";
import axios from "axios";
import { API_KEY } from "./AddNewMovie";
import { MdOutlinePreview } from "react-icons/md";
import { deleteEpisodeApi } from "../../apiCalls/updateData";
import { getSerieSeasonsEpisodes } from "../apiCalls/getData";
import { timeToSeconds } from "../quickFuctions";
import Preview from "../Preview";

const EpisodeManage = () =>{
    const [epidodeDetails, setEpisodeDetails] = useState(
        {episode_no:"", season_no: "", episode_name: "", isEdit: false, url: "", 
            episode_order: "", subtitles_url: "", credits_start: 30000, runtime: ""}
    );
    const [previewEpisode, setPreviewEpisode] = useState<Episode>();
    const addEpisodeRef = useRef<HTMLHeadingElement | null>(null);
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
                if(updatedSeason.length === 1){
                    setEpisodes(updatedSeason[0].episodes);
                    const trailer_url = updatedSeason[0].trailer_url;
                    const baseurl = trailer_url.substring(0, trailer_url.lastIndexOf('/') + 1);
                    setEpisodeDetails((obj) => ({...obj, subtitles_url: baseurl, url: baseurl}))
                } 
            }
        })
    }, [callApi]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const name = e.target.id;
        let value;
        name === "isEdit"? value = e.target.checked: value = e.target.value;
        setEpisodeDetails((obj) => ({...obj, [name]: value}))
    }

    console.log(epidodeDetails);
    const handleSubmitEpisode = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const episodeData = JSON.stringify({epidodeDetails, season});
        return;
        addEpisodeDetails(episodeData).then((data) =>{
            if(data.success){
                Swal.fire(data.msg)
                setEpisodeDetails((obj) => 
                    ({...obj, episode_name: "", isEdit: false, episode_order: "", 
                        url: "", subtitles_url: "", credits_start: 3000
                    })
                );
                dispatch(setCallApi(!callApi));
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
                const {name, overview, runtime, still_path, id} = data.data;
                // const credits_start = runtime * 60;
                setEpisodeDetails((obj) =>({...obj, episode_order: obj.episode_no,
                    episode_name: name, overview, runtime, still_path, id})
                )
            }
        });
    }

    const deleteEpisode = (episode: Episode) =>{
        console.log(episode)
        Swal.fire({
             title: `Are you sure you want to delete ${episode.episode_name} from ${seriesDetails.title}?`,
             showCancelButton: true,
             confirmButtonText: "Delete",
           }).then((result) => {
             if (result.isConfirmed) {
                 deleteEpisodeApi(episode.episode_id).then((data) =>{
                     if(data.success){
                         Swal.fire("Episode deleted successfully")
                         dispatch(setCallApi(!callApi));
                     }else{
                         Swal.fire(data.msg);
                     }
                 });
             };
         });
    }

    const handleEditEpisode = (episode: Episode) =>{
        setEpisodeDetails((obj) =>({...obj, ...episode,
            credits_start: episode.credits_start || "", isEdit: true}));
         // Scroll to the "Add Episode" section
         if (addEpisodeRef.current) {
            addEpisodeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }   
    }

    return(  
        <div className="w-100 bg-light p-4">
            <h3>Episodes For {seriesDetails?.title} - {season?.season_name}</h3>
            <div className="bg-white p-4">
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
                <div className="pt-4" ref={addEpisodeRef} >
                    <h5 className="w-100 bg-info p-1">Add Episode</h5>
                    <div className="d-flex gap-5 align-items-center">
                        <div className={`form-floating mb-3 col-5 `}>
                            <input type='string' className="form-control" id="time" 
                            onChange={(e) => setEpisodeDetails((obj) => ({...obj, credits_start: timeToSeconds(e.target.value)})) } />
                            <label htmlFor="time">Convert to seconds</label>
                        </div>
                    </div>
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
                    <form onSubmit={handleSubmitEpisode} className="d-flex flex-wrap justify-content-between">
                        <div className="mb-3 col-3">
                            <label htmlFor="episode_name" className="form-label ms-2">Episode Name</label>
                            <input type="text" onChange={handleInput} value={epidodeDetails.episode_name}
                            className="form-control" id="episode_name" placeholder="Episode 1" required/>
                        </div>
                        <div className="mb-3 col-3">
                            <label htmlFor="episode_order" className="form-label ms-2">Episode Order</label>
                            <input type="number" onChange={handleInput} value={epidodeDetails.episode_order}
                            className="form-control" id="episode_order" placeholder="1" required/>
                        </div>
                        <div className="mb-3 col-3">
                            <label htmlFor="credits_start" className="form-label ms-2">Credits Start</label>
                            <input type="number" onChange={handleInput} value={epidodeDetails.credits_start}
                            className="form-control" id="credits_start" placeholder="0" required/>
                        </div>
                        {/* <div className="mb-3">
                            <label htmlFor="formFile" className="form-label ms-2">Select Thumbnail</label>
                            <input onChange={handleInput} className="form-control" type="file" id="formFile"/>
                        </div> */}
                        <div className="mb-3 col-12">
                            <label htmlFor="url" className="form-label ms-2">URL</label>
                            <input type="text" onChange={handleInput} value={epidodeDetails.url} required
                            className="form-control" id="url" placeholder="https://series/hello"/>
                        </div>
                        <div className="mb-3 col-12">
                            <label htmlFor="subtitles_url" className="form-label ms-2">Subtitles Url</label>
                            <input type="text" onChange={handleInput} value={epidodeDetails.subtitles_url}
                            className="form-control" id="subtitles_url" placeholder="https://series/hello"/>
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
                                <th scope="col">Credits</th>
                                <th scope="col">Url</th>
                                <th scope="col">Subtitles Url</th>
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
                                    <td className="text-success">{episode.episode_name}</td>
                                    {/* <td><input type="number" onChange={()=>{}} 
                                        value={episode.episode_order} style={{width: "60px"}} /></td> */}
                                    <td className="text-primary">{episode.episode_order}</td>
                                    <td className="text-info">{episode.credits_start}</td>
                                    <td className=" text-wrap text-break">{episode.url}</td>
                                    <td className=" text-wrap text-break">{episode.subtitles_url}</td>
                                    <td>
                                        <span className="d-flex">
                                            <FaEdit size={32} onClick={() => handleEditEpisode(episode)}
                                                role="button" className="text-warning me-2 border border-warning p-1"/>
                                            {/* <Link to={`/preview?movieUrl=${encodeURIComponent(episode.url || "")}&subtitlesUrl=${episode.subtitles_url}`}
                                                 target="_blank">
                                            </Link> */}
                                            <MdOutlinePreview size={32} onClick={() =>{
                                                setPreviewEpisode(episode);
                                                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                                            }}
                                            className="text-success me-2 border border-success p-1"/>
                                            <FaDeleteLeft onClick={() =>deleteEpisode (episode)} role="button" 
                                                size={32} className="text-danger border border-danger p-1"/>
                                        </span>
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
            {previewEpisode &&
                <Preview 
                    video = {previewEpisode}
                    setVideoDetails = {setEpisodeDetails}
                    addEpisodeRef={addEpisodeRef}
                />
            }
        </div>
    )
}

export default EpisodeManage;