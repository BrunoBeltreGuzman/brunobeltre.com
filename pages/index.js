import React from "react";
import Layout from "../src/partiars/Layout";
import Link from "next/link";
import Repos from "../src/components/Repos";

export default function Index() {
       return (
              <Layout nav={true}>
                     <br />
                     <br />
                     <br />
                     <div className="container col-md-6 mx-auto">
                            <br />
                            <br />
                            <br />
                            <div className="card card-content">
                                   <div className="p-5">
                                          <div>
                                                 <img
                                                        src="img/pp.jpeg"
                                                        alt=""
                                                        className="myphoto"
                                                 />
                                                 <br />
                                                 <br />
                                                 <h1 className="display-5">
                                                        Bruno Beltre Guzman
                                                 </h1>
                                                 <h4>
                                                        greet("Hello World!!
                                                        👋");
                                                 </h4>
                                                 <br />
                                                 <p className="text-about">
                                                        I am a student of
                                                        Computer Systems
                                                        Engineering, I have
                                                        experience in the
                                                        development and design
                                                        of information systems.{" "}
                                                 </p>
                                                 <br />
                                          </div>

                                          <br />

                                          <div>
                                                 <h5 className="">
                                                        <i className="far fa-user-circle"></i>{" "}
                                                        Follow Me Online Here:
                                                 </h5>
                                                 <hr />
                                                 <a
                                                        href="https://github.com/BrunoBeltreGuzman"
                                                        target="_blank"
                                                        className="socials"
                                                 >
                                                        GitHub
                                                 </a>
                                                 <a
                                                        href="https://github.com/BrunoBeltreGuzman"
                                                        target="_blank"
                                                        className="socials"
                                                 >
                                                        Twitter
                                                 </a>
                                                 <a
                                                        href="https://github.com/BrunoBeltreGuzman"
                                                        target="_blank"
                                                        className="socials"
                                                 >
                                                        LinkedIn
                                                 </a>
                                          </div>

                                          <br />
                                          <br />

                                          <div>
                                                 <h5>
                                                        <i className="far fa-lightbulb"></i>{" "}
                                                        My main programming
                                                        languages are:
                                                 </h5>
                                                 <hr />
                                                 <li className="item-languaje">
                                                        Java
                                                 </li>
                                                 <li className="item-languaje">
                                                        JavaScript
                                                 </li>
                                                 <li className="item-languaje">
                                                        TypeScript
                                                 </li>
                                                 <li className="item-languaje">
                                                        PHP
                                                 </li>
                                                 <li className="item-languaje">
                                                        SQL
                                                 </li>
                                                 <br />
                                          </div>

                                          <br />
                                          <br />

                                          <div>
                                                 <h5>
                                                        <i className="fas fa-tools"></i>{" "}
                                                        Development Technology
                                                 </h5>
                                                 <hr />
                                                 <div className="row">
                                                        <div className="col-md-6">
                                                               <li className="item-tech">
                                                                      React
                                                               </li>
                                                               <li className="item-tech">
                                                                      React
                                                                      Native
                                                               </li>
                                                               <li className="item-tech">
                                                                      Electron
                                                               </li>
                                                               <li className="item-tech">
                                                                      Node
                                                               </li>
                                                        </div>
                                                        <div className="col-md-6">
                                                               <li className="item-tech">
                                                                      Spring
                                                                      Boot
                                                               </li>
                                                               <li className="item-tech">
                                                                      Laravel
                                                               </li>
                                                               <li className="item-tech">
                                                                      Express
                                                               </li>
                                                               <li className="item-tech">
                                                                      Git
                                                               </li>
                                                        </div>
                                                        <br />
                                                 </div>
                                                 <br />

                                                 <p className="text-secondary">
                                                        <i>
                                                               And other
                                                               development
                                                               technologies.
                                                        </i>
                                                 </p>
                                          </div>

                                          <br />
                                          <br />

                                          <div>
                                                 <h5>
                                                        <i className="fab fa-github"></i>{" "}
                                                        GitHub Repositories:
                                                 </h5>
                                                 <hr />

                                                 <div>
                                                        <Repos
                                                               limit={3}
                                                        ></Repos>
                                                 </div>

                                                 <br />
                                                 <Link href="/repositories">
                                                        <a>
                                                               View All
                                                               Repositories
                                                        </a>
                                                 </Link>
                                                 <br />
                                          </div>

                                          <br />
                                   </div>
                                   <div className="myfooter">
                                          <div className="row p-3">
                                                 <div className="col-md-10">
                                                        <h5 className="text-left">
                                                               Bruno Beltre
                                                               Guzman
                                                        </h5>
                                                        <a
                                                               href=""
                                                               className="language"
                                                        >
                                                               <i className="fas fa-globe-asia"></i>{" "}
                                                               Espanol
                                                        </a>{" "}
                                                        <a
                                                               href=""
                                                               className="language"
                                                        >
                                                               <i className="fas fa-flag-usa"></i>{" "}
                                                               English
                                                        </a>
                                                 </div>
                                                 <div className="col-md-2 text-right">
                                                        <Link href="/message">
                                                               <a
                                                                      style={{
                                                                             textDecoration:
                                                                                    "none",
                                                                      }}
                                                                      className="btn btn-secondary btn-sm align-right"
                                                               >
                                                                      <i className="fab fa-facebook-messenger"></i>{" "}
                                                                      Contact
                                                               </a>
                                                        </Link>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>

                     <br />
                     <br />
                     <br />
              </Layout>
       );
}
