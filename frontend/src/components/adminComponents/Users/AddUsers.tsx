import axios from 'axios';
import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { left_arrow, logoIcon, register_illus, show_hide,  } from '../../../assets/index';

import { countries as countriesList } from 'countries-list'
import { server_baseurl } from '../../../baseUrl';

import Swal from 'sweetalert2'
import { formFields } from './userInputs';
import { formattedData, user } from './users';
import { addUser } from '../../apiCalls/postData';

type UserAcc = "viewer" | "admin";

const AddUsers: React.FC<{}> = ({}) =>{
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);
    const [user_type, setUser_type] =  useState<UserAcc>("viewer");
    // admin_email and admin_pass are only used when signing up a user.
    const [signupDetails, setSignupDetails] = useState({
        remember_me: true, password: "JAP_movies", phone: ""
    })
    useEffect(() =>{
        setSignupDetails((obj) => ({...obj, user_type}));

    }, [user_type]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        const name = e.target.name
        const value = e.target.value
        
        if(name !== "remember_me"){
            setSignupDetails((obj) =>({...obj, [name]: value}))
        }else{
            setSignupDetails((obj) =>({...obj, [name]: !obj.remember_me}))
        }
    }

    // normal signup
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        
        const phone = "254" + signupDetails.phone
        let data = JSON.stringify({...signupDetails, phone, auth_with: "app"});        
console.log(data);
return;
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${server_baseurl}/user/signup`,
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios.request(config)
        .then((response) => {
            if(response.data.msg === "User Registered"){
                Swal.fire("Client Added")
            }else{
                Swal.fire({
                    text: `${response.data.msg}`,
                    showCloseButton: true,
                    showConfirmButton: false,
                    animation: false,
                    color: "#dc3545",
                    padding: "5px"
                })
            }
        })
        .catch((error) => {
            console.log(error);
            Swal.fire({
                text: `Server Side Error`,
                showCloseButton: true,
                showConfirmButton: false,
                animation: false,
                color: "#dc3545",
                padding: "5px"
            })
        });
    }

    return(
        <div className="p-4 bg-light w-100">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="">
                        <div className="form-box">
                            <h4>Add New Client</h4>
                            {/* <p className="alr-acc dont-acc">Already have an account? 
                                <Link className='a-link' to={`/${prevelages}/login`}>Log in now.</Link>
                            </p> */}
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="personal" role="tabpanel" aria-labelledby="personal-tab">
                                <form  onSubmit={handleFormSubmit} className='d-flex justify-content-between flex-wrap'>
                                    {formFields.map((field, index) => (
                                        <div className="mb-3 col-5" key={index}>
                                            <label htmlFor={field.name} className="form-label ms-2">
                                                {field.label}
                                            </label>
                                            <div className={field.prefix ? "input-group" : ""}>
                                                {field.prefix && <span className="input-group-text">{field.prefix}</span>}
                                                <input 
                                                    onChange={handleInputChange}
                                                    required={field.required}
                                                    type={field.type}
                                                    name={field.name}
                                                    id={field.name}
                                                    className="form-control"
                                                    placeholder={field.placeholder}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    <div className="btn-area py-2 col-5">
                                        <button type="submit" className="cmn-btn btn btn-primary col-12">
                                         Add Client
                                        </button>
                                    </div>
                                    </form>
                                    <div className="privacy text-dark">
                                        <p>By registering you accept our <Link className='a-link' to="terms-conditions.html">Terms & Conditions
                                        </Link> and <Link className='a-link' to="privacy-policy.html">Privacy Policy</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default AddUsers;