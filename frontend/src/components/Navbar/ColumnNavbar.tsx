import { useEffect, useState } from "react";
import "./Navbar.css";
import { avatar, JAP_logo } from "../../assets";
import { Link } from "react-router-dom";
import { RiMenuFold3Fill, RiMenuUnfold3Fill } from "react-icons/ri";
import { ToggleProps } from "../../sections/type";

const ColumnNavbar: React.FC<ToggleProps> = ({toggle, setToggle, columnShow, setColumnShow, pageDetails}) => {
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
    <div className={`nav pb-5  col-12 col-sm-11 px-sm-2`}
    style={{backgroundColor: "rgba(7, 7, 7, .3)"}}>
        <div className="d-flex wrap-none justify-content-between align-items-center w-100 text-center"
        style={{marginTop: "1px"}}>
          <Link to="#" className="text-warning text-center d-sm-none rounded px-1" 
            onClick={() =>setToggle((obj) =>({...obj, isOpen: !obj.isOpen}))}>
          {
            toggle.isOpen? 
            <RiMenuFold3Fill size={42} className="fs-1 "/>:
            <RiMenuUnfold3Fill size={42} className="fs- "/>
          }
          </Link>
          <div className="d-flex gap-sm-5 gap-2 justify-content-between col-9 col-sm-10 col-md-11 px-4">
            {
              pageDetails?.watching.length && (
              <button className={`btn btn-sm w-100 fs-6 d-flex justify-content-center ${columnShow === "watching"? 'btn-warning ' : 'btn-outline-warning '}`}
              onClick={() =>setColumnShow("watching")}>
              <span className="d-none d-md-block">Continue</span> &nbsp; <span>Watching</span>
              </button>
              )
            }
            <button className={`btn btn-sm w-100 fs-6 ${columnShow === "movies"? 'btn-warning ' : 'btn-outline-warning '}`}
            onClick={() =>setColumnShow("movies")}>
              Movies
            </button>
            <button className={`btn btn-sm w-100 fs-6 ${columnShow === "series"? 'btn-warning ' : 'btn-outline-warning '}`}
            onClick={() =>setColumnShow("series")}>
              Series
            </button>
            <button className={` d-none d-sm-flex justify-content-center btn btn-sm w-100 fs-6 ${columnShow === "newuploads"? 'btn-warning ' : 'btn-outline-warning '}`}
            onClick={() =>setColumnShow("newuploads")}>
              <span >New</span> &nbsp; <span className="d-none d-md-block">Upload</span>
            </button>
          </div>
            <div className="col-sm-2 col-md-1">
              <span className="text-primary  display-6 h1 p-0 m-0">J
                <span className="text-warning px-sm-2">A</span>P
              </span>
            </div>
        </div>
    </div>
  );
};

export default ColumnNavbar;
