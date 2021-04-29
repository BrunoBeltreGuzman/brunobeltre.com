import React from "react";
import Link from "next/link";

export default function Nav() {
       return (
              <div>
                     <nav className="navbar navbar-dark bg-dark text-white fixed-top">
                            <div className="container col-md-6 mx-auto">
                                   <div className="profile-nav">
                                          <Link href="/">
                                                 <a className="myname-nav">
                                                        <img
                                                               src="img/pp.jpeg"
                                                               alt=""
                                                               className="myphoto-2"
                                                        />
                                                        {" Bruno "}{" "}
                                                 </a>
                                          </Link>
                                   </div>
                                   <div className="d-flex">
                                          <Link href="/message">
                                                 <a
                                                        style={{
                                                               textDecoration:
                                                                      "none",
                                                        }}
                                                        className="btn btn-secondary btn-sm align-right"
                                                 >
                                                        <i className="fab fa-facebook-messenger"></i>{" "}
                                                        Sent Message
                                                 </a>
                                          </Link>
                                   </div>
                            </div>
                     </nav>
              </div>
       );
}
