import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Swal from 'sweetalert2'
import { formFields } from './userInputs';
import { addUser } from '../apiCalls/postData';

type UserAcc = "viewer" | "admin";

const AddEditUsers: React.FC<{}> = ({}) =>{
    const [user_type, setUser_type] =  useState<UserAcc>("viewer");
    // admin_email and admin_pass are only used when signing up a user.
    const [signupDetails, setSignupDetails] = useState({
        remember_me: true, password: "JAP_movies", phone: "", location: "Naivas", 
        apartment: "", account2: "", mac: "", name: ""
    });
    useEffect(() =>{
        setSignupDetails((obj) => ({...obj, user_type}));
    }, [user_type]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        const name = e.target.name
        const value = e.target.value
        
        if(name !== "name"){
            setSignupDetails((obj) =>({...obj, [name]: value}))
        }else{
            const parts = value.split(" ");

            setSignupDetails((obj) =>({...obj, name: value, account2: parts[1]}));
        }
    };

    // normal signup
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        
        const phone = "254" + signupDetails.phone;
        let data = JSON.stringify({...signupDetails, phone, auth_with: "app"});
        
        addUser(data).then((res) =>{
            if(res.success){
                Swal.fire(`${res.msg}`);
                setSignupDetails({
                    remember_me: true, password: "JAP_movies", phone: "", location: "Naivas", apartment: "", 
                    account2: "", mac: "", name: ""
                });
            };
        });
    }

    return(
        <div className="p-md-4 bg-light w-100">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="">
                        <div className="form-box">
                            <h4>Add New Client</h4>
                            {/* <p className="alr-acc dont-acc">Already have an account? 
                                <Link className='a-link' to={`/${prevelages}/login`}>Log in now.</Link>
                            </p> */}
                            <div className="tab-content">
                                <div className="tab-pane fade show active col-12" id="personal" role="tabpanel" aria-labelledby="personal-tab">
                                <form  onSubmit={handleFormSubmit} className='d-flex p-4 shadow border mb-2 justify-content-between flex-wrap'>
                                    {formFields.map((field, index) => (
                                        <div className="mb-3 col-12 col-md-5" key={index}>
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
                                                    value={signupDetails[field.name]}
                                                    id={field.name}
                                                    className="form-control"
                                                    placeholder={field.placeholder}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    <div className="btn-area py-2 col-12 text-center">
                                        <button type="submit" className="cmn-btn btn btn-primary col-12 col-md-5">
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

export default AddEditUsers;