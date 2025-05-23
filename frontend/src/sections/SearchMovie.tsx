import { useEffect, useState } from "react";
import './section.css'
import PosterCard from "../components/Row/PosterCard";
import { getLandingPageData } from "../components/apiCalls/getData";
import { Link, useNavigate } from "react-router-dom";
import { MoviesDetailsRes } from "../components/apiCalls/types";
import { RingLoader } from "react-spinners";

const SearchMovie =() =>{
    const [movies, setMovies] = useState<MoviesDetailsRes[]>([]);
    const [filteredMovies, setFilteredMovies] = useState<MoviesDetailsRes[]>([]);
    const [clickCount, setClickCount] = useState({count: 1, id: 0})
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    useEffect(() => {
        const stringToken = localStorage.getItem('viewerToken');
        setLoading(true);
         getLandingPageData("", navigate, stringToken).then((data) =>{
            if(data.success){
                const allMovies = [...data.details.series, ...data.details.movies]
                setFilteredMovies(allMovies);
                setMovies(allMovies)
                setLoading(false);
            }
        })
      }, []);
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value;
        setFilteredMovies(movies.filter(
            (movie) => movie.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())) as MoviesDetailsRes[])
    }

    const handleClick = (movie: MoviesDetailsRes) =>{
        movie.is_series?
        navigate(`/watch/series/${movie.title}/${movie.video_id}`):
        navigate(`/watch/movie/${movie.title}/${movie.video_id}`);
    };
    
    return(
        <div className="d-flex flex-column flex-lg-row bg-black col-12 col-sm-11 " 
        style={{minHeight: "100vh"}}>
            {
                loading ? (
                    <div className="d-flex flex-column align-items-center justify-content-center h-100 col-12">
                        <h1 className="text-primary display-1 ">Please wait ...</h1>
                        <RingLoader color="#3498db" loading={loading} size={100} />
                    </div>
                ) : (
                <>
                    <div className="col-12 col-lg-4 p-4 " >
                        <div className="mb-3 ">
                            <input type="text" onChange={handleInputChange} placeholder="Search Movie"
                            className="form-control" id="search" />
                        </div>
                        <div className="search">
                            {filteredMovies.map((movie, i) => (
                                <h6 key={i} role="button" onClick={() =>handleClick(movie)} 
                                className="display-6 mb-0 text-secondary text-truncate">{movie.title}</h6>
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
                </>
                )
            }
            
        </div>
    )
}

export default SearchMovie;