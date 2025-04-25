import "./Banner.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../Row/Row";
import { MoviesDetailsRes } from "../apiCalls/types";
import Swal from "sweetalert2";

interface BannerProps {
  hoveredMovie: MoviesDetailsRes | undefined;
  isVideoReady: Boolean, 
  setIsVideoReady: React.Dispatch<React.SetStateAction<boolean>>;
}

const ColumnBanner:React.FC<BannerProps> = ({hoveredMovie, isVideoReady, setIsVideoReady}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const navigate = useNavigate();

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
    if(hoveredMovie){
      if(hoveredMovie.is_series){
        if(hoveredMovie?.is_series){
          Swal.fire({
            text: "We're currently experiencing issues with playing TV Series, but you can continue enjoying Movies as we work to resolve it. We Apologize."
          });
        }
      }
      // navigate(`/watch/series/${hoveredMovie.title}/${hoveredMovie.video_id}`):
    }else{
      navigate(`/watch/movie/${hoveredMovie.title}/${hoveredMovie.video_id}`);
    }
};

return (
    <header
      className="banner col-12 col-sm-11 d-flex flex-column justify-content-between position-fixed top-0 "
    >
      <div className="d-flex align-items-center col-12 position-relative " style={{backgroundColor: "#000"}}>
       
          <div className="banner__contents ps-3  col-12 col-md-5 ">
            <h1 className="banner__title display-4 mb-0">
              {hoveredMovie?.title }
            </h1>
            {    
              hoveredMovie?.is_series? (
                <div className="d-flex flex-column flex-lg-row ">
                  <div className="d-flex gap-3 mx-2">
                    <span>Series</span>
                    <span>|</span>
                    <span className="text-nowrap">{hoveredMovie?.total_seasons} Season(s)</span>
                  </div>
                  <div className="d-flex gap-2">
                    {
                      hoveredMovie?.genres?.map((genre, i) =>(
                        <span key={i} className="bg-dark px-1 rounded text-nowrap">{genre}</span>
                      ))
                    }
                  </div>
                </div>
              ) : (
                <div className="d-flex flex-column flex-lg-row ">
                  {
                    hoveredMovie &&
                    <div className="d-flex gap-3 mx-2">
                      <span>{new Date(hoveredMovie?.release_date).getFullYear()}</span>
                      <span>|</span>
                      <span className="text-nowrap">{convertMinutes(hoveredMovie?.runtime)}</span>
                    </div>
                  }
                  <div className="d-flex gap-2">
                    {
                      hoveredMovie?.genres.map((genre, i) =>(
                        <span key={genre + i} className="bg-dark px-1 rounded text-nowrap">{genre}</span>
                      ))
                    }
                  </div>
                </div>
              )
            }
            <p><span>{}</span></p>
            <div className="banner__buttons ">
              {hoveredMovie && (
                <button className="banner__button " onClick={() => handlePlayClick()} >
                  Play
                </button>
              )}
            </div>
            <h1 className="banner__description display-6 text-start">{hoveredMovie?.description}</h1>
          </div>

          <div className="col-12 col-md-7 position-relative " style={{
            zIndex: 1
          }}>
            {/* Conditional rendering: show image if video is not ready */}
            {!isVideoReady && (
              <img
                src={`${baseUrl}/${hoveredMovie?.backdrop_path}`}
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
              src={hoveredMovie?.trailer_url}            
              height="340px"
              width="100%"
              onLoadedData={handleVideoLoaded} // Fires when the video is ready to play
            />

            {/* Optional fade overlay */}
            <div className="position-absolute fade-right top-0 bottom-0 left-0"></div>
          </div>
        
      </div>
    </header>
  );
};

export default ColumnBanner;

function convertMinutes(minutes: number) {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hrs}h ${mins}m`;
}
