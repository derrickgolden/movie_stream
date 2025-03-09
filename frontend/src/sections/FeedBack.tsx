import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postFeedBackApi } from "../components/apiCalls/postData";
import Swal from "sweetalert2";

const Feedback = () =>{
    const [feedback, setFeedback] = useState({subject: "", message: "", sender_type: 'client'});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
        const name = e.target.name
        const value = e.target.value
        setFeedback((obj) => ({...obj, [name]: value}));
    }

    const handleFeedbackSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const data = JSON.stringify(feedback);
        setLoading(true);
        postFeedBackApi(data, navigate).then((data)=>{
            if(data.success){
                Swal.fire(`${data.msg}`);
                setFeedback({subject: "", message: "", sender_type: 'client'});
            }
        }).finally(() =>{
            setLoading(false);
        });
    }
    return (
        <div className=" text-light col-12 col-sm-11 bg-black text-start"
        style={{ minHeight: "100vh" }} >
            <div>
                <h1 className="display-4 text-center text-info">Feedback</h1>
                <h1 className="display-6 text-center p-3">
                    We appreciate your review and feedback in helping us improve the streaming site.
                </h1>
            </div>
            <div className="d-flex justify-content-center px-2">
                <div className="bg-dark col-12 col-lg-6 p-4 py-5 mb-5 rounded">
                    <form onSubmit={handleFeedbackSubmit}>
                        <p>Feel free to leave a review, recommendation, or report a particular movie.</p>
                        <div className="form-floating mb-3">
                            <input type="text" onChange={handleInputChange}
                                className="form-control" id="floatingInput" name="subject"
                                placeholder="Amaizing Job" required value={feedback.subject}/>
                            <label htmlFor="floatingInput" className="text-primary">Subject</label>
                        </div>
                        <div className="form-floating ">
                            <textarea className="form-control" onChange={handleInputChange}
                                placeholder="Leave a comment here" name="message"
                                value={feedback.message} required
                                id="floatingTextarea2" style={{height: "200px"}}></textarea>
                            <label htmlFor="floatingTextarea2" className="text-primary">
                                Leave a comment here.
                            </label>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <button type="submit" className="btn btn-primary my-2 col-5"
                                disabled={loading}>
                                {loading? "Submiting..." : "Submit"}
                            </button>
                            <Link to='/viewer/dashboard' className="btn btn-warning my-2 col-5">
                                Back
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Feedback;