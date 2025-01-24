import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import { CiLogout, CiSearch } from "react-icons/ci";
import { avatar } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiMenuFold3Fill, RiMenuUnfold3Fill } from "react-icons/ri";

// Sidebar links configuration
  const links = [
    { name: "Search", icon: <CiSearch size={32}/>, href: "/viewer/search-movie" },
    { name: "Home", icon: <FaHome size={32}/>, href: "/viewer/dashboard" },
    { name: "Request Movie", icon: <BsFillChatSquareQuoteFill size={32} />, href: "/viewer/request-movie" },  
  ];

const  SideBar = () =>{
  const navigate = useNavigate();
    const [toggle, setToggle] = useState({link: "Home", isOpen: false})
    const [logOut, setLogOut] = useState(false);
    const [viewer, setViewer] = useState("")

    useEffect(() =>{
      const viewer = localStorage.getItem("viewer");
      viewer ? setViewer(JSON.parse(viewer)) : setLogOut(true);
      logOut? navigate("/"): null
    },[logOut]);

    const handleLogOut = () =>{
      localStorage.clear();
      localStorage.removeItem("viewerToken")
      setLogOut(true);
    }
    return(
        <div style={{backgroundColor: "black "}}
        className={`${toggle.isOpen? "col-9 col-md-3 ": "col-1 " } side-bar col-1 text-center h-100 
          pt-5 px-md-3  position-absolute top-0 left-0 `} >
            <div className={`${toggle.isOpen? "text-start ": "text-center "} d-flex 
            ps-sm-2 ps-md-3 mb-4 mt-5 align-items-center`}>
              <img
                style={{height: "30px"}}
                  className=""
                  src={avatar}
                  alt="netflix-avatar"
              />
              {
                toggle.isOpen &&
                <div className="">
                  <h5 className="text-info ms-3 text-truncate">{getGreeting()}</h5>
                  <h6 className="text-info ms-3 text-truncate">{viewer?.account2}</h6>
                </div>
              }
            </div>
            <div className={`d-flex  text-center text-warning ps-sm-2 ps-md-3`}>
              <Link to="#" className="text-warning  border border-warning rounded px-1 py-sm-1 ps-sm-2 pe-sm-2 px-xxl-3" role="button" 
                onClick={() =>setToggle((obj) =>({...obj, isOpen: !obj.isOpen}))}>
              {
                toggle.isOpen? 
                <RiMenuFold3Fill className="fs-3 " />:
                <RiMenuUnfold3Fill className="fs-3 " />
              }
              </Link>
            </div>
                      <ul className="list-unstyled pt-5">
                          {links.map((link, index) => (
                            <li key={index} className="mb-5 text-start ps-sm-2 ps-md-3">
                              {
                                  <Link
                                    to={link.href || "#"}
                                    className={`${link.name === toggle.link? "text-primary ": "text-white "}nav-link
                                     text-decoration-none fs-5 fw-bolder text-uppercase `}
                                    onClick={() => setToggle({link: link.name, isOpen: false})}
                                  >
                                    {link.icon} 
                                    {
                                      toggle.isOpen && 
                                      <span className="ms-4">{link.name}</span>
                                    }
                                  </Link>
                              }
                            </li>
                          ))}
                            <li key="100" className="mb-5 text-start ps-sm-2 ps-md-3">
                              {
                                <Link to="#"
                                    className="nav-link text-light text-decoration-none fs-5 fw-bolder text-uppercase"
                                    onClick={handleLogOut}
                                  >
                                    <CiLogout size={32}/> 
                                    {
                                      toggle.isOpen && 
                                      <span className="ms-4">Log Out</span>
                                    }
                                </Link>
                              }
                            </li>
                        </ul>
        </div>
    )
};

export default SideBar;

function getGreeting() {
  const currentHour = new Date().getHours();

  if (currentHour < 12) {
      return "Good Morning";
  } else if (currentHour < 18) {
      return "Good Afternoon";
  } else {
      return "Good Evening";
  }
}
