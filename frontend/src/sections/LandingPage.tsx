import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner"
import Navbar from "../components/Navbar/Navbar";
import Row from "../components/Row/Row";
import requests from "../request";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export interface HoveredMovie {
    movie_id: number | null, is_series: number | null | boolean
}

const LandingPage = () =>{
    const [hoveredMovie, setHoveredMovie] = useState<HoveredMovie>({movie_id: null, is_series: null});
    const [isVideoReady, setIsVideoReady] = useState(false);
    const movieListDetails = useSelector((state: RootState) => state.movieListDetails);
    useEffect(() =>{
        
    }, []);
    return(
        <div className="App position-relative">
            <Navbar />
            <Banner 
                hoveredMovie = {hoveredMovie}
                setHoveredMovie = {setHoveredMovie}
                isVideoReady = {isVideoReady} 
                setIsVideoReady = {setIsVideoReady}
            />
            <div className="" style={{marginTop: "340px"}}>

            </div>
            <Row 
                title={"Movies"}
                type="movies"
                fetchUrl="videos/get-movies"
                isLargeRow= {true}
                setHoveredMovie ={setHoveredMovie}
                setIsVideoReady = {setIsVideoReady}
            />
            <Row 
                title={"Series"} 
                type="series"
                fetchUrl="videos/get-series"
                isLargeRow={true}
                setHoveredMovie ={setHoveredMovie} 
                setIsVideoReady = {setIsVideoReady}
            />
            {/* <Row 
                title={"Trending Movies"} 
                type="movies"
                fetchUrl={requests.fetchHistoryMovies} 
                isLargeRow={false} 
                setHoveredMovie ={setHoveredMovie}
                setIsVideoReady = {setIsVideoReady}   
            />
            <Row
                title={"Continue Watching"}
                type="movies"
                fetchUrl={requests.fetchAnimationMovies}
                isLargeRow={false}
                setHoveredMovie ={setHoveredMovie}
                setIsVideoReady = {setIsVideoReady}
            /> */}
            
        </div>
    )
};

export default LandingPage;