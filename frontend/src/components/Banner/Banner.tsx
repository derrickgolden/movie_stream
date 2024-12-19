import "./Banner.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import requests from "../../request";
import { Link, useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import { getMoviesList } from "../apiCalls/getData";
import { MovieListProps } from "../apiCalls/types";
import { useDispatch } from 'react-redux';
import { MovieListDetails, setMovieListDetails } from '../../redux/movieList';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { baseUrl } from "../Row/Row";
import { HoveredMovie } from "../../sections/LandingPage";
import { playMovie } from "../Row/playMovie";

interface BannerProps {
  hoveredMovie: HoveredMovie;
  setHoveredMovie: React.Dispatch<React.SetStateAction<HoveredMovie>>
  isVideoReady: Boolean, 
  setIsVideoReady: React.Dispatch<React.SetStateAction<boolean>>;
}

const Banner:React.FC<BannerProps> = ({hoveredMovie, setHoveredMovie, isVideoReady, setIsVideoReady}) => {
  const [movie, setMovie] = useState<MovieListDetails | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movieListDetails = useSelector((state: RootState) => state.movieListDetails);
  const seriesListDetails = useSelector((state: RootState) => state.seriesListDetails);

  useEffect(() => {
    if(hoveredMovie.is_series){
      if(seriesListDetails.length){
        if(hoveredMovie.movie_id){
          seriesListDetails.map((movie, i) =>{
            if(movie.video_id === hoveredMovie.movie_id) {
              const video_url = movie.seasons[0].episodes[0].video_url;
              setMovie({...movie, video_url});
            } 
          });
        }else{
          // const m = seriesListDetails[Math.floor(Math.random() * movieListDetails.length)]
          // setHoveredMovie({movie_id: m.video_id, is_series: m.is_series});
        }
      }else{
        // const data = "";
        // const fetchPath = hoveredMovie.is_series ? "" : ""
        // getMoviesList(fetchPath, data).then((data) =>{
        //   if(data.success) dispatch(setMovieListDetails(data.details));
        // });
      }
    }else if(!hoveredMovie.is_series){
      if(movieListDetails.length){
        if(hoveredMovie.movie_id){
          movieListDetails.map((movie, i) =>{
            movie.video_id === hoveredMovie.movie_id ? 
              setMovie(movie) : null
          });
        }else{
          const m = movieListDetails[Math.floor(Math.random() * movieListDetails.length)]
          setHoveredMovie({movie_id: m.video_id, is_series: m.is_series});
        }
      }else{
        const data = "";
        const fetchPath = hoveredMovie.is_series ? "" : ""
        getMoviesList(fetchPath, data).then((data) =>{
          if(data.success) dispatch(setMovieListDetails(data.details));
        });
      }
    }
  }, [hoveredMovie, movieListDetails]);

  useEffect(() => {
    const handleAutoplay = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("Autoplay failed:", error);
        });
      }
    };

    // Add event listener to handle autoplay
    if (videoRef.current) {
      videoRef.current.addEventListener("canplay", handleAutoplay);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("canplay", handleAutoplay);
      }
    };
  }, []);

  const handleVideoLoaded = () => {
    setIsVideoReady(true);
  };
  return (
    <header
      className="banner col-12 d-flex flex-column justify-content-between position-fixed top-0 "
    >
      <div className="d-flex align-items-center col-12 position-relative" style={{backgroundColor: "#000"}}>
        <div className="banner__contents col-12 col-md-5  ">
          <h1 className="banner__title display-4 ">
            {movie?.title || movie?.name || movie?.original_name }
          </h1>
          <div className="banner__buttons ">
            {movie && (
              <button className="banner__button" onClick={() => playMovie({
                movie, navigate, clickCount: {count: 1, id: movie.video_id}
              })} >
                Play
              </button>
            )}
          </div>
          <h1 className="banner__description display-6 text-center">{movie?.description}</h1>
        </div>

        <div className="col-12 col-md-7 position-relative " style={{
          zIndex: 1
        }}>
          {/* Conditional rendering: show image if video is not ready */}
          {!isVideoReady && (
            <img
              src={`${baseUrl}/${movie?.backdrop_path}`}
              alt="Movie Backdrop"
              style={{
                width: "100%", // Make the image span the full width
                height: "340px", // Fixed height
                objectFit: "cover", // Maintain cover behavior
                objectPosition: "center", // Center the image content
              }}
            />
          )}

          {/* Video element */}
          <video
            style={{
              objectFit: "cover",
              display: isVideoReady ? "block" : "none", // Hide video until ready
            }}
            ref={videoRef}
            src={movie?.video_url}
            loop
            muted
            height="340px"
            width="100%"
            onLoadedData={handleVideoLoaded} // Fires when the video is ready to play
          />

          {/* Optional fade overlay */}
          <div className="position-absolute fade-right top-0 bottom-0 left-0"></div>
        </div>

      </div>
      {/* <div className="banner__fadeBottom" /> */}
    </header>
  );
};

export default Banner;
