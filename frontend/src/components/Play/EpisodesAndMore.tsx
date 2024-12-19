import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SeriesListDetails } from "../../redux/seriesList";
import { baseUrl } from "../Row/Row";
import { Episode } from "../apiCalls/types";

const EpisodesAndMore = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const movie: SeriesListDetails = location.state;

    // Create refs for each season section
    const seasonRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleEpisodeClick = (episode: Episode, season_order: number) => {
        const { description, is_series } = movie;
        const { thumbnail_path, video_url, episode_order } = episode;
        const playVideo = {
            backdrop_path: thumbnail_path,
            description,
            is_series,
            video_url,
            episode_order,
            season_order,
            show_details: false,
        };
        navigate(`/watch/${movie.title}-${movie.video_id}`, { state: { movie, playVideo } });
    };

    const handleSeasonClick = (index: number) => {
        if (seasonRefs.current[index]) {
            seasonRefs.current[index]?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className="d-flex flex-column flex-md-row text-light justify-content-between "
        style={{minHeight: "100vh"}}>
            <div className="px-5 pt-3 p-md-5 col-12 col-md-4 ">
                <div className="mb-md-5">
                    <h1 className="h1 text-uppercase font-monospace ">{movie.title}</h1>
                    <h6  className="">
                        {movie.release_date} . {movie.seasons.length} Seasons
                    </h6>
                </div>
                <div  className="d-none d-md-block">
                    {movie.seasons.map((season, i) => (
                        <button
                            key={i}
                            className="btn btn-outline-light w-100 d-flex gap-4 mb-4 justify-content-between"
                            onClick={() => handleSeasonClick(i)} // Scroll to season on click
                        >
                            <span>{season.season_name}</span>
                            <span>{season.episodes.length} episodes</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className="col-12 col-md-8 py-2 py-md-5 px-2 episodes">
                {movie.seasons.map((season, i) => (
                    <div
                        key={i}
                        ref={(el) => (seasonRefs.current[i] = el)} // Attach refs to each season
                    >
                        <h4 className="display-1 ">{season.season_name}</h4>
                        {season.episodes.map((episode, j) => (
                            <div
                                role="button"
                                key={i + j}
                                onClick={() => handleEpisodeClick(episode, season.season_order)}
                                className="d-flex flex-column flex-md-row gap-4 align-items-center mb-4"
                            >
                                <div className="col-10 col-md-4">
                                    <img style={{
                                        backgroundSize: "objectFit"
                                    }}
                                        src={`${baseUrl}/${episode.thumbnail_path}`}
                                        alt="Thumbnail"
                                        className="w-100 h-100"
                                    />
                                </div>
                                <div className="px-2 ">
                                    <h3>{episode.episode_name} (Episode {episode.episode_order})</h3>
                                    <h6 className="">{episode.overview}</h6>
                                    <h6>({episode.runtime}m)</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EpisodesAndMore;
