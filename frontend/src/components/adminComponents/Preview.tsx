import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Preview = () => {
  const location = useLocation();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const queryParams = new URLSearchParams(location.search);
  const movieUrl = queryParams.get("movieUrl") || undefined;

  const [previewText, setPreviewText] = useState<string>("");
  const [videoError, setVideoError] = useState<string | null>(null);

  const getYouTubeEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&?]+)/);
    console.log(videoIdMatch)
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}?autoplay=1` : null;
  };

  const embedUrl = getYouTubeEmbedUrl("https://www.youtube.com/watch?v=naQr0uTrH_s");

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
          src={movieUrl}
          loop
          controls
          height="450px"
          width="100%"
          onError={handleVideoError}
        />
         {/* <iframe
          width="100%"
          height="500px"
          src= {embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
    </div>
  );
};

export default Preview;
