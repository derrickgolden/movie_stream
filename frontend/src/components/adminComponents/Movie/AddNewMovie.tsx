import axios from "axios"; 
import React, { useEffect, useState } from "react";
import { movieDetailsInput, seoAndMarketingInput } from "./movieDetailsInputs";
import { baseUrl } from "../../../baseUrl";
import { addMovieDetails } from "../../apiCalls/postData";
import { useNavigate } from "react-router-dom";

export const API_KEY = "086cfe05dd16828e37291d2f37293a38";

const AddNewMovie: React.FC<{type: "movie" | "series"}> = ({type}) =>{
    const [movieid, setMovieid] = useState<string | null>();
    const [movieDetails, setMovieDetails] = useState({title: "", slug: "", adult: true,runtime: 0, type});
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const name = e.target.id
        const value = e.target.value
        setMovieDetails((obj) => ({...obj, [name]: value}));
    };

    const handleCreateMovie = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        addMovieDetails(JSON.stringify(movieDetails)).then((data) =>{
            console.log(movieDetails);
            if(data.success){
                    console.log(data.details);
                if(type === "movie") navigate("/admin/movie-upload", {state: data.details});
                if(type === "series") navigate("/admin/seasons-manage", {state: data.details});
            }
        })
    }

    const fetchMovieDetails = () =>{
        async function fetchData() {
            const url = type === "movie" ? `https://api.themoviedb.org/3/movie/${movieid}?api_key=${API_KEY}&language=en-US`:
                        type === "series"? `https://api.themoviedb.org/3/tv/${movieid}?api_key=${API_KEY}&language=en-US`: "";
            const request = await axios.get(url);
            if(request.status === 200){
                const {title, id, overview, tagline, adult, runtime, backdrop_path, poster_path, release_date, name} = request.data;
                setMovieDetails((obj) => ({
                    ...obj, title: title || name, id, description: overview, slug: tagline, adult: adult,
                   runtime, backdrop_path, poster_path, release_date
                }));
            }
            console.log(request);
            return request;
        }
        fetchData();
    }
    return(
        <div className="bg-light w-100 p-4 ">
            <div>
                <h1 className="h1">{type === "movie"? "Video Add" : "TV Series Add"}</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="col-md-7">
                    <p className="bg-success text-white text-uppercase p-2">Import Movies/TVShow From TMDb</p>
                    <div className="d-flex gap-4 mb-1">
                        <select className="form-select " aria-label="Default select example">
                            <option >select language</option>
                            <option value="1" defaultValue={1}>English</option>
                            <option value="2">French</option>
                        </select>
                        <div className="input-group flex-nowrap ">
                            <input onChange={(e) => setMovieid(e.target.value)} 
                            type="text" className="form-control" placeholder="Enter TMDB ID. Ex: 141052" 
                            aria-label="Username" aria-describedby="addon-wrapping" />
                            <button onClick={fetchMovieDetails} className="input-group-text fetch" id="addon-wrapping">FETCH</button>
                        </div>
                    </div>
                    <small className="form-text text-muted" id=""><a href="https://youtu.be/DZrv95huYUk" target="_blank">
                        Tutorial | </a> Get TMDb ID from here: <a href="https://www.themoviedb.org/movie/" target="_blank">TheMovieDB.org.</a> 
                    </small>
                    <div id="result" className="m-t-15">
                    <div className="alert alert-info"><strong>Note:</strong>Actors, directors &amp; writers photo will import by cron.</div>
                </div>
                </div>
            </div>
            <form onSubmit={handleCreateMovie} 
                className="d-flex gap-2 justify-content-between mt-4">
                <div className="bg-white col-5 p-4">
                    <h6>Movie Info</h6>
                    <hr />
                    <div>
                        {
                            movieDetailsInput.map((detail, i)=>{
                                if(detail.inputType === "input"){
                                    return(
                                        <div key={i} className="form-floating mb-3">
                                            <input type={detail.type} className="form-control" 
                                                required={detail.required} value={movieDetails[detail.id]}
                                                id={detail.id} placeholder={detail.placeholder}
                                                onChange={handleInputChange}
                                            />
                                            <label htmlFor={detail.id}>{detail.label}</label>
                                        </div>
                                    )
                                }else if(detail.inputType === "textarea"){
                                    return(
                                        <div key={i} className="form-floating">
                                            <textarea className="form-control" placeholder={detail.placeholder} 
                                                id={detail.id} style={{height: "100px"}} required={detail.required}
                                                value={movieDetails[detail.id]}>
                                            </textarea>
                                            <label htmlFor={detail.id}>{detail.label}</label>
                                        </div>
                                    )
                                }
                            })
                        }
                    
                    </div>
                </div>
                <div className="bg-white col-6 p-4">
                    <h6>Poster,Thumbnail & SEO</h6>
                    <hr />
                    <div>
                    {
                            seoAndMarketingInput.map((detail, i)=>{
                                if(detail.inputType === "input" && detail.type === "file"){
                                    return(
                                        <div key={i} className="form-floating mb-3">
                                             <img src={`${baseUrl}/${movieDetails[detail.id]}`} alt="Poster Preview" style={{ maxWidth: "200px", maxHeight: "200px" }} />
                                            <input type={detail.type} className="form-control" 
                                                required={detail.required} 
                                                id={detail.id} placeholder={detail.placeholder}
                                                onChange={handleInputChange}
                                            />
                                            <label htmlFor={detail.id}>{detail.label}</label>
                                        </div>
                                    )
                                }else if(detail.inputType === "input"){
                                    return(
                                        <div key={i} className="form-floating mb-3">
                                            <input type={detail.type} className="form-control" 
                                                required={detail.required} value={movieDetails[detail.id]}
                                                id={detail.id} placeholder={detail.placeholder}
                                                onChange={handleInputChange}
                                            />
                                            <label htmlFor={detail.id}>{detail.label}</label>
                                        </div>
                                    )
                                }else if(detail.inputType === "textarea"){
                                    return(
                                        <div key={i} className="form-floating">
                                            <textarea className="form-control" placeholder={detail.placeholder} 
                                                id={detail.id} style={{height: "100px"}} required={detail.required}
                                                value={movieDetails[detail.id]}>
                                            </textarea>
                                            <label htmlFor={detail.id}>{detail.label}</label>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </div>
            </form>
    
        </div>

    )
}

export default AddNewMovie;