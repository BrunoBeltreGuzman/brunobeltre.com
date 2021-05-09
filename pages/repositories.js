import React, { useState, useEffect } from "react";
import Layout from "../src/partiars/Layout";
import Link from "next/link";
import Ropos from "../src/components/Repos";
import EN from "../translate/en/global.json";
import ES from "../translate/es/global.json";
import getLng from "../src/util/useLng";

import light from "../styles/light.module.css";
import dark from "../styles/dark.module.css";
import getTheme from "../src/util/useTheme";

export default function Message() {
       const [lng, setLng] = useState(EN);
       const [theme, setTheme] = useState(dark);
       useEffect(() => {
              setLng(getLng());
              setTheme(getTheme());
       }, []);
       return (
              <Layout nav={true} lng={lng} title={lng.page2} theme={theme}>
                     <br />
                     <br />
                     <div
                            class={
                                   "container col-md-6 mx-auto " +
                                   theme.container
                            }
                     >
                            <br />
                            <br />
                            <br />
                            <div
                                   class={
                                          "card card-content " +
                                          theme.cardContent
                                   }
                            >
                                   <div class="p-5">
                                          <div>
                                                 <h5 className={theme.util}>
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
                                                 <Ropos theme={theme}></Ropos>
                                          </div>
                                   </div>
                                   <div
                                          className={
                                                 "myfooter " + theme.myfooter
                                          }
                                   >
                                          <div className="row  p-3">
                                                 <h5
                                                        className={
                                                               "text-left " +
                                                               theme.util
                                                        }
                                                 >
                                                        Bruno Beltre Guzman
                                                 </h5>
                                                 <div class="col-md-2">
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
                                                               className={
                                                                      "language " +
                                                                      theme.language
                                                               }
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
                                                               className={
                                                                      "language " +
                                                                      theme.language
                                                               }
                                                        >
                                                               <i className="fas fa-flag-usa"></i>{" "}
                                                               {lng.english}
                                                        </button>
                                                 </div>
                                                 <div class="col-md-2">
                                                        <button
                                                               className={
                                                                      "language " +
                                                                      theme.language
                                                               }
                                                               onClick={function () {
                                                                      localStorage.setItem(
                                                                             "theme",
                                                                             "light"
                                                                      );
                                                                      setTheme(
                                                                             light
                                                                      );
                                                               }}
                                                        >
                                                               <i class="fas fa-sun"></i>{" "}
                                                               {lng.light}
                                                        </button>
                                                        <br />
                                                        <button
                                                               className={
                                                                      "language " +
                                                                      theme.language
                                                               }
                                                               onClick={function () {
                                                                      localStorage.setItem(
                                                                             "theme",
                                                                             "dark"
                                                                      );
                                                                      setTheme(
                                                                             dark
                                                                      );
                                                               }}
                                                        >
                                                               <i className="fas fa-moon"></i>{" "}
                                                               {lng.dark}
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
