import { NavigateFunction } from "react-router-dom";
import { SeriesListDetails } from "../../redux/seriesList";
import { MovieListProps } from "../apiCalls/types";
import { HoveredMovie } from "../../sections/LandingPage";

interface PlayMovieArg {
    movie: MovieListProps | SeriesListDetails;
    clickCount: { count: number; id: number; }
    setClickCount?: React.Dispatch<React.SetStateAction<{
        count: number;
        id: number;
    }>>
    navigate: NavigateFunction;
    setHoveredMovie?: React.Dispatch<React.SetStateAction<HoveredMovie>>;
    setIsVideoReady?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const playMovie = ({movie, clickCount, navigate}: PlayMovieArg) =>{
    if(clickCount.id === movie.video_id && clickCount.count > 0){
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
              navigate(`/watch/${movie.title}-${movie.video_id}`, {state: {movie, playVideo}});
            }
          })
        }else{
          const {season_order, episodes} = s.seasons[0];
          const { episode_order, video_url, thumbnail_path, subtitles_url, episode_id, credits_start} = episodes[0];
          const playVideo = { subtitles_url, video_id: movie.video_id, episode_id, progress, completed, credits_start,
            video_url, backdrop_path: thumbnail_path, is_series: true, season_order, episode_order, show_details: true 
          };
          navigate(`/watch/${movie.title}-${movie.video_id}`, {state: {movie, playVideo}});
        }
      }else{
        const m = movie as MovieListProps;
        const {backdrop_path, description, is_series, video_url, subtitles_url, progress, completed, credits_start } = m;
        const playVideo = {backdrop_path, description, is_series, video_url, episode_order: 0, credits_start,
          season_order: 0, subtitles_url, show_details: false, video_id: movie.video_id, progress, completed }
        navigate(`/watch/${movie.title}-${movie.video_id}`, {state: {movie, playVideo}});
      }
    }
  };