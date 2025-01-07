import React from "react";
import { useEffect, useState } from "react";
import "./auth.css"

import { Link, useNavigate, useParams } from "react-router-dom";
import loginApi from "./apiCalls/loginApi";
import { forgot_pwd_2_illus, left_arrow, logoIcon } from "../../assets";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getMoviesList } from "../apiCalls/getData";
import { useDispatch } from "react-redux";
import { setMovieListDetails } from "../../redux/movieList";
import { baseUrl } from "../Row/Row";

export interface PersonDetails{ email: string; password: string; acc_type: string }
type UserAcc = "admin" | "staff";
type LoginProps = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
    prevelages: "admin"| "viewer"
}

const Login: React.FC<LoginProps> = ({setIsLogin, prevelages}) =>{
    const navigate = useNavigate();
    const {urltoken} = useParams();
    const dispatch = useDispatch();

    const [acc_type, setAcc_type] =  useState<UserAcc>("admin");
    const [loginDetails, setLoginDetails] = useState<PersonDetails>({
        email:"", password: "", acc_type
    });
    const movieListDetails = useSelector((state: RootState) => state.movieListDetails);
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % movieListDetails.length);
        }, 5000); // Change image every 5 seconds
    
        return () => clearInterval(interval); // Cleanup on component unmount
      }, [movieListDetails.length]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const name = e.target.name
        const value = e.target.value
        setLoginDetails((obj) =>({...obj, [name]: value}))
    };

    useEffect(() =>{
        if(urltoken === "kjcc7BiGOqHZCw48zuEu82M0rHxImr1txrgkqqf"){
            let data = JSON.stringify({email:"goldenderrick95@gmail.com", password: "1234", auth_with: "app"});

            loginApi({data, navigate, setLoginDetails, setIsLogin, prevelages});
        }
        getMoviesList("videos/get-movies", "").then((res) =>{
            if(res.success){
                  dispatch(setMovieListDetails(res.details));
                  console.log(res)
                }
            });
    }, []);

    useEffect(()=>{
        setLoginDetails((obj) => ({...obj, acc_type}));
    }, [acc_type]);
    
    const handleLoginDetailsSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        let data = JSON.stringify({...loginDetails, auth_with: "app"});

        loginApi({data, navigate, setLoginDetails, setIsLogin, prevelages});   
    }

    return(
       
            <div className="row pl-0 ps-0 px-0 mx-0 col-12 col-sm-8 background"
            style={{ backgroundImage: `url(${baseUrl}${movieListDetails[currentIndex]?.backdrop_path})` }}>
                {/* <div className="col-12 p-0"> */}
                    <div className="bg- d-fle  login-form h-100">
                        <h1 className="text-primary p-4">J<span className="text-warning px-2">A</span>P</h1>
                    
                        <div className=" gap-5 d-flex form-title">
                            
                            <div className="col-lg-4 col-xl-3 col-xxl-1 d-flex text-center px- px-sm-3 py-5"
                            >
                                <div className="form-bo text-light" >
                                    <h4>Log in to Stream</h4>
                                    <p className="dont-acc ">Don't have an account? 
                                        <Link to={`/${prevelages}/signup`} className="text-info">&nbsp; Register</Link>
                                    </p>
                                    <div className=" p-10 rounded" id="myTabContent" style={{ height: "100%" }}>
                                        <div className="tab-pane fade p-10 show active" id="admin" role="tabpanel" aria-labelledby="admin-tab">                                
                                            <form onSubmit={handleLoginDetailsSubmit} action="#" className="mt-3" style={{ height: "100%" }}>
                                                <div className="row h-100 ">
                                                    <div className="col-12 d-flex ">
                                                        <div className="form-group w-100 text-dark text-start my-3">
                                                            <label htmlFor="email " className="text-light">Enter email</label>
                                                            <input
                                                                onChange={handleInputChange}
                                                                name='email'
                                                                type="email"
                                                                className="form-control"
                                                                placeholder={acc_type === "admin" ? "Email" : "Business Email"}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 d-flex align-items-center text-dark ">
                                                        <div className="form-group w-100 text-start">
                                                        <label htmlFor="email" className="text-light">Your Password</label>
                                                            <input
                                                                onChange={handleInputChange}
                                                                name='password'
                                                                type="password"
                                                                className="form-control"
                                                                placeholder="Password"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" my-3 text-start">
                                                    <button type='submit' className="btn btn-outline-primary">Log in</button>
                                                </div>
                                                <div className="remember-forgot d-flex justify-content-between pt-3">                                          
                                                    <div className="forget-pw">
                                                        <Link className='a-link text-info' to="/forgot-password">Forgot your password?</Link>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end flex-column text-end align-items-end w-100 text-light border-2">
                                <h1 className="text-warning">{movieListDetails[currentIndex]?.title}</h1>
                                <p className="text-info">{movieListDetails[currentIndex]?.slug}</p>
                            </div>
                        </div>
                        
                    </div>
                {/* </div> */}
            </div>
       
    )
}

export default Login;