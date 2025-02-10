import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Row.css";
import YouTube from "react-youtube";
import { useNavigate } from "react-router-dom";
import { getMoviesList, getSeriesList } from "../apiCalls/getData";
import { MovieListProps } from "../apiCalls/types";
import { RowProps } from "./type";
import { useDispatch } from "react-redux";
import { setMovieListDetails } from "../../redux/movieList";
import { setSeriesListDetails } from "../../redux/seriesList";
import { playMovie } from "./playMovie";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import PosterCard from "./PosterCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const baseUrl = "https://image.tmdb.org/t/p/original";

const Row: React.FC<RowProps> = ({ title, type, fetchUrl, isLargeRow, setHoveredMovie, setIsVideoReady, theDevice }) => {
  const [movies, setMovies] = useState<MovieListProps[]>([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [clickCount, setClickCount] = useState({count: 0, id: 0});
  const seriesListDetails = useSelector((state: RootState) => state.seriesListDetails)
  const movieListDetails = useSelector((state: RootState) => state.movieListDetails)
  const dispatch = useDispatch();
  const rowRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useEffect(() =>{
    if(type === "continue_watching"){
      const movie_watching = movieListDetails.filter((movie) => movie.progress && !movie.completed)
      const series_watching = seriesListDetails.filter((movie) => movie.watch_progress.progress && !movie.watch_progress.completed)
      setMovies([...movie_watching, ...series_watching]);
    };
  }, [movieListDetails, seriesListDetails]);

  useEffect(() => {
    if(type === "movies"){
      getMoviesList(fetchUrl, "", navigate).then((res) =>{
        if(res.success){
          const movies = res.details.filter((movie) => Number(movie.progress) < 60);
          setMovies(movies);
          dispatch(setMovieListDetails(res.details));
        };
      });
    }else if(type === "series"){
      getSeriesList(fetchUrl, "", navigate).then((res) =>{
        if(res.success){
          const series = res.details.filter((movie) => Number(movie.watch_progress.progress) < 60);
          setMovies(series);
          dispatch(setSeriesListDetails(res.details));
        };
      });
    };
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "740",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovieHover = (movie: MovieListProps) =>{
    if(clickCount.id !== movie.video_id){
      setIsVideoReady(false);
    };
    setHoveredMovie({movie_id: movie.video_id, is_series: movie.is_series});
    setClickCount({count: 1, id: movie.video_id});
  }

  // Function to scroll left
  const scrollLeft = () => {
    rowRef.current? rowRef.current.scrollLeft -= 300 : null; // Adjust scroll distance
  };

  // Function to scroll right
  const scrollRight = () => {
    rowRef.current? rowRef.current.scrollLeft += 300 : null; // Adjust scroll distance
  };

  return (
    <div className="row2 bg-black col-12">
      <h2 className="row_title px-3 text-warning">{title}</h2>
      <div className="d-fle position-relative w-100 ">
        {
          theDevice !== "phone" && 
          <div onClick={scrollLeft} role="button"
            className="custom-btn position-absolute start-0 top-0 bottom-0 d-flex align-items-center">
            <FaChevronLeft size={42}/>
          </div>
        }
        <div className="row__posters " ref={rowRef}>
          {movies.map((movie, i) => (
            <PosterCard
              key={i}
              movie = {movie} 
              clickCount ={clickCount} 
              navigate = {navigate} 
              setClickCount ={setClickCount} 
              setHoveredMovie = {setHoveredMovie} 
              setIsVideoReady = {setIsVideoReady}
              handleMovieHover = {handleMovieHover} 
              isLargeRow = {isLargeRow}
            />
          ))}
        </div>
        {
          theDevice !== "phone" && 
          <div onClick={scrollRight} role="button"
            className="custom-btn2 position-absolute end-0 top-0 bottom-0 d-flex align-items-center">
            <FaChevronRight size={42}/>
          </div>
        }
      </div>
      {trailerUrl && (
        <YouTube
          videoId={trailerUrl}
          opts={opts}
          className="youtube" // defaults -> null
        />
      )}{" "}
    </div>
  );
};

export default Row;
