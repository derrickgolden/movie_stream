import { NavigateFunction } from "react-router-dom";
import { Episode, Season, TvSeries } from "../apiCalls/types";
interface NextMovieEpisodeProps{
    movie: TvSeries
    currentSeason: Season,
    order: number;
    lastSavedTime: React.MutableRefObject<number>;
    navigate: NavigateFunction;
}
export const nextMovieEpisode = ({movie, currentSeason, order, lastSavedTime, navigate}: NextMovieEpisodeProps): boolean => {
        const nextEpisode = currentSeason.episodes.find(
          (episode: Episode) => episode.episode_order === order
        );

        if (nextEpisode) {
          // console.log(nextEpisode);
          // Play the next episode
          const { video_url, thumbnail_path, episode_order, subtitles_url, episode_id, credits_start } = nextEpisode;
          const nextVideo = {
            subtitles_url,
            video_url,
            video_id: movie.video_id,
            episode_id,
            backdrop_path: thumbnail_path,
            is_series: true,
            season_order: currentSeason.season_order,
            episode_order,
            credits_start,
            show_details: false,
          };
          lastSavedTime.current = 0;
          navigate(`/watch/${movie.title}-${movie.video_id}`, {
            state: { movie, playVideo: nextVideo },
          });
          return true;
        }else{
            const nextSession = movie.seasons.find((season) => season.season_order === currentSeason.season_order + 1);
            if(nextSession){
                return nextMovieEpisode({movie, currentSeason: nextSession, order: 1, lastSavedTime, navigate});
            }
            return false;
        }
      }