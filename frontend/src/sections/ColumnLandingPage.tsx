import React, { useEffect, useState } from "react";
import "./section.css"
import { ToggleProps } from "./type";
import Column from "../components/Column/Column";
import ColumnNavbar from "../components/Navbar/ColumnNavbar";
import { getLandingPageData } from "../components/apiCalls/getData";
import { useNavigate } from "react-router-dom";
import { LandingPageMovieDetails, MoviesDetailsRes } from "../components/apiCalls/types";
import ColumnBanner from "../components/Banner/ColumnBanner";

export interface HoveredMovie {
    movie_id: number | null, is_series: number | null | boolean
}

const ColumnLandingPage: React.FC<ToggleProps> = ({toggle, setToggle, setIsLandingReady}) =>{
    const navigate = useNavigate();
    const [hoveredMovie, setHoveredMovie] = useState<MoviesDetailsRes>();
    const [isVideoReady, setIsVideoReady] = useState(false);
    const [columnShow, setColumnShow] = useState<"movies" | "series" | "watching" | "newuploads">("movies");
    const [pageDetails, setPageDetails] = useState<LandingPageMovieDetails>();

    useEffect(() => {
        const token = localStorage.getItem("viewerToken");
        getLandingPageData("", navigate, token).then((data) =>{
            if(data.success){
                setPageDetails(data.details);
            }
        })
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

    return(
        <div className="App col-12 col-sm-11 h-100 bg-black" style={{minHeight: '100vh'}}>
            <div className="position-relative ">
                <ColumnNavbar 
                    toggle={toggle}
                    setToggle={setToggle}
                    setIsLandingReady={setIsLandingReady}
                    columnShow={columnShow}
                    setColumnShow={setColumnShow}
                    pageDetails={pageDetails}
                />
                <ColumnBanner 
                    hoveredMovie = {hoveredMovie}
                    isVideoReady = {isVideoReady} 
                    setIsVideoReady = {setIsVideoReady}
                />
                <div className="col- ro"   >
                    <div className="" style={{marginTop: "340px"}}>

                    </div>
                    {pageDetails &&
                    (() => {
                        switch (columnShow) {
                            case "movies":
                                return <Column 
                                    data={pageDetails.movies}
                                    isLargeRow= {true}
                                    setHoveredMovie ={setHoveredMovie}
                                    setIsVideoReady = {setIsVideoReady}
                                />;
                            case "series":
                                return <Column 
                                    data={pageDetails.series}
                                    isLargeRow={true}
                                    setHoveredMovie ={setHoveredMovie} 
                                    setIsVideoReady = {setIsVideoReady}
                                />;
                            case "watching":
                                return <Column 
                                    data={pageDetails.watching}
                                    isLargeRow= {true}
                                    setHoveredMovie ={setHoveredMovie}
                                    setIsVideoReady = {setIsVideoReady}
                                />;
                            case "newuploads":
                                return <Column 
                                    data={pageDetails.newUploads}
                                    isLargeRow= {true}
                                    setHoveredMovie ={setHoveredMovie}
                                    setIsVideoReady = {setIsVideoReady}
                                />;
                            default:
                                return null;
                        }
                    })()}
                </div>
            </div>
        </div>
    )
};

export default ColumnLandingPage;