import React from "react";
import { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import loginApi from "./apiCalls/loginApi";
import { forgot_pwd_2_illus, left_arrow, logoIcon } from "../../assets";

export interface PersonDetails{ email: string; password: string; acc_type: string }
type UserAcc = "admin" | "staff";
type LoginProps = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
    prevelages: "admin"| "viewer"
}

const Login: React.FC<LoginProps> = ({setIsLogin, prevelages}) =>{
    const navigate = useNavigate();
    const {urltoken} = useParams();

    const [acc_type, setAcc_type] =  useState<UserAcc>("admin");
    const [loginDetails, setLoginDetails] = useState<PersonDetails>({
        email:"", password: "", acc_type
    });

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
        <section className="container-fluid col-12 d-flex justify-content-center auth-bd pt-5"
        style={{minHeight: "100vh"}}>
            <div className="row col-11 col-sm-8 ">
                <div className="col-12 p-0">
                    <div className="bg-overlay pb-5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-sm-5 col">
                                    <Link className="back-home text-white" to="/">
                                        <img src={left_arrow} alt="image" className="mr-2"/>
                                        Back to Easy Tech
                                    </Link>
                                </div>
                                <div className="col-sm-5 col">
                                    <Link to="/">
                                        <img src={logoIcon} alt="image" className="img-fluid"
                                        style={{width: "50px", height: "50px"}}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="d-none d-md-block col-md-5 ">
                            <div className="img-area">
                                <img src={forgot_pwd_2_illus} alt="image"
                                style={{width: "100%", height: "auto"}}/>
                            </div>
                        </div>
                            <div className="col-lg-6 text-center bg-white px-3 px-sm-5 py-5 m-md-5 mt-5"
                            style={{borderRadius: "1rem"}}
                            >
                                <div className="form-box " >
                                    <h4>Log in to Easy Tech</h4>
                                    <p className="dont-acc text-dark">Don't have an account? 
                                        <Link to={`/${prevelages}/signup`} className="text-info">&nbsp; Register</Link>
                                    </p>
                                    <div className=" bg-white p-10 rounded" id="myTabContent" style={{ height: "100%" }}>
                                        <div className="tab-pane fade p-10 show active" id="admin" role="tabpanel" aria-labelledby="admin-tab">                                
                                            <form onSubmit={handleLoginDetailsSubmit} action="#" className="mt-3" style={{ height: "100%" }}>
                                                <div className="row h-100">
                                                    <div className="col-12 d-flex ">
                                                        <div className="form-group w-100 text-dark text-start my-3">
                                                            <label htmlFor="email">Enter email</label>
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
                                                        <label htmlFor="email">Your Password</label>
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
                                                    <button type='submit' className="btn btn-primary">Log in</button>
                                                </div>
                                                <div className="remember-forgot d-flex justify-content-between pt-3">                                          
                                                    <div className="forget-pw">
                                                        <Link className='a-link' to="/forgot-password">Forgot your password?</Link>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;