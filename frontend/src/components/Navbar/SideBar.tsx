import {  FaHome } from "react-icons/fa";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import { FcFeedback } from "react-icons/fc";
import { CiLogout, CiSearch } from "react-icons/ci";
import { avatar } from "../../assets";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiMenuFold3Fill, RiMenuUnfold3Fill } from "react-icons/ri";
import { MdCategory } from "react-icons/md";
import { ToggleProps } from "../../sections/type";
import Swal from "sweetalert2";

// Sidebar links configuration
  const links = [
    { name: "Search", icon: <CiSearch size={32}/>, href: "/viewer/search-movie" },
    { name: "Home", icon: <FaHome size={32}/>, href: "/viewer/dashboard" },
    { name: "Categories", icon: <MdCategory size={32} />, href: "/viewer/categories" },  
    { name: "Request Movie", icon: <BsFillChatSquareQuoteFill size={32} />, href: "/viewer/request-movie" },  
    { name: "Feedback", icon: <FcFeedback size={32} />, href: "/viewer/feedback" },  
  ];

const  SideBar: React.FC<ToggleProps> = ({toggle, setToggle}) =>{
  const navigate = useNavigate();
  const location = useLocation();
  const [logOut, setLogOut] = useState(false);
  const [viewer, setViewer] = useState("")

  console.log(location);
  useEffect(() =>{
      const viewer = localStorage.getItem("viewer");
      viewer ? setViewer(JSON.parse(viewer)) : setLogOut(true);
      logOut? navigate("/"): null
    },[logOut]);

    const handleLogOut = () =>{
      Swal.fire({
        title: "Are you sure you want to Log Out?",
        showDenyButton: true,
        showCloseButton: true,
        confirmButtonText: "Log Out",
        denyButtonText: `Continue Watching`,
        confirmButtonColor: "#ffc107",
        denyButtonColor: "#198754",
        icon: 'question'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          localStorage.removeItem("viewerToken")
          setLogOut(true);
        }
      });
    }
    return(
        <div style={{}} className={`  d-flex justify-content-end`} >
            <div className={`${toggle.isOpen? "col-9 col-sm-5 col-md-4 col-lg-3 ": "col-1 d-none d-sm-block" } side-bar col-1 text-center h-100 
              pt-3 px-md-3  position-fixed top-0 left-0  `} style={{zIndex: 30}}>
              <div className={`d-none d-sm-block`}>
                <Link to="#" className="text-warning text-start rounded px-1" 
                  onClick={() =>setToggle((obj) =>({...obj, isOpen: !obj.isOpen}))}>
                {
                  toggle.isOpen? 
                  <RiMenuFold3Fill size={42} className="fs-1 "  />:
                  <RiMenuUnfold3Fill size={42} className="fs-1 " />
                }
                </Link>
              </div>
              <div className={`${toggle.isOpen? "text-start ": "justify-content-center "} d-flex  
              ps-2 ps-sm-0 my-4 align-items-center `} style={{height: "80px"}}>
                <img style={{height: "30px"}}
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
              
                      <ul className="list-unstyled pt-5 ps-2 ps-sm-0">
                          {links.map((link, index) => (
                            <li key={index} className={`mb-4 ${toggle.isOpen? "text-start ": "text-center "} `}>
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
                            <li key="100" className={`mb-5 ${toggle.isOpen? "text-start ": "text-center "} `}>
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
          <Outlet />
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
