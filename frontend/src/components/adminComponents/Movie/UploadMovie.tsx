import axios from "axios"; 
import { useEffect, useState } from "react";
import { TbCircleLetterM } from "react-icons/tb";
import { TbCircleLetterT } from "react-icons/tb";
import { UploadMovieInput } from "./movieDetailsInputs";
import { FaEdit } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { uploadMovieDetails } from "../apiCalls/postData";
import { MovieFile } from "../../apiCalls/types";
import Swal from "sweetalert2";
import { deleteMovieApi } from "../../apiCalls/updateData";
import ConvertSrtToVtt from "../ConvertSrtVtt";
import { timeToSeconds } from "../quickFuctions";

const API_KEY = "086cfe05dd16828e37291d2f37293a38";

const UploadMovie = () =>{
    const [movieDetails, setMovieDetails] = useState({title: "", label: "", order: 1, 
        url: "https://japtech.africa/video/", trailer_url: "https://japtech.africa/video/", credits_start: 0,
        subtitles_url: "", isEdit: false, video_id: 0   
    });
    const [addedMovies, setAddedMovies] = useState<MovieFile[]>([])
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() =>{
        const {title, movie_id, id, isEdit, runtime, trailer_url} = location.state[0];
        if(isEdit){
            setAddedMovies(location.state)
        }else{
            setMovieDetails((obj)=>({...obj, label: title, credits_start: runtime,  title, movie_id, id, trailer_url}));
        }
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const name = e.target.id
        let value;
        if(name === "isEdit"){
            value = e.target.checked
        }else{
            value  = e.target.value
        }
        setMovieDetails((obj) => ({...obj, [name]: value}));
    };

    const handleUploadMovie = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        uploadMovieDetails(JSON.stringify(movieDetails)).then((data) =>{
            if(data.success){
                Swal.fire("", data.msg, 'success');
                setAddedMovies(data.details);
                setMovieDetails((obj) =>({...obj, isEdit:  false}))
            }
        })
    }

    const handleEditMovie = (movie: MovieFile) =>{
        const {label, order, title, url, credits_start, video_id, trailer_url, subtitles_url} = movie;
        setMovieDetails({ label, order, url, isEdit: true, credits_start, movie_id:video_id, video_id, title, trailer_url, subtitles_url  });
    }

    const deleteVideo = (movie: MovieFile) =>{
        Swal.fire({
            title: `Are you sure you want to delete ${movie.label}?`,
            showCancelButton: true,
            confirmButtonText: "Delete",
          }).then((result) => {
            if (result.isConfirmed) {
                deleteMovieApi(movie.video_id).then((data) =>{
                    if(data.success){
                        Swal.fire("Movie deleted successfully")
                        setTimeout(() =>{
                            navigate("/admin/all-movies")
                        },2000);
                    }else{
                        Swal.fire(data.msg);
                    }
                });
            };
        });
    }

    return(
        <div className="bg-light w-100 py-4 ">
            <div className="px-5">
                <h1 className="h1">Video upload | {movieDetails.title} </h1>
            </div>
            <div className="d-flex flex-column gap-4 align-content-center justify-content-center bg-white py-4">
                <div className="col-12 px-4 d-flex justify-content-between ">
                    <div>
                            <Link to="/admin/all-movies" className="btn btn-success btn-sm me-4">
                                Back to List
                            </Link>
                        {
                            addedMovies[0]?.url &&
                            <Link to={`/preview?movieUrl=${encodeURIComponent(addedMovies[0]?.url || "")}`} target="_blank" className="btn btn-success btn-sm ">
                                Preview
                            </Link>
                        }
                    </div>
                    <div className="form-check form-switch d-flex gap-2 align-items-center">
                        <input className="form-check-input fs-4" onChange={handleInputChange} checked={movieDetails.isEdit}
                            type="checkbox" role="switch" id="isEdit" />
                        <label  className="form-check-label fw-4 text-warning" htmlFor="isEdit">Edit Video</label>
                    </div>
                </div>
                <div className="col-12 px-4">
                    <p className="bg-success text-white text-uppercase p-2">Upload Movie</p>

                    <div className={`form-floating mb-3 col-12 `}>
                        <input type='number' className="form-control" id="time" 
                        onChange={(e) => setMovieDetails((obj) => ({...obj, credits_start: timeToSeconds(e.target.value)})) } />
                        <label htmlFor="time">Convert to seconds</label>
                    </div>

                    <div className="d-flex gap-4 mb-1">
                        
            <form onSubmit={handleUploadMovie} className=" mt-4 col-12">
                <div className="bg-white d-flex flex-wrap justify-content-between col-12 ">
                        {
                            UploadMovieInput?.map((detail, i)=>{
                                return(
                                    <div key={i} className={`form-floating mb-3 ${i < 3? "col-3 ": "col-12 "} `}>
                                        <input type={detail.type} className="form-control" 
                                            required={detail.required} value={movieDetails[detail.id]}
                                            id={detail.id} placeholder={detail.placeholder}
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor={detail.id}>{detail.label}</label>
                                    </div>
                                )
                            })
                        }
                    <div>
                    
                    </div>
                </div>
                {
                    movieDetails.isEdit? (
                        <button type="submit" className="btn btn-warning btn-sm ">Edit</button>
                    ):(
                        <button type="submit" className="btn btn-success btn-sm ">+ Add</button>
                    )
                }
            </form>
                </div>
                    <p className="bg-success text-white text-uppercase p-2 mt-4">Video List</p>
                    <table className="table col--12">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Order</th>
                            <th scope="col">Label</th>
                            <th scope="col">Movie URL</th>
                            <th scope="col">Trailer URL</th>
                            <th scope="col">Subtitles URL</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                addedMovies?.map((movie, i) =>(
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td><input type="number" onChange={()=>{}} 
                                        value={movie.order} style={{width: "60px"}} /></td>
                                    <td>{movie.label}</td>
                                    <td className=" text-wrap text-break">{movie.url}</td>
                                    <td className=" text-wrap text-break">{movie.trailer_url}</td>
                                    <td className=" text-wrap text-break">{movie.subtitles_url}</td>
                                    <td className="d-flex flex-column gap-1" >
                                        <span className="d-flex">
                                            <Link to={`/preview?movieUrl=${encodeURIComponent(movie.url || "")}&subtitlesUrl=${movie.subtitles_url}`} target="_blank">
                                                <TbCircleLetterM size={32} className="text-success me-2 border border-success p-1"/>
                                            </Link>
                                            <Link to={`/preview?movieUrl=${encodeURIComponent(movie.trailer_url || "")}`} target="_blank">
                                                <TbCircleLetterT size={32} className="text-info me-2 border border-info p-1"/>
                                            </Link>
                                        </span>
                                        <span className="d-flex">
                                            <FaEdit size={32} onClick={() =>handleEditMovie(movie)} role="button"
                                                className="text-warning me-2 border border-warning p-1"/>
                                            <FaDeleteLeft onClick={() =>deleteVideo(movie)} role="button" 
                                                size={32} className="text-danger border border-danger p-1"/>
                                        </span>
                                    </td>
                                </tr>
                                ))
                            }
                        
                        </tbody>
                    </table>
                </div>
                {/* <ConvertSrtToVtt /> */}
            </div>
    
        </div>

    )
}

export default UploadMovie;