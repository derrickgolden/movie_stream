import { useEffect, useState } from "react";
import { getMovieSeriesCategory } from "../apiCalls/getData";
import { Link, useNavigate } from "react-router-dom";
import { MoviesSeriesCategories } from "../apiCalls/types";
import { handleCategoryClick } from "./handlers";
import PosterCard from "../Row/PosterCard";
import Navbar from "../Navbar/Navbar";
import { RingLoader } from "react-spinners";
import { ToggleProps } from "../../sections/type";

const Categories: React.FC<ToggleProps>= ({toggle, setToggle, setIsLandingReady}) =>{
    const navigate = useNavigate();
    const [categories, setCategories] = useState<MoviesSeriesCategories[]>([]);
    const [category, setCategory] = useState<MoviesSeriesCategories>();
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const handleLoad = () => {
            setIsLandingReady(true);
            setLoading(false);
        };
        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }
    
        const tokenString = localStorage.getItem('viewerToken');
        getMovieSeriesCategory('', navigate, tokenString).then((data)=>{
            if(data.success){
                setCategories(data.details);
                setCategory(data.details[0]);
                console.log(data.details);
            }
        });

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    },[]);

    return(
        <div className="bg-black col-12 col-sm-11" style={{minHeight: '100vh'}}>
            {
                loading? (
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <RingLoader color="#3498db" loading={loading} size={150} />
                    </div>
                ) : (
                    <>
                    <div className="d-sm-none">
                        <Navbar 
                            toggle={toggle}
                            setToggle={setToggle}
                            setIsLandingReady={setIsLandingReady}
                        />
                    </div>
                    <div className="d-flex flex-wrap justify-content-center gap-2 bg-dark py-2 pt-5 pt-sm-2 ">
                        {
                            categories.map((C, i) =>(
                                <button key={i}
                                onClick={() => setCategory(C)}
                                className={`btn btn-sm ${category?.genre_id === C.genre_id ? 
                                'btn-light ': 'btn-outline-light '} `}>
                                    {C.genre_name}
                                </button>
                            ))
                        }
                            <Link to='/viewer/dashboard' className={`btn btn-sm btn-warning `}>
                                Back Home
                            </Link>
                        <hr />
                    </div>
                    <div className="d-flex flex-wrap py-2 justify-content-center">
                        {
                            category?.movies_series?.map((MS, i) =>{
                                if(MS.title){
                                    return(
                                        <PosterCard 
                                            key={i}
                                            movie ={MS}
                                            clickCount ={{id: MS.video_id, count: 1}}
                                            navigate ={navigate}
                                            handleMovieHover ={() =>{}}
                                            isLargeRow ={true}
                                        />
                                    )
                                }
                            })
                        }
                    </div>
                    </>
                )
            }
        </div>
    )
}

export default Categories;