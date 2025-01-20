import { playMovie } from "./playMovie";
import { baseUrl } from "./Row";

const PosterCard = ({movie, clickCount, navigate, setClickCount, setHoveredMovie, setIsVideoReady,
    handleMovieHover, isLargeRow
}) =>{
    return(
        <div className="div_poster">
            <img
                key={movie.video_id}
                onClick={() => playMovie({
                    movie, clickCount, navigate, setClickCount, setHoveredMovie, setIsVideoReady
                })}
                onMouseEnter={() =>handleMovieHover(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"} `}
                src={`${baseUrl}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
            />       
        </div>
    )
};

export default PosterCard;