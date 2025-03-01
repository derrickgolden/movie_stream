import { playMovie } from "./playMovie";
import { baseUrl } from "./Row";

const PosterCard = ({movie, clickCount, navigate, handleMovieHover, isLargeRow}) =>{
    const handleClick = () =>{
        if(clickCount.id === movie.video_id && clickCount.count > 0){
            movie.is_series?
            navigate(`/watch/series/${movie.title}/${movie.video_id}`):
            navigate(`/watch/movie/${movie.title}/${movie.video_id}`);
        };
    };
    return(
        <div className="div_poster">
            <img
                key={movie.video_id}
                loading="lazy"
                onClick={handleClick}
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