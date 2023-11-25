import { Link, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import DisplayPg from "./displaypg";
import ProtectedRoute from "./ProtectedRoute";
import Logout from "./logout";

export default function Navbar() {
  const history = useHistory();

  let Logout = () => {
    sessionStorage.removeItem("isLoggedIn");
    history.push("/home");
  };

  return (
    <>
      <hr></hr>

      <hr></hr>
      <div style={{ padding: 20 }}>
       
        <header>
    <div className="top-head">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <ul className="head-cont">
              <li>
                <a href="javascript:;">info@unistaypg.co.in</a>
              </li>
              {/*<li><i class="fa fa-map-marker" aria-hidden="true"></i> 1069, 2nd Floor,KK Nager,Chennai-78 </li>*/}
            </ul>
          </div>
          <div className="col-md-6 col-12">
            <ul className="pull-right">
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.keshav.book_my_pg"
              >
                <img
                  src="https://bookmypg.co.in/assets/front/images/playstore.png"
                  alt="play Store"
                  style={{ display: "inline-block", width: 140 }}
                />
              </a>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li>
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#login_signup_popup"
                  style={{ fontSize: '20px' }}  
                  
                >
                  Login / Sign up{" "} 
                  <small className="m-auto text-center d-block">
                    ( For PG Finder )
                  </small>
                </a>
              </li>
              {/*<li><a href="#" class="citySelector">Chennai  <svg width="10px" height="6px" viewBox="0 0 10 6" class="rotateDown">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-308.000000, -38.000000)" fill="#fff" fill-rule="nonzero">
            <g transform="translate(230.000000, 31.000000)">
              <polygon transform="translate(83.000000, 10.000000) rotate(-270.000000) translate(-83.000000, -10.000000) " points="80 6.2534273 81.2026307 5 86 10 81.2026307 15 80 13.7465727 83.5872931 10"></polygon>
            </g>
          </g>
        </g>
        </svg></a>
                    </li>*/}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="menu-head">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="top-logo-holder">
              <a href="https://bookmypg.co.in" title="UNISTAY PG">
                <img src="image/Logo1.png" alt="UNISTAY PG" />
              </a>
            </div>
            <div className="top-menu-holder" style={{ height: "111px" }}> 
              <ul id="navigation" className="pull-right">
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/displaypg">DisplayPg</a>
                </li>
                {/*<li><a href="">For PG Owners</a></li>*/}
                <li>
                  <a href="/profile">Profile</a>
                </li>
                ;
                <li>
                  <a href="/registeruser">Register</a>
                </li>

     {sessionStorage.getItem("isLoggedIn") === "true" ? (
                  <>
                    {/* Logout logic will go here */}
                    <li class="nav-item" float="left">
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={Logout}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <li class="nav-item" float="left">
                    <Link to="/login">Login</Link>
                  </li>
                )}

                {/*<li><a href="https://bookmypg.co.in/subscription">Subscription</a></li>*/}
              </ul>
              <div id="nav-icon" className="top-number-holder" />
            </div>
            <div className="top-number-holder" style={{
      paddingLeft: '32px',
      height: '111px'
    }}>
              <p>
                <a href="javascript:;">+91-9876543210</a>
              </p>
              {/*<img src="https://bookmypg.co.in/assets/front/images/client-img.jpg" alt="UNISTAY" class="header-profile-image" >*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>


      </div>
      <hr></hr>

      <hr></hr>
    </>
  );
}
