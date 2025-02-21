import { useEffect, useState } from "react";
import './section.css'
import PosterCard from "../components/Row/PosterCard";
import { getMoviesList, getSeriesList } from "../components/apiCalls/getData";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MovieListProps } from "../components/apiCalls/types";
import { SeriesListDetails } from "../redux/seriesList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const SearchMovie =() =>{
    const [movies, setMovies] = useState<MovieListProps[] | SeriesListDetails[]>([]);
    const [filteredMovies, setFilteredMovies] = useState<MovieListProps[]>([]);
    const [clickCount, setClickCount] = useState({count: 1, id: 0})
    const seriesList = useSelector((state: RootState) => state.seriesListDetails);
    const moviesList = useSelector((state: RootState) => state.movieListDetails);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if(!(seriesList.length && moviesList.length)){
            getMoviesList("videos/get-movies", "", navigate).then((res) =>{
              if(res.success){
                setMovies(res.details);
                setFilteredMovies(res.details);
                // dispatch(setMovieListDetails(res.details));
              }
            });
            getSeriesList("videos/get-series", "", navigate).then((res) =>{
              if(res.success){
                setMovies(res.details);
                // dispatch(setSeriesListDetails(res.details));
                console.log(res.details);
              }
            });
        }else{
            setMovies(seriesList.concat(moviesList));
            setFilteredMovies(seriesList.concat(moviesList));
        }
      }, []);
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value;
        setFilteredMovies(movies.filter((movie) => movie.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())) as MovieListProps[])
    }
    return(
        <div className="d-flex flex-column flex-lg-row bg-black col-12 col-sm-11 " 
        style={{minHeight: "100vh"}}>
            
            <div className="col-12 col-lg-4 p-4 " >
                <div className="mb-3 ">
                    <input type="text" onChange={handleInputChange} placeholder="Search Movie"
                    className="form-control" id="search" />
                </div>
                <div className="search">
                    {filteredMovies.map((movie, i) => (
                        <h6 className="display-6 mb-0 text-secondary text-truncate">{movie.title}</h6>
                    ))}
                </div>
            </div>
            <div className="d-flex flex-wrap pl-3 py-4 justify-content-center col-12 col-lg-8" >
            {filteredMovies.length?(
                filteredMovies.map((movie, i) => (
                    <div key={'jahsd' + i} role="button">
                        <PosterCard
                            key={i}
                            movie = {movie} 
                            clickCount ={{count: 1, id: movie.video_id}} 
                            navigate = {navigate} 
                            setClickCount ={setClickCount} 
                            setHoveredMovie = {() =>{}} 
                            setIsVideoReady = {() => {}}
                            handleMovieHover = {() =>{}} 
                            isLargeRow = {true}
                        />
                    </div>
                ))
            ) : (
                <div className="text-light d-flex justify-content-center align-items-center ">
                    <div>
                        <p className="display-5">Apologies!</p>
                        <div className=" col-10">
                            <p className="display-6">It looks like we do not have the movie yet.</p>
                            <p className="display-6">But no worries, let us know and will upload it for you.</p>
                        </div>
                        <div className="mt-5">
                            <Link to="/viewer/request-movie" type="button" className=" btn btn-info me-5">
                                Request Movie
                            </Link>
                            <Link to="/viewer/dashboard" type="button" className=" btn btn-warning">
                                Continue Watching
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }
            </div>
        </div>
    )
}

export default SearchMovie;