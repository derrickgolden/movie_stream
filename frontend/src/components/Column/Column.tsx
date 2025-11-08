import "./Column.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MoviesDetailsRes } from "../apiCalls/types";
import { RowProps } from "./type";
import PosterCard from "./PosterCard";
import { RingLoader } from "react-spinners";
import { Link } from 'react-router-dom';

export const baseUrl = "https://image.tmdb.org/t/p/w500";

const Column: React.FC<RowProps> = ({ data, isLargeRow, setHoveredMovie, setIsVideoReady, setColumnShow, columnShow }) => {
  const navigate = useNavigate();
  const rowRef = useRef<HTMLDivElement>(null);
  const [clickCount, setClickCount] = useState({count: 0, id: 0});
  const [loadedCount, setLoadedCount] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    if (loadedCount > (data.length) - 10) {
      setAllLoaded(true);
    }
  }, [loadedCount, data.length]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setHoveredMovie(data[randomIndex]);
    window.scrollTo({top: 0, behavior: 'smooth'});
    setAllLoaded(false);
    setLoadedCount(0);
  }, [data.length]);

  const handleMovieHover = (movie: MoviesDetailsRes) =>{
    if(clickCount.id !== movie.video_id){
      setIsVideoReady(false);
    };
    setHoveredMovie(movie);
    setClickCount({count: 1, id: movie.video_id});
  }

  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1);
  };

  return (
    <div className="row2 bg-black col-12 h-100 pb-5">
      <div className="d-fle position-relative w-100 ">
        <div className="row__posters " ref={rowRef}
        // style={{opacity: allLoaded ? 1 : 0, transition: 'opacity 0.5s ease'}}
        >
          {data.map((movie, i) => (
            <PosterCard
              key={i}
              movie = {movie} 
              clickCount ={clickCount} 
              navigate = {navigate} 
              handleMovieHover = {handleMovieHover} 
              isLargeRow = {isLargeRow}
              handleImageLoad = {handleImageLoad}
            />
          ))}
        </div>
        {/* <div className="position-absolute col-12 top-0">
          {
            !allLoaded && (
              <div className="d-flex flex-column align-items-center justify-content-center h-100 col-12">
                <h1 className="text-primary display-1 ">Please wait ...</h1>
                <RingLoader color="#3498db" loading={!allLoaded} size={100} />
              </div>
            )
          }
        </div> */}
        <h3 className="text-center">Also Check out &nbsp;
          {columnShow !== "movies" &&
            <Link to="#" onClick={() =>setColumnShow("movies")}>Movies,</Link>
          } &nbsp;
          {columnShow !== "series" &&
            <Link to="#" onClick={() =>setColumnShow("series")}>Series,</Link>
          } &nbsp;
          {columnShow !== "newuploads" &&
            <Link to="#" onClick={() =>setColumnShow("newuploads")}>New Uploads</Link>
          } &nbsp;
           section for more.
        </h3>
      </div>
    </div>
  );
};

export default Column;
