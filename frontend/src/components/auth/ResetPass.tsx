import axios from 'axios';
import { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { PersonDetails } from './types';
import { baseUrl, server_baseurl } from '../../baseUrl';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const ResetPassword: React.FC = () =>{
    const location = useLocation();
    const phone = location.state?.phone;
    const [signupDetails, setSignupDetails] = useState({
        phone: "254" + phone, password: "", confirm_password: ""
    })
    const navigate = useNavigate()
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
        setSignupDetails((obj) =>({...obj, [name]: value}))
    }
    const handleResetPassDetailsSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        
        const {password, confirm_password} = signupDetails;
        if(password !== confirm_password){
            Swal.fire({
                text: `Password does not match`,
                showCloseButton: true,
                showConfirmButton: false,
                animation: false,
                color: "#dc3545",
                padding: "5px"
            })
            return
        }

        // setToken(urltoken.replace(/_/g, '.'));

        let data = JSON.stringify(signupDetails);
        let config = {
            method: 'PATCH',
            maxBodyLength: Infinity,
            url: `${server_baseurl}/user/reset-password`,
            headers: { 
                'Content-Type': 'application/json',
            },
            data : data
        };

        axios.request(config)
        .then((response) => {
            if(response.data.success){
                navigate('/', {replace: true});
            }
        })
        .catch((error) => {
            console.log(error.response.data);
            setSignupDetails({phone:"", password: "", confirm_password: ""})
            Swal.fire({
                text: `Error: ${error.response.data.msg}`,
                showCloseButton: true,
                showConfirmButton: false,
                animation: false,
                color: "#dc3545",
                padding: "5px"
            })
        });
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
                                            <h4>Reset Your Password</h4>
                                            <p className="dont-acc ">Reseting password for: {phone} 
                                            </p>
                                            <div className=" p-10 rounded" id="myTabContent" style={{ height: "100%" }}>
                                                <div className="tab-pane fade p-10 show active" id="admin" role="tabpanel" aria-labelledby="admin-tab">                                
                                                <form onSubmit={handleResetPassDetailsSubmit} action="#">
                                <div className="row">
                                    
                                    <div className="col-12 mb-3">
                                        <div className="single-input align-items-center">
                                            <label htmlFor="password" className="text-light text-start w-100">Password</label>
                                            <input onChange={handleInputChange} required id='password' autoComplete='off'
                                            name='password' type="password" className="passInput form-control" placeholder="Password"/>
                                            {/* <img className="showPass" src={show_hide} alt="image"/> */}
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <div className="single-input align-items-center">
                                            <label htmlFor="confirm_password" className="text-light text-start w-100">Confirm Password</label>
                                            <input onChange={handleInputChange} required name='confirm_password' id='confirm_password'
                                            type="password" className="passInput form-control" placeholder="Confirm Password" autoComplete='off'/>
                                            {/* <img className="showPass" src={show_hide} alt="image"/> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-area">
                                    <button type="submit" className="cmn-btn btn btn-primary">Reset Password</button>
                                </div>
                            </form>
                                                </div>
                                <p className="back-login dont-acc text-start mt-3">Go back to <Link to='/login'>Login</Link></p>
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
                    // <div className="col-11 col-lg-6 z-1 text-center d-flex align-items-center bg-white rounded my-5 px-3 px-sm-5 py-5">
                    //     <div className="form-box d-flex flex-column gap-2">
                    //         <h4>Reset Your Password</h4>
                    //         <p>You can reset password using this form</p>
                            
                    //         <p className="back-login dont-acc">Go back to <Link to='/login'>Login</Link></p>
                    //     </div>
                    // </div>

export default ResetPassword