import { NavigateFunction } from "react-router-dom";
import { SeriesListDetails } from "../../redux/seriesList";
import { MovieListProps } from "../apiCalls/types";
import { HoveredMovie } from "../../sections/LandingPage";

interface PlayMovieArg {
    movie: MovieListProps | SeriesListDetails;
    setClickCount?: React.Dispatch<React.SetStateAction<{
        count: number;
        id: number;
    }>>
    navigate: NavigateFunction;
    setHoveredMovie?: React.Dispatch<React.SetStateAction<HoveredMovie>>;
    setIsVideoReady?: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface PlayVideoProps {
  subtitles_url: string;
  video_id: number;
  episode_id: number;
  progress: number;
  completed: boolean;
  video_url: string;
  backdrop_path: string;
  is_series: boolean;
  season_order: number;
  episode_order: number;
  show_details: boolean;
  credits_start: number;
}


export const playMovie = ({movie, navigate}: PlayMovieArg): PlayVideoProps | undefined =>{
  let video;
  if(movie.is_series ){
    const s = movie as SeriesListDetails;
    const {progress, completed, episode_id} = s.watch_progress;
    if(progress){
      s.seasons.map((season, i) =>{
        const findEpisode = season.episodes.find((episode, i) => episode.episode_id === episode_id);
        if(findEpisode){
          const { episode_order, video_url, thumbnail_path, subtitles_url, episode_id, credits_start} = findEpisode;
          const playVideo = { subtitles_url, video_id: movie.video_id, episode_id, progress, completed,
            video_url, backdrop_path: thumbnail_path, is_series: true, season_order: season.season_order, 
            episode_order, show_details: true, credits_start
          };
          video = playVideo;
        }
      })
    }else{
      const {season_order, episodes} = s.seasons[0];
      const { episode_order, video_url, thumbnail_path, subtitles_url, episode_id, credits_start} = episodes[0];
      const playVideo = { subtitles_url, video_id: movie.video_id, episode_id, progress, completed, credits_start,
        video_url, backdrop_path: thumbnail_path, is_series: true, season_order, episode_order, show_details: true 
      };
      video = playVideo;
    }
  }else{
    const m = movie as MovieListProps;
    const {backdrop_path, description, is_series, video_url, subtitles_url, progress, completed, credits_start } = m;
    const playVideo = {backdrop_path, description, is_series, video_url, episode_order: 0, credits_start, episode_id: 0,
      season_order: 0, subtitles_url, show_details: false, video_id: movie.video_id, progress, completed };
      video = playVideo;
  }
return video;
};