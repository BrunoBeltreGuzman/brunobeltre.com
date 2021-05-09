import React from "react";
import Link from "next/link";

export default function Nav(props) {
       return (
              <div>
                     <nav
                            className={
                                   "navbar navbar-dark bg-dark text-white fixed-top " +
                                   props.theme.navbar
                            }
                     >
                            <div className="container col-md-6 mx-auto">
                                   <div
                                          className={
                                                 "profile-nav " +
                                                 props.theme.profileNav
                                          }
                                   >
                                          <Link href="/">
                                                 <a
                                                        className={
                                                               "myname-nav " +
                                                               props.theme
                                                                      .mynameNav
                                                        }
                                                 >
                                                        <img
                                                               src="img/pp.jpeg"
                                                               alt=""
                                                               className={
                                                                      "myphoto-2 " +
                                                                      props
                                                                             .theme
                                                                             .myphoto2
                                                               }
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
                                                        {props.lng.btnMessage1}
                                                 </a>
                                          </Link>
                                   </div>
                            </div>
                     </nav>
              </div>
       );
}
