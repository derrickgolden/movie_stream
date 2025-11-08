import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClientWatchedMoviesApi } from "../apiCalls/getData";
import { WatchedMovieOrSeries } from "../../apiCalls/types";

const ClientWatchedMovies = () =>{
    const { user_id } = useParams();
    const [watchedMovies, setWatchedMovies] = useState<WatchedMovieOrSeries[]>([])
    
    useEffect(() =>{
        if(user_id){
            getClientWatchedMoviesApi(user_id).then((data) =>{
                if(data.success){
                    setWatchedMovies(data.details);
                }
            })
        }
    }, [user_id]);

    return(
        <div className="bg-light w-100 p-3">
            {
                watchedMovies.map((movie, i) =>(
                    <div key={i} className="bg-white shadow p-3 mb-3">
                        <div className="d-flex justify-content-between">
                            <h5 className="text-warning display-6">{movie.title}</h5>
                            <h5>#{movie.movie_id}</h5>
                        </div>
                        <div className="d-flex flex-wrap">
                            <p className="fw-medium col-md-2">Type: <span className="text-info fs-5 me-5">{movie.is_series? 'Series' : 'Movie'}</span></p>
                            <p className="fw-medium col-md-2">Season: <span className="text-info fs-5 me-5">{movie.season_order || "N/A"}</span></p>
                            <p className="fw-medium col-md-2">Episode: <span className="text-info fs-5 me-5">{movie.episode_order || "N/A"}</span></p>
                            <p className="fw-medium col-md-2">Progress: <span className="text-info fs-5 me-5">{movie.progress}</span></p>
                            <p className="fw-medium col-md-4"> Last Watched: <span className="text-info fs-5 me-5">{new Date(movie.updated_at).toLocaleString()}</span></p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ClientWatchedMovies;