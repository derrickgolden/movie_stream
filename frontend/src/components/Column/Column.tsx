import "./Column.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MoviesDetailsRes } from "../apiCalls/types";
import { RowProps } from "./type";
import PosterCard from "./PosterCard";

export const baseUrl = "https://image.tmdb.org/t/p/original";

const Column: React.FC<RowProps> = ({ data, isLargeRow, setHoveredMovie, setIsVideoReady }) => {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState({count: 0, id: 0});
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setHoveredMovie(data[randomIndex]);
  }, [data]);

  const handleMovieHover = (movie: MoviesDetailsRes) =>{
    if(clickCount.id !== movie.video_id){
      setIsVideoReady(false);
    };
    setHoveredMovie(movie);
    setClickCount({count: 1, id: movie.video_id});
  }

  return (
    <div className="row2 bg-black col-12 h-100">
      <div className="d-fle position-relative w-100 ">
        <div className="row__posters " ref={rowRef}>
          {data.map((movie, i) => (
            <PosterCard
              key={i}
              movie = {movie} 
              clickCount ={clickCount} 
              navigate = {navigate} 
              handleMovieHover = {handleMovieHover} 
              isLargeRow = {isLargeRow}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Column;
