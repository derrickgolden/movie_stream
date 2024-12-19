import React, { useState } from "react";
import { FaHome, FaFilm, FaTv, FaBell, FaMoneyBill, FaExclamationTriangle } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { JAP_logo } from "../../../assets";

const Sidebar = () => {
  const [toggle, setToggle] = useState<string | null>(null);

  // Sidebar links configuration
  const links = [
    { name: "Dashboard", icon: <FaHome />, href: "/admin/dashboard" },
    {
      name: "Movie",
      icon: <FaFilm />,
      sublinks: [
        { name: "New Movie", href: "/admin/new-movie" },
        { name: "All Movies", href: "/admin/all-movies" },
      ],
    },
    {
      name: "Series",
      icon: <FaTv />,
      sublinks: [
        { name: "New TV Series", href: "/admin/new-series" },
        { name: "All TV Series", href: "/admin/all-series" },
      ],
    },
    { name: "Movie Request", icon: <FaExclamationTriangle />, href: "/admin/movie-request" },
    { name: "Report", icon: <FaExclamationTriangle />, href: "/admin/report" },
    { name: "Subscription", icon: <FaMoneyBill />, href: "/admin/subscription" },
    { name: "Notification", icon: <FaBell />, href: "/admin/notification" },
  ];

  return (
    <div className="d-flex"  style={{position: "relative"}}>
      <div className="bg-dark text-light vh-100 p-3" style={{minWidth: "250px" }}>
        <div className="text-center mb-4">
            <img className="nav__logo" src={JAP_logo} alt="jap-logo" />
        </div>
        <ul className="list-unstyled pt-5">
          {links.map((link, index) => (
            <li key={index} className="mb-3">
              {
                !link?.href ? (
                  <span
                    className="nav-link text-light text-decoration-none fs-5 fw-bolder text-uppercase"
                    onClick={() => link.sublinks && setToggle(toggle === link.name ? null : link.name)}
                  >
                    {link.icon} <span className="ms-2">{link.name}</span>
                  </span>
                ):(
                  <Link
                    to={link.href || "#"}
                    className="nav-link text-light text-decoration-none fs-5 fw-bolder text-uppercase"
                    onClick={() => link.sublinks && setToggle(toggle === link.name ? null : link.name)}
                  >
                    {link.icon} <span className="ms-2">{link.name}</span>
                  </Link>
                )
              }

              {/* Sublinks */}
              {link.sublinks && toggle === link.name && (
                <ul className="list-unstyled ms-3 fs-4 text-uppercase">
                  {link.sublinks.map((sublink, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={sublink.href}
                        className="nav-link text-light text-decoration-none"
                      >
                        {sublink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="flex-grow-1 position-absolute top-bar">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div> */}
      <Outlet />
    </div>
  );
};

export default Sidebar;
