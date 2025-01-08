import "./MoviePlayer.css";
import React, { useRef, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePicLeft } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";

interface MoviePlayerProps {}

const MoviePlayer: React.FC<MoviePlayerProps> = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { movie, playVideo } = location.state;
  const [showOverlay, setShowOverlay] = useState(true);
  const [playingVideo, setPlayingVideo] = useState({
    video_url: "",
    backdrop_path: "",
    is_series: false,
    episode_order: 0,
    season_order: 0,
    show_details: false,
  });
  const playRef = useRef(null)

  const handleAutoplay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  };

  const handlePlay = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if ((videoElement as any).webkitRequestFullscreen) {
        // For Safari
        (videoElement as any).webkitRequestFullscreen();
      } else if ((videoElement as any).mozRequestFullScreen) {
        // For Firefox
        (videoElement as any).mozRequestFullScreen();
      } else if ((videoElement as any).msRequestFullscreen) {
        // For IE/Edge
        (videoElement as any).msRequestFullscreen();
      }
    }
  };

  const playNextEpisode = () => {
    if (movie.is_series) {
      const currentSeason = movie.seasons.find(
        (season) => season.season_order === playingVideo.season_order
      );
      if (currentSeason) {
        const nextEpisode = currentSeason.episodes.find(
          (episode) => episode.episode_order === playingVideo.episode_order + 1
        );

        if (nextEpisode) {
          // Play the next episode
          const { video_url, thumbnail_path, episode_order } = nextEpisode;
          const nextVideo = {
            video_url,
            backdrop_path: thumbnail_path,
            is_series: true,
            season_order: playingVideo.season_order,
            episode_order,
            show_details: false,
          };
          navigate(`/watch/${movie.title}-${movie.video_id}`, {
            state: { movie, playVideo: nextVideo },
          });
          // location.state = { movie, playVideo: nextEpisode }
          // setPlayingVideo(nextVideo);
          // videoRef.current?.load(); // Reload video with the new source
          return;
        }
      }
    }

    // If no next episode is found or it's a movie, navigate back to home
    navigate("/");
  };

  useEffect(() => {
    setPlayingVideo(playVideo);

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("canplay", handleAutoplay);
      videoElement.addEventListener("ended", playNextEpisode);

      if (playingVideo.is_series ) {
        videoElement.addEventListener("play", () => {
          setTimeout(() => {
            // setShowOverlay(false);
            // console.log("hello time")
            // playRef.current.click();
            // handlePlay();
          }, 5000);
        });
      }
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("canplay", handleAutoplay);
        videoElement.removeEventListener("ended", playNextEpisode);
      }
    };
  }, [videoRef, playVideo, playingVideo, playNextEpisode]);

  const handleEpisodesAndMore = () => {
    navigate(`/watch/episodes-more/${movie.video_id}`, { state: movie });
  };

  return (
    <div
      className="position-relative"
      style={{ maxHeight: "", margin: "auto", textAlign: "center" }}
    >
      {playingVideo.is_series &&  showOverlay ?(
        <div className="  position-absolute top-0 left-0 bottom-0 player-banner">
          <div className=" h-100 d-flex d-md-block flex-column justify-content-between p-2 p-sm-3 p-md-5 col-12 col-md-5 ">
            <div>
              <h1 className="ms-4 text-warning">{movie?.title}</h1>
              <h1 className="banner__description lead">{movie?.description}</h1>
            </div>
            <div className="banner-buttons d-flex mt-5 flex-column gap-4">
              <button onClick={handlePlay} ref={playRef}
              className="btn btn-outline-info w-100 
              d-flex align-items-center gap-2 justify-content-center text-center">
                <FaPlay /> Resume S{playingVideo.season_order}: EP.{playingVideo.episode_order}
              </button>
              <button onClick={handleEpisodesAndMore} className="btn btn-outline-info w-100 
              d-flex align-items-center gap-2 justify-content-center text-center" >
                <AiOutlinePicLeft /> Episodes & More
              </button>
              <button onClick={() =>navigate("/viewer/dashboard")} className="btn btn-outline-secondary w-100 
              d-flex align-items-center gap-2 justify-content-center text-center" >
                <RiArrowGoBackFill /> Back
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <video
        ref={videoRef}
        src={playingVideo.video_url}
        poster={playingVideo.backdrop_path}
        controls
        style={{ width: "100%", height: "99vh", borderRadius: "8px" }}
      />
    </div>
  );
};

export default MoviePlayer;
