import "./MoviePlayer.css";
import React, { useRef, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePicLeft } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";
import { MdReplayCircleFilled, MdSubtitlesOff } from "react-icons/md";
import { Season } from "../apiCalls/types";
import { getSettingsApi, postWatchProgressApi } from "../apiCalls/noWarningApi";
import { nextMovieEpisode } from "./nextMovieEpisode";
import { exitFullscreen } from "./quickFunctions";
import { MdSubtitles } from "react-icons/md";
import { handleShowSubtitles, handleUserInteraction, resetOverlayTimeout } from "./handles";
import { FaCheckDouble } from "react-icons/fa6";
import { setCallApi } from "../../redux/callApi";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { getMovieSeriesByID } from "../apiCalls/getData";
import { playMovie } from "../Row/playMovie";
import EpisodesAndMore from "./EpisodesAndMore";

interface MoviePlayerProps {}

const MoviePlayer: React.FC<MoviePlayerProps> = () => {
  const overlayTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const callApi = useSelector((state: RootState) => state.callApi);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const intervalRef = useRef<number | null>(null);
  const { type, title, movie_id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lastSavedTime = useRef<number>(0);
  const [show, setShow] = useState({overlay: true, subtitles: false, completed: false, episodes: false});
  const [review, setReview] = useState(10);
  const [movie, setMovie] = useState({});
  const [playingVideo, setPlayingVideo] = useState({
    subtitles_url: "", video_url: "", backdrop_path: "", video_id: 0, episode_id: 0, credits_start: 1000000,
    is_series: false, episode_order: 0, season_order: 0, show_details: false, progress: 0
  });

  const playNextEpisode = () => {
    if (movie.is_series) {
      const currentSeason = movie.seasons.find(
        (season: Season) => season.season_order === playingVideo.season_order
      );
      if (currentSeason) {
        const nextEpisode = nextMovieEpisode({movie, currentSeason, order: playingVideo.episode_order + 1, lastSavedTime})
        if(nextEpisode){
          return setPlayingVideo(nextEpisode);
        };
      }
    }
    // If no next episode is found or it's a movie, navigate back to home
    const { video_id, is_series, episode_id } = playingVideo;
    const data = JSON.stringify({ movie_id: video_id, progress: 0, is_series, episode_id, isCompleted: true });
    postWatchProgressApi(data, navigate)
    navigate("/viewer/dashboard"); 
  };

  useEffect(() =>{
    const stringToken = localStorage.getItem('viewerToken');
    getSettingsApi(JSON.stringify({show_subtitles: show.subtitles}), navigate).then((data) =>{
      const subtitles = data.success ? data.details[0].show_subtitles : false;
      setShow((obj) =>({...obj, subtitles}));
    });
    if(movie_id){
      const data = JSON.stringify({movie_id, type});
      getMovieSeriesByID(movie_id, data, navigate, stringToken).then((data) =>{
        if(data.success){
          setMovie(data.details[0]);
          const playVideo = playMovie({movie: data.details[0], navigate});
          if(playVideo) setPlayingVideo(playVideo);
        }
      });
    }
  }, [callApi, movie_id]);

  useEffect(() => {
    // setPlayingVideo(playVideo);
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
  }, [videoRef, playingVideo, playNextEpisode]);

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

  useEffect(() => {
    resetOverlayTimeout({setShow, overlayTimeout});

    return () => {
      if (overlayTimeout.current) {
        clearTimeout(overlayTimeout.current);
      }
    };
  }, []);

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

  const handleEpisodesAndMore = () => {
    setShow((obj) => ({...obj, episodes: true}));
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget; // Type-safe access to video element
    const newTime = Math.floor(video.currentTime);
    
    // Save progress every 10 seconds
    if (newTime - (lastSavedTime.current | 0) >= 10) {
      // console.log({newTime, progress: playingVideo.progress});
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
    <>
    {
      show.episodes? (
        <EpisodesAndMore 
          movie = { movie }
          lastSavedTime={lastSavedTime}
          setShow = { setShow }
          setPlayingVideo = {setPlayingVideo}
        />
      ) : (
        <div
          className="position-relative"
          onMouseMove={() =>handleUserInteraction({setShow, overlayTimeout})}
          onTouchStart={() =>handleUserInteraction({setShow, overlayTimeout})}
          style={{ maxHeight: "", margin: "auto", textAlign: "center" }}
        >

          {show.overlay ?(
            <div className="position-absolute col-12 top-0 left-0 bottom-0 player-banner ">
              <div className=" h-100 d-flex d-md-block flex-column justify-content-between p-2 p-sm-3 p-md-5 col-12 col-md-5 ">
                <div className="col-12">
                  <h1 className="ms-4 text-warning banner-title">{movie?.title}</h1>
                  <h1 className="banner__description lead col-12">{movie?.description}</h1>
                </div>
                <div className="banner-buttons d-flex mt-5 flex-column gap-4">
                {
                  playingVideo.is_series? (  <>
                    <button onClick={() =>handlePlay(true)}
                    className="btn btn-outline-info w-100 
                    d-flex align-items-center gap-2 justify-content-center text-center">
                      <FaPlay /> Resume S{playingVideo.season_order}: EP.{playingVideo.episode_order}
                    </button>
                    <button onClick={() =>handlePlay(false)}
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
                          <button onClick={() =>handlePlay(true)} className="btn btn-outline-info w-100 
                          d-flex align-items-center gap-2 justify-content-center text-center">
                            <FaPlay /> Resume Playing
                          </button>
                        ): null
                      }
                      <button onClick={() =>handlePlay(false)} className="btn btn-outline-info w-100 
                      d-flex align-items-center gap-2 justify-content-center text-center">
                        <MdReplayCircleFilled /> Play From Beginning
                      </button>
                      </>
                    }
                  </>)

                }
                  <button onClick={() =>handleShowSubtitles(navigate, dispatch, setCallApi)}
                      className="btn btn-outline-info w-100 
                      d-flex align-items-center gap-2 justify-content-center text-center">
                        {
                          show.subtitles ? <MdSubtitles /> : <MdSubtitlesOff />
                        }
                      Display Subtitles
                      {
                        show.subtitles ? <FaCheckDouble className="text-warning"/> : null
                      }  
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
                  label="English"
                  srcLang="en"
                  default
              />
            }
          </video>
        </div>
      )
    }
    </>
  );
};

export default MoviePlayer;
