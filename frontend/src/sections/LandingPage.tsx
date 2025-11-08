import React, { useEffect, useState } from "react";
import "./section.css"
import Banner from "../components/Banner/Banner"
import Navbar from "../components/Navbar/Navbar";
import Row from "../components/Row/Row";
import { useNavigate } from "react-router-dom";
import { ToggleProps } from "./type";

export interface HoveredMovie {
    movie_id: number | null, is_series: number | null | boolean
}

const LandingPage: React.FC<ToggleProps> = ({toggle, setToggle, setIsLandingReady}) =>{
    const [hoveredMovie, setHoveredMovie] = useState<HoveredMovie>({movie_id: null, is_series: null});
    const [isVideoReady, setIsVideoReady] = useState(false);
    const [theDevice, setTheDevice] = useState<"laptop" | "phone" | "tv">("laptop");

    useEffect(() => {
      const handleLoad = () => {
        setIsLandingReady(true);
      };

      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
      }

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }, []);

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
            <div className="App col-12 col-sm-11 ">
              <div className="position-relative ">
                <Navbar 
                  toggle={toggle}
                  setToggle={setToggle}
                  setIsLandingReady={setIsLandingReady}
                />
                <Banner 
                    hoveredMovie = {hoveredMovie}
                    setHoveredMovie = {setHoveredMovie}
                    isVideoReady = {isVideoReady} 
                    setIsVideoReady = {setIsVideoReady}
                />
                <div className="col- ro"   >
                    <div className="" style={{marginTop: "340px"}}>

                    </div>
                    <Row 
                        title={"Continue Watching"}
                        subTitle=""
                        type="continue_watching"
                        fetchUrl="videos/get-movies"
                        isLargeRow= {true}
                        setHoveredMovie ={setHoveredMovie}
                        setIsVideoReady = {setIsVideoReady}
                        theDevice = {theDevice}
                    />
                    <Row 
                        title={"Movies"}
                        subTitle="Scroll/Swipe Left For More."
                        type="movies"
                        fetchUrl="videos/get-movies"
                        isLargeRow= {true}
                        setHoveredMovie ={setHoveredMovie}
                        setIsVideoReady = {setIsVideoReady}
                        theDevice = {theDevice}
                    />
                    <Row 
                        title={"Series"}
                        subTitle="Scroll/Swipe Left For More." 
                        type="series"
                        fetchUrl="videos/get-series"
                        isLargeRow={true}
                        setHoveredMovie ={setHoveredMovie} 
                        setIsVideoReady = {setIsVideoReady}
                        theDevice = {theDevice}
                    />
                </div>
              </div>
            </div>
    )
};

export default LandingPage;