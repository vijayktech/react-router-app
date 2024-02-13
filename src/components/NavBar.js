import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

 function NavBar(){
        const [isOpen, setOpen] = useState();
        const isAuth = !!localStorage.getItem("token");
        const history = useNavigate();

        const loginUser = () => {
            localStorage.setItem("token", "some-randome-token");
            history("/profile/Vijay");
        }

        const logoutUser = () => {
            localStorage.removeItem("token");
            history("/");            
        }

    return <>
        <nav 
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                {/* <div className="navbar-brand"> 
                    <a 
                     role="button"
                     className={`navbar-burger burger ${isOpen && "is-active"}`}
                     aria-label="menu"
                     aria-expanded="false"
                     onClick={()=> setOpen(!isOpen)}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div> */}
                
                <div className={`navbar-menu ${isOpen && "is-active"}`}>
                    <div className="navbar-start">                        
                        <NavLink 
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/"
                            exact="true"
                        > 
                        Home
                        </NavLink>

                        <NavLink 
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/about"
                            exact="true"
                        >
                            About
                        </NavLink>

                        <NavLink 
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/profile/Vijay"
                            exact="true"
                        >
                            profile
                        </NavLink>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                { !isAuth ? (
                                    <button className="button is-white" onClick={loginUser} > Login In </button>
                                ) : (<button className="button is-black" onClick={logoutUser}>Log Out</button> 
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </nav>
    </>
}

export default NavBar;