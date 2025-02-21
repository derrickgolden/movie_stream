import "./MoviePlayer.css";
import React, { useRef, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePicLeft } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";
import { MdReplayCircleFilled } from "react-icons/md";
import { Episode, Season } from "../apiCalls/types";
import { postWatchProgressApi } from "../apiCalls/noWarningApi";
import { nextMovieEpisode } from "./nextMovieEpisode";
import { exitFullscreen } from "./quickFunctions";

interface MoviePlayerProps {}

const MoviePlayer: React.FC<MoviePlayerProps> = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const intervalRef = useRef<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { movie, playVideo } = location.state;
  const lastSavedTime = useRef<number>(0);
  const [show, setShow] = useState({overlay: true, subtitles: false, completed: false});
  const [review, setReview] = useState(10);
  const [currentTime, setCurrentTime] = useState(0);
  const [playingVideo, setPlayingVideo] = useState({
    subtitles_url: "", video_url: "", backdrop_path: "", video_id: 0, episode_id: 0, credits_start: 1000000,
    is_series: false, episode_order: 0, season_order: 0, show_details: false, progress: 0
  });
  const playRef = useRef(null);

  const handleAutoplay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  };

  const handlePlay = (resume: boolean) => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if(!resume){
        videoElement.currentTime = 0;
        lastSavedTime.current = 0;
      } else{
        lastSavedTime.current = playingVideo.progress;
      }
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
        (season: Season) => season.season_order === playingVideo.season_order
      );
      if (currentSeason) {
        if(nextMovieEpisode({movie, currentSeason, order: playingVideo.episode_order + 1, lastSavedTime, navigate})) return;
      }
    }
    // If no next episode is found or it's a movie, navigate back to home
    const { video_id, is_series, episode_id, credits_start } = playingVideo;
    const data = JSON.stringify({ movie_id: video_id, progress: 0, is_series, episode_id, isCompleted: true });
    postWatchProgressApi(data, navigate)
    navigate("/viewer/dashboard"); 
  };

  useEffect(() => {
    setPlayingVideo(playVideo);

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("canplay", handleAutoplay);
      videoElement.addEventListener("ended", playNextEpisode);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("canplay", handleAutoplay);
        videoElement.removeEventListener("ended", playNextEpisode);
      }
    };
  }, [videoRef, playVideo, playingVideo, playNextEpisode]);

  useEffect(() => {
    if(review <= 0){
      playNextEpisode();
      return () => {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
        }
      };
    };
  }, [review]);

  const handleEpisodesAndMore = () => {
    navigate(`/watch/episodes-more/${movie.video_id}`, { state: movie });
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget; // Type-safe access to video element
    const newTime = Math.floor(video.currentTime);
    
    // Save progress every 10 seconds
    if (newTime - (lastSavedTime.current | 0) >= 10) {
      // console.log({newTime, progress: playingVideo.progress});
      // setCurrentTime(newTime);
      lastSavedTime.current = newTime;
      const { video_id, is_series, episode_id, credits_start } = playingVideo;
      const isCompleted = newTime >= credits_start;
      const data = JSON.stringify({ movie_id: video_id, progress: newTime, is_series, episode_id, isCompleted: false });
      postWatchProgressApi(data, navigate);
      if(isCompleted){
        setShow((obj) =>({...obj, completed: isCompleted}));
        if(!is_series){
          exitFullscreen();
          intervalRef.current = window.setInterval(() => {
            setReview((prevReview) => prevReview - 1);
          }, 1000);
        } else playNextEpisode();
      } 
    }
  };
  
  return (
    <div
      className="position-relative"
      style={{ maxHeight: "", margin: "auto", textAlign: "center" }}
    >

      {show.overlay ?(
        <div className="position-absolute top-0 left-0 bottom-0 player-banner">
          <div className=" h-100 d-flex d-md-block flex-column justify-content-between p-2 p-sm-3 p-md-5 col-12 col-md-5 ">
            <div className=" ">
              <h1 className="ms-4 text-warning">{movie?.title}</h1>
              <h1 className="banner__description lead">{movie?.description}</h1>
            </div>
            <div className="banner-buttons d-flex mt-5 flex-column gap-4">
            {
              playingVideo.is_series? (  <>
                <button onClick={() =>handlePlay(true)} ref={playRef}
                className="btn btn-outline-info w-100 
                d-flex align-items-center gap-2 justify-content-center text-center">
                  <FaPlay /> Resume S{playingVideo.season_order}: EP.{playingVideo.episode_order}
                </button>
                <button onClick={() =>handlePlay(false)} ref={playRef}
                  className="btn btn-outline-info w-100 
                  d-flex align-items-center gap-2 justify-content-center text-center">
                    <MdReplayCircleFilled /> Play from Beginning
                </button>
                <button onClick={handleEpisodesAndMore} className="btn btn-outline-info w-100 
                d-flex align-items-center gap-2 justify-content-center text-center" >
                  <AiOutlinePicLeft /> Episodes & More
                </button>
              </>) : (<>
                {
                  show.completed ? ( <div>
                    <p className="display-6 text-primary">Review in {review} seconds.</p>
                  </div> ): <>
                  {
                    playingVideo.progress? (
                      <button onClick={() =>handlePlay(true)} ref={playRef}
                      className="btn btn-outline-info w-100 
                      d-flex align-items-center gap-2 justify-content-center text-center">
                        <FaPlay /> Resume Playing
                      </button>
                    ): null
                  }
                  <button onClick={() =>handlePlay(false)} ref={playRef}
                  className="btn btn-outline-info w-100 
                  d-flex align-items-center gap-2 justify-content-center text-center">
                    <MdReplayCircleFilled /> Play From Beginning
                  </button>
                  </>
                }
              </>)

            }
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
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => {
          if (videoRef.current) {
            videoRef.current.currentTime = playingVideo.progress || 0; // Jump to 60 seconds
          }
        }}
        controls
        controlsList="nodownload"
        onContextMenu={(e) => e.preventDefault()}
        style={{ width: "100%", height: "99vh", borderRadius: "8px" }}
      >
        {/* Video source */}
        <source src={playingVideo.video_url}  />

        {/* Subtitle track */}
        {
          show.subtitles &&
          <track
              src={playingVideo?.subtitles_url}
              kind="subtitles"
              srcLang="en"
              label="English"
              default
          />
        }
      </video>
    </div>
  );
};

export default MoviePlayer;
