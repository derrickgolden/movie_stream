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

export const playMovie = ({movie, clickCount, setClickCount, navigate, setHoveredMovie, setIsVideoReady}: PlayMovieArg) =>{
    if(clickCount.id === movie.video_id && clickCount.count > 0){
      if(movie.is_series ){
        const s = movie as SeriesListDetails;
        const {season_order, episodes} = s.seasons[0];
        const { episode_order, video_url, thumbnail_path } = episodes[0];
        const playVideo = { 
          video_url, backdrop_path: thumbnail_path, is_series: true, season_order, episode_order, show_details: true 
        };
        navigate(`/watch/${movie.title}-${movie.video_id}`, {state: {movie, playVideo}});
      }else{
        const m = movie as MovieListProps;
        const {backdrop_path, description, is_series, video_url } = m;
        const playVideo = {backdrop_path, description, is_series, video_url, episode_order: 0, season_order: 0, show_details: false}
        navigate(`/watch/${movie.title}-${movie.video_id}`, {state: {movie, playVideo}});
      }
    }else if(setClickCount && setHoveredMovie && setIsVideoReady){
      setClickCount({count: 1, id: movie.video_id});
      setHoveredMovie({movie_id: movie.video_id, is_series: movie.is_series}  );
      setIsVideoReady(false);
    };
  };