import { NavigateFunction } from "react-router-dom";
import { SeriesListDetails } from "../../redux/seriesList";

interface playingVideo {
    video_url: string;
    backdrop_path: string;
    is_series: boolean;
    episode_order: number;
    season_order: number;
    show_details: boolean;
}
type PlayNextEpisodeProps = {
    movie: SeriesListDetails, 
    playingVideo: playingVideo, 
    setPlayingVideo: React.Dispatch<React.SetStateAction<playingVideo>>, 
    videoRef:React.MutableRefObject<HTMLVideoElement | null>, 
    navigate:NavigateFunction;
}
export const playNextEpisode = ({movie, playingVideo, setPlayingVideo}: PlayNextEpisodeProps) => {
    if (movie.is_series) {
      const currentSeason = movie.seasons.find(
        (season) => season.season_order === playingVideo.season_order
      );
      if (currentSeason) {
        const nextEpisode = currentSeason.episodes.find(
          (episode) =>{
              return episode.episode_order === (playingVideo.episode_order + 1)
          } 
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
          setPlayingVideo(nextVideo);
          return;
        }
      }
    }
  };