import { Link } from "react-router-dom"
import { forgot_password_illus, left_arrow, logoIcon } from "../../assets/index"

import axios from 'axios';
import { useState } from "react";
import { PersonDetails } from "./types";
import Swal from "sweetalert2";

const ForgotPassword: React.FC = () =>{
    const [emailDetails, setEmailDetails] = useState<PersonDetails>({
        phone:"", password: "", confirm_password: ""
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const value: string = e.target.value;
        setEmailDetails(emailDetails => ({...emailDetails, phone: value}));
    }
    const handleEmailDetailsSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        
        const {password, confirm_password} = emailDetails;
        if(password !== confirm_password){
            Swal.fire({
                text: "password does not match",
                showCloseButton: true,
                showConfirmButton: false,
                animation: false,
                color: "#dc3545",
                padding: "5px"
            })
            return
        }

        let data = JSON.stringify(emailDetails);
        let config = {
            method: 'POST',
            maxBodyLength: Infinity,
            url: 'http://localhost:5000/user/forgot-password',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            Swal.fire({
                text: "Link sent to your phone, use the link to reset your password",
                showCloseButton: true,
                showConfirmButton: false,
                animation: false,
                color: "#dc3545",
                padding: "5px"
            })
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
        });
    }
    return(
        <div className="">
            <div className="container">
                <div className="row justify-content-center  ">
                    <div className="col-11 col-lg-6 text-center bg-white my-5 px-3 px-sm-5 py-5 rounded">
                        <div className="form-box d-flex flex-column gap-2">
                            <div className="icon-area">
                                <img src={forgot_password_illus} alt="image"/>
                            </div>
                            <h4>Forgot your password?</h4>
                            <p>To reset your password, enter your phone number registered to JAP. Code will be sent to help you get back into your account.</p>
                            <form onSubmit={handleEmailDetailsSubmit} action="#">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group w-100 text-dark text-left my-3">
                                        <label htmlFor="phone">Enter phone</label>
                                                            <input
                                                                onChange={handleInputChange}
                                                                name='phone'
                                                                type="phone"
                                                                className="form-control"
                                                                placeholder="Your Email"
                                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-area col-12">
                                    <button type="submit" className="cmn-btn btn btn-primary">Send Code</button>
                                </div>
                            </form>
                            <p className="back-login dont-acc">Go back to <Link to='/'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword