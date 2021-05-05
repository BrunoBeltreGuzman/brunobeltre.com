import React, { useState, useEffect } from "react";
import Layout from "../src/partiars/Layout";
import Link from "next/link";
import Repos from "../src/components/Repos";
import EN from "../translate/en/global.json";
import ES from "../translate/es/global.json";
import getLng from "../src/util/useLng";

export default function Index() {
       const [lng, setLng] = useState(EN);
       useEffect(() => {
              setLng(getLng());
       }, []);

       return (
              <Layout nav={true} lng={lng} title={lng.page1}>
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
                                                 <h4>{lng.funGreet}</h4>
                                                 <br />
                                                 <p className="text-about">
                                                        {lng.about}{" "}
                                                 </p>
                                                 <br />
                                          </div>

                                          <br />

                                          <div>
                                                 <h5 className="">
                                                        <i className="far fa-user-circle"></i>{" "}
                                                        {lng.title1}
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
                                                        {lng.title2}
                                                 </h5>
                                                 <hr />
                                                 <div className="item-languaje">
                                                        Java
                                                 </div>
                                                 <div className="item-languaje">
                                                        JavaScript
                                                 </div>
                                                 <div className="item-languaje">
                                                        TypeScript
                                                 </div>
                                                 <div className="item-languaje">
                                                        PHP
                                                 </div>
                                                 <div className="item-languaje">
                                                        SQL
                                                 </div>
                                                 <br />
                                          </div>

                                          <br />
                                          <br />

                                          <div>
                                                 <h5>
                                                        <i className="fas fa-tools"></i>{" "}
                                                        {lng.title3}
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
                                                               {
                                                                      lng.desTechnology
                                                               }
                                                        </i>
                                                 </p>
                                          </div>

                                          <br />
                                          <br />

                                          <div>
                                                 <h5>
                                                        <i className="fab fa-github"></i>{" "}
                                                        {lng.title4}
                                                 </h5>
                                                 <hr />

                                                 <div>
                                                        <Repos
                                                               limit={3}
                                                        ></Repos>
                                                 </div>

                                                 <br />
                                                 <Link href="/repositories">
                                                        <a>{lng.allRepos1}</a>
                                                 </Link>
                                                 <br />
                                          </div>

                                          <br />
                                   </div>
                                   <div className="myfooter">
                                          <div className="row  p-4">
                                                 <div className="col-sm p-1">
                                                        <h5 className="text-left">
                                                               Bruno Beltre
                                                               Guzman
                                                        </h5>
                                                        <button
                                                               onClick={function () {
                                                                      setLng(
                                                                             ES
                                                                      );
                                                                      localStorage.setItem(
                                                                             "lng",
                                                                             "ES"
                                                                      );
                                                               }}
                                                               className="language"
                                                        >
                                                               <i className="fas fa-globe-asia"></i>{" "}
                                                               {lng.spanish}
                                                        </button>
                                                        <button
                                                               onClick={function () {
                                                                      setLng(
                                                                             EN
                                                                      );
                                                                      localStorage.setItem(
                                                                             "lng",
                                                                             "EN"
                                                                      );
                                                               }}
                                                               className="language"
                                                        >
                                                               <i className="fas fa-flag-usa"></i>{" "}
                                                               {lng.english}
                                                        </button>
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
