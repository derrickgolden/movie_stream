import { baseUrl } from "./Column";
import Swal from "sweetalert2";

const PosterCard = ({movie, clickCount, navigate, handleMovieHover, isLargeRow, handleImageLoad}) =>{
    const handleClick = () =>{
        if(clickCount.id === movie.video_id && clickCount.count > 0){
            if(movie.is_series){
                Swal.fire({
                  text: "We're currently experiencing issues with playing TV Series, but you can continue enjoying Movies as we work to resolve it. We Apologize."
                });
            }else{
                navigate(`/watch/movie/${movie.title}/${movie.video_id}`);
            }
            // navigate(`/watch/series/${movie.title}/${movie.video_id}`):
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