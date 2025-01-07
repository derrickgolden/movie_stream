import { useNavigate } from "react-router-dom";

const Logout = () =>{

    const navigate = useNavigate();

    const handleLogout = () =>{
        localStorage.clear()
        sessionStorage.clear();
        navigate("/admin/login");
        window.location.reload();
    }
    return(
        <div className="bg-white w-100 p-5">
            <h5>Are you sure you want to log out?</h5>
            <div className="p-4">
                <button type="button" onClick={handleLogout} className="btn btn-warning">Yes</button>
            </div>
        </div>
    )
    
};

export default Logout;