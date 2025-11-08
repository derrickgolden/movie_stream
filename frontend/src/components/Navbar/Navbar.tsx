import { useEffect, useState } from "react";
import "./Navbar.css";
import { avatar, JAP_logo } from "../../assets";
import { Link } from "react-router-dom";
import { RiMenuFold3Fill, RiMenuUnfold3Fill } from "react-icons/ri";
import { ToggleProps } from "../../sections/type";

const Navbar: React.FC<ToggleProps> = ({toggle, setToggle}) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show ? "nav__black" : ""} d-flex justify-content-between flex-sm-row-reverse col-11 px-sm-2`}>
      {/* <img className="nav__logo" src={JAP_logo} alt="netflix-logo" /> */}
       <div className={`${toggle.isOpen} mt-1 d-sm-none`}>
          <Link to="#" className="text-warning text-center   rounded px-1" 
            onClick={() =>setToggle((obj) =>({...obj, isOpen: !obj.isOpen}))}>
          {
            toggle.isOpen? 
            <RiMenuFold3Fill size={42} className="fs-1 "  />:
            <RiMenuUnfold3Fill size={42} className="fs- " />
          }
          </Link>
        </div>
      <span className="text-primary  display-3 display-md-6 h1 p-0 m-0">J<span className="text-warning px-sm-2">A</span>P</span>
    </div>
  );
};

export default Navbar;
