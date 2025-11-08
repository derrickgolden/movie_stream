import { baseUrl } from "./Column";

const PosterCard = ({movie, clickCount, navigate, handleMovieHover, isLargeRow, handleImageLoad}) =>{
    const handleClick = () =>{
        if(clickCount.id === movie.video_id && clickCount.count > 0){
            if(movie.is_series){
                navigate(`/watch/series/${movie.title}/${movie.video_id}`);
            }else{
                navigate(`/watch/movie/${movie.title}/${movie.video_id}`);
            }
        };
    };
    
    return(
        <div className="div_poster">
            <img
                key={movie.video_id}
                onClick={handleClick}
                onMouseEnter={() =>handleMovieHover(movie)}
                onLoad={handleImageLoad}
                onError={handleImageLoad}
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