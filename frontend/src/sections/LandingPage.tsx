import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner"
import Navbar from "../components/Navbar/Navbar";
import Row from "../components/Row/Row";
import SideBar from "../components/Navbar/SideBar";
import { useNavigate } from "react-router-dom";

export interface HoveredMovie {
    movie_id: number | null, is_series: number | null | boolean
}

const LandingPage = () =>{
    const [hoveredMovie, setHoveredMovie] = useState<HoveredMovie>({movie_id: null, is_series: null});
    const [isVideoReady, setIsVideoReady] = useState(false);
    const [theDevice, setTheDevice] = useState<"laptop" | "phone" | "tv">("laptop");
    const navigate = useNavigate();

      const detectDevice = () => {
        const userAgent = navigator.userAgent.toLowerCase();
      
        if (userAgent.includes("mobile")) {
          return "phone";
        } else if (userAgent.includes("tv") || userAgent.includes("smart-tv")) {
          return "tv";
        } else {
          return "laptop";
        }
      };
      
      // console.log(`Device Type: ${detectDevice()}`);
      useEffect(() =>{
        setTheDevice(detectDevice());
      })
    
    return(
        <div className="d-flex  ">
            <SideBar />

            <div className="App d-flex justify-content-end position-relative col-12 " >
                <Navbar />
                <Banner 
                    hoveredMovie = {hoveredMovie}
                    setHoveredMovie = {setHoveredMovie}
                    isVideoReady = {isVideoReady} 
                    setIsVideoReady = {setIsVideoReady}
                />
                <div className="col-11 "  >
                    <div className="" style={{marginTop: "340px"}}>

                    </div>
                    <Row 
                        title={"Movies"}
                        type="movies"
                        fetchUrl="videos/get-movies"
                        isLargeRow= {true}
                        setHoveredMovie ={setHoveredMovie}
                        setIsVideoReady = {setIsVideoReady}
                        theDevice = {theDevice}
                    />
                    <Row 
                        title={"Series"} 
                        type="series"
                        fetchUrl="videos/get-series"
                        isLargeRow={true}
                        setHoveredMovie ={setHoveredMovie} 
                        setIsVideoReady = {setIsVideoReady}
                        theDevice = {theDevice}
                    />
                </div>
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
        </div>
    )
};

export default LandingPage;