import { useEffect, useState } from "react";
import "./Navbar.css";
import { avatar, JAP_logo } from "../../assets";

const Navbar: React.FC = () => {
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
    <div className={`nav ${show ? "nav__black" : ""}`}>
      {/* <img className="nav__logo" src={JAP_logo} alt="netflix-logo" /> */}
      <span className="text-primary h1 p-0 m-0">J<span className="text-warning px-2">A</span>P</span>
      <img
        className="nav__avatar"
        src={avatar}
        alt="netflix-avatar"
      />
    </div>
  );
};

export default Navbar;
