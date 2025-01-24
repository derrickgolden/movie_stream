import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Preview = () => {
  const location = useLocation();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const queryParams = new URLSearchParams(location.search);
  const movieUrl = queryParams.get("movieUrl") || undefined;
  const subtitlesUrl = queryParams.get("subtitlesUrl") || undefined;
console.log({subtitlesUrl, movieUrl})
  const [previewText, setPreviewText] = useState<string>("");
  const [videoError, setVideoError] = useState<string | null>(null);

  useEffect(() => {
    const handleAutoplay = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("Autoplay failed:", error);
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
  }, []);

  const handleVideoError = () => {
    setVideoError("An error occurred while loading the video. Movie URL might be incorrect or Video not available.");
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
        >
           {/* Video source */}
          <source src={movieUrl}  />

          {/* Subtitle track */}
          <track
              src={subtitlesUrl}
              kind="subtitles"
              srcLang="en"
              label="English"
              default
          />
        </video>
    </div>
  );
};

export default Preview;
