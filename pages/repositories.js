import React, { useState, useEffect } from "react";
import Layout from "../src/partiars/Layout";
import Link from "next/link";
import Ropos from "../src/components/Repos";
import EN from "../translate/en/global.json";
import ES from "../translate/es/global.json";
import getLng from "../src/util/useLng";

export default function Index() {
       const [lng, setLng] = useState(EN);
       useEffect(() => {
              setLng(getLng());
       }, []);
       return (
              <Layout nav={true} lng={lng} title={lng.page2}>
                     <br />
                     <br />
                     <div class="container col-md-6 mx-auto">
                            <br />
                            <br />
                            <br />
                            <div class="card card-content">
                                   <div class="p-5">
                                          <div>
                                                 <h5>
                                                        <i class="fab fa-github"></i>{" "}
                                                        {lng.title4}
                                                 </h5>
                                                 <hr />
                                                 <div class="">
                                                        <a
                                                               href="https://github.com/BrunoBeltreGuzman"
                                                               target="_blank"
                                                               class=""
                                                        >
                                                               {lng.allRepos2}{" "}
                                                        </a>
                                                 </div>
                                                 <br />
                                                 <Ropos></Ropos>
                                          </div>
                                   </div>
                                   <div class="myfooter">
                                          <div className="row  p-4">
                                                 <div className="col-sm p-1">
                                                        <h5 class="text-left">
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
                     <br />
              </Layout>
       );
}
