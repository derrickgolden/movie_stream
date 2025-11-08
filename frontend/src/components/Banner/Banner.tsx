import "./Banner.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getMoviesList } from "../apiCalls/getData";
import { useDispatch } from 'react-redux';
import { MovieListDetails, setMovieListDetails } from '../../redux/movieList';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { baseUrl } from "../Row/Row";
import { HoveredMovie } from "../../sections/LandingPage";

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
              const video_url = movie.seasons[0]?.trailer_url || "";
              setMovie({...movie, trailer_url: video_url});
            } ;
          });
        }
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
        const token = localStorage.getItem('viewerToken')
        const fetchPath = hoveredMovie.is_series ? "" : ""
        getMoviesList(fetchPath, data, navigate, token).then((data) =>{
          if(data.success) dispatch(setMovieListDetails(data.details));
        });
      }
    }
  }, [hoveredMovie, movieListDetails]);

  useEffect(() => {
    const handleAutoplay = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          setIsVideoReady(false)
          console.error("Autoplay failed:", error);
        });
      }
    };
    const handleVideoEnded = () => {
      setIsVideoReady(false);
    };

    // Add event listener to handle autoplay
    if (videoRef.current) {
      videoRef.current.addEventListener("canplay", handleAutoplay);
    }
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", handleVideoEnded);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("canplay", handleAutoplay);
      }
      if (videoRef.current) {
        videoRef.current.removeEventListener("canplay", handleVideoEnded);
      }
    };
  }, []);

  const handleVideoLoaded = () => {
    setIsVideoReady(true);
  };

  const handlePlayClick = () =>{
    if(movie){
      movie.is_series?
      navigate(`/watch/series/${movie.title}/${movie.video_id}`):
      navigate(`/watch/movie/${movie.title}/${movie.video_id}`);
    }
};

  return (
    <header
      className="banner col-12 col-sm-11 d-flex flex-column justify-content-between position-fixed top-0 "
    >
      <div className="d-flex align-items-center col-12 position-relative" style={{backgroundColor: "#000"}}>
        <div className="banner__contents ps-3  col-12 col-md-5 ">
          <h1 className="banner__title display-4">
            {movie?.title || movie?.name || movie?.original_name }
          </h1>
          <div className="banner__buttons ">
            {movie && (
              <button className="banner__button" onClick={() => handlePlayClick()} >
                Play
              </button>
            )}
          </div>
          <h1 className="banner__description display-6 text-start">{movie?.description}</h1>
        </div>

        <div className="col-12 col-md-7 position-relative " style={{
          zIndex: 1
        }}>
          {/* Conditional rendering: show image if video is not ready */}
          {!isVideoReady && (
            <img
              src={`${baseUrl}/${movie?.backdrop_path}`}
              // alt="Movie Backdrop"
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
            src={movie?.trailer_url}            
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
