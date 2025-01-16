import { Link, useNavigate } from "react-router-dom"
import { forgot_password_illus, left_arrow, logoIcon } from "../../assets/index"

import axios from 'axios';
import { useEffect, useState } from "react";
import { PersonDetails } from "./types";
import Swal from "sweetalert2";
import { baseUrl, server_baseurl } from "../../baseUrl";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { submitCodeApi } from "./apiCalls/postApiCall";

const ForgotPassword: React.FC = () =>{
    const movieListDetails = useSelector((state: RootState) => state.movieListDetails);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [passResetDetails, setPassResetDetails] = useState({
        phone:"", password: "", confirm_password: "", code: ""
    });
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [secs, setSecs] = useState(30);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % movieListDetails.length);
        }, 5000); // Change image every 5 seconds
    
        return () => clearInterval(interval); // Cleanup on component unmount
    }, [movieListDetails.length]);
    useEffect(() =>{
        if(isCodeSent){
            var interval = setInterval(()=>{
                setSecs((prevSec) => {
                    if (prevSec <= 1) {
                        clearInterval(interval); // Stop the interval when sec reaches 0
                        return 0;
                    }
                    return prevSec - 1;
                });
            }, 1000);
        }else{
            () => clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[isCodeSent] );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const value: string = e.target.value;
        const name = e.target.name;
        setPassResetDetails((obj) => ({...obj, [name]: value}));
    }
    const handleResetSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        setIsCodeSent(false);
        setIsLoading(true);

        let data = JSON.stringify({...passResetDetails, phone: "254" + passResetDetails.phone});
        let config = {
            method: 'POST',
            maxBodyLength: Infinity,
            url: `${server_baseurl}/user/forgot-password`,
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios.request(config)
        .then((response) => {
            console.log(response)
            if(response.data.success){
                const {id, user_id} = response.data.details[0]
                setPassResetDetails((obj ) =>({...obj, id, user_id }))
                setIsCodeSent(true);
            };
        })
        .catch((error) => {
            Swal.fire({
                text: `Error: ${error.response.data.msg}`,
                showCloseButton: true,
                showConfirmButton: false,
                animation: false,
                color: "#dc3545",
                padding: "5px"
            })
        }).finally(() =>{
            setIsLoading(false);
        });
    }

    const handleSubmitCode = () =>{
        submitCodeApi(JSON.stringify(passResetDetails)).then((data) =>{
            if(data.success){
                navigate("/viewer/reset-pass", {state: {phone: passResetDetails.phone}})
            }
        });
    }
    return(
        <div className="row pl-0 ps-0 px-0 mx-0 col-12 col-sm-8 background"
                    style={{ backgroundImage: `url(${baseUrl}${movieListDetails[currentIndex]?.backdrop_path})` }}>
                        {/* <div className="col-12 p-0"> */}
                            <div className="bg- d-fle  login-form h-100">
                                <h1 className="text-primary p-4">J<span className="text-warning px-2">A</span>P</h1>
                            
                                <div className=" gap-5 d-flex form-title">
                                    
                                    <div className="col-lg-4 col-xl-3 d-flex text-center px- px-sm-3 py-5"
                                    >
                                        <div className="form-bo text-light" >
                                            {
                                                isCodeSent ? (<>
                                                    <h4>Enter Code</h4>
                                                    <p className="dont-acc ">
                                                        Code has been send to your phone. 
                                                    </p>
                                                </>
                                                ):(<>
                                                    <h4>Reset Password</h4>
                                                    <p className="dont-acc ">
                                                        To reset your password, enter your phone number registered to JAP. Code will be sent to help you reset password. 
                                                    </p>
                                                </>
                                                )
                                            }
                                            <div className=" p-10 rounded" id="myTabContent" style={{ height: "100%" }}>
                                                <div className="tab-pane fade p-10 show active" id="admin" role="tabpanel" aria-labelledby="admin-tab">                                
                                                    <form onSubmit={handleResetSubmit} action="#" className="mt-3" style={{ height: "100%" }}>
                                                        <div className="row h-100 ">
                                                            {
                                                                isCodeSent? (
                                                                <div className="mb-3">
                                                                    <label htmlFor="code" className="text-light text-start w-100">Enter Code</label>
                                                                        <div className="input-group ">
                                                                            <input onChange={handleInputChange} required value={passResetDetails.code}
                                                                                type="number" name="code" className="form-control" placeholder="000000"/>
                                                                        </div>
                                                                </div>
                                                                ) : (
                                                                <div className="mb-3">
                                                                    <label htmlFor="phone " className="text-light text-start w-100">Your Phone Number</label>
                                                                        <div className="input-group ">
                                                                            <span className="input-group-text">+254</span>
                                                                            <input onChange={handleInputChange} required value={passResetDetails.phone} autoComplete="off"
                                                                                type="number" name="phone" className="form-control" placeholder="714470000"/>
                                                                        </div>
                                                                        <div className="form-text text-warning" id="basic-addon4">After +254, continue with 7... or 1..</div>
                                                                </div>
                                                                )
                                                            }
                                                        </div>
                                                        <div className=" my-3 text-start">
                                                        {isCodeSent? 
                                                            <button type='button' onClick={handleSubmitCode} disabled={isLoading}
                                                                className="btn btn-outline-primary">Submit</button> :
                                                            <button type='submit' disabled= {isLoading}
                                                                className="btn btn-outline-primary">{isLoading? "Sending...": "Send Code"}</button>
                                                        }
                                                        </div>
                                                        {
                                                            isCodeSent && (
                                                                secs === 0? (
                                                                <div className=" d-flex gap-4 my-3 text-start">
                                                                        <button type='button' onClick={handleResetSubmit} disabled= {isLoading}
                                                                        className="btn btn-outline-success"> Resend Code</button>
                                                                        {/* <button type='button' onClick={handleResetSubmit} disabled= {isLoading}
                                                                        className="btn btn-outline-success">Enter Phone No.</button> */}
                                                                </div>
                                                                ) :(
                                                                    <div className="remember-forgot d-flex justify-content-between pt-3">                                          
                                                                        <p>Resend the code in <span className="text-success">{secs} sec</span></p>
                                                                    </div>
                                                                )
                                                                
                                                            )
                                                        }
                                                        <div className="remember-forgot d-flex justify-content-between pt-3">                                          
                                                            <div className="forget-pw">
                                                                <Link className='a-link text-info' to="/">Back to Login</Link>
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

export default ForgotPassword