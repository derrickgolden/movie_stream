import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Episode } from "../apiCalls/types";

interface PreviewProps{
  video: Episode;
  addEpisodeRef: React.MutableRefObject<HTMLHeadingElement | null>;
  setVideoDetails: React.Dispatch<React.SetStateAction<{
    episode_no: string;
    season_no: string;
    episode_name: string;
    isEdit: boolean;
    url: string;
    episode_order: string;
    subtitles_url: string;
    credits_start: number;
    runtime: string;
  }>>
}
const Preview: React.FC<PreviewProps> = ({video, setVideoDetails, addEpisodeRef}) => {
  const location = useLocation();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const queryParams = new URLSearchParams(location.search);
  const [previewText, setPreviewText] = useState<string>("");
  const [videoError, setVideoError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState("0");
  const [isPlaying, setIsPlaying] = useState(false);
  const [urls, setUrls] = useState({movieUrl: "", subtitlesUrl: ""})

  useEffect(() => {
    const movieUrl = video?.url || queryParams.get("movieUrl") || "";
    const subtitlesUrl = video?.subtitles_url || queryParams.get("subtitlesUrl") || "";

    setUrls({ movieUrl, subtitlesUrl });

    const handleAutoplay = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          setPreviewText("Autoplay failed. Please click play manually.");
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
  }, [video?.episode_id]);

  useEffect(() => {
    if (videoRef.current && urls.movieUrl) {
      videoRef.current.load(); // Reload video source
    }
  }, [urls.movieUrl]);
  
  const handleVideoError = (event: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const videoElement = event.currentTarget;
    const error = videoElement.error;
  
    if (error) {
      console.error("Video Error:", error.message || "Unknown error", error);
      setVideoError(`Error ${error.code}: ${error.message || "An issue occurred."}`);
    } else {
      setVideoError("An unknown error occurred.");
    }
  };
  

  const handleTimeUpdate = () => {
    if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime.toFixed(0));
    }
  };

  const handleForward = (t: number) => {
    if (videoRef.current) {
        videoRef.current.currentTime += t;
    }
  };

  const handleRewind = (t: number) => {
      if (videoRef.current) {
          videoRef.current.currentTime -= t;
      }
  };

  // Play/Pause video
  const handlePlayPause = () => {
    if (videoRef.current) {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    }
  };

  return (
    <div className="bg-white px-4">
      <div className="p-4">
        <h1 className="text-success">Preview Page</h1>
        {previewText && <p className="text-warning">{previewText}</p>}
        {videoError && <p className="text-danger">{videoError}</p>}
      </div>
        <video
          ref={videoRef}
          controls
          height="450px"
          width="100%"
          onError={handleVideoError}
          onTimeUpdate={handleTimeUpdate}
        >
           {/* Video source */}
           {urls.movieUrl ? (
                <source src={urls.movieUrl} />
              ) : (
                <p className="text-danger">No video URL provided.</p>
              )}


          {/* Subtitle track */}
          <track
              src={urls.subtitlesUrl}
              kind="subtitles"
              srcLang="en"
              label="English"
              default
          />
        </video>

        <div className="d-flex gap-2 justify-content-between my-4">
          <div className="">
            {/* <span className=""> {currentTime} </span> */}
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary btn-sm" onClick={() => handleRewind(60)}>⏪ 60s</button>
            <button className="btn btn-outline-primary btn-sm" onClick={() => handleRewind(30)}>⏪ 30s</button>
            <button className="btn btn-outline-primary btn-sm" onClick={() => handleRewind(10)}>⏪ 10s</button>
            <button className="btn btn-outline-primary btn-sm" onClick={() => handleRewind(5)}>⏪ 5s</button>
            <button className="btn btn-outline-success btn-sm" onClick={handlePlayPause}>
                {isPlaying ? "⏸ Pause" : "▶️ Play"}
            </button>
            <button className="btn btn-outline-info btn-sm" onClick={() => handleForward(5)}>⏩ 5s</button>
            <button className="btn btn-outline-info btn-sm" onClick={() => handleForward(10)}>⏩ 10s</button>
            <button className="btn btn-outline-info btn-sm" onClick={() => handleForward(30)}>⏩ 30s</button>
            <button className="btn btn-outline-info btn-sm" onClick={() => handleForward(60)}>⏩ 60s</button>
          </div>
          <div className="">
            <button className="btn btn-warning btn-sm" style={{width: '150px'}}
              onClick={() => {
                setVideoDetails((obj) =>({...obj, ...video, credits_start: currentTime, isEdit: true}));
                addEpisodeRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
              } 
                }>Use {currentTime}
            </button>
          </div>
        </div>
    </div>
  );
};

export default Preview;
