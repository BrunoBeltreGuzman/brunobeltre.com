import React, { useState, useEffect } from "react";
import Layout from "../src/partiars/Layout";
import Link from "next/link";

import Repos from "../src/components/Repos";

import EN from "../translate/en/global.json";
import ES from "../translate/es/global.json";
import getLng from "../src/util/useLng";

import light from "../styles/light.module.css";
import dark from "../styles/dark.module.css";
import getTheme from "../src/util/useTheme";

export default function Index() {
       const [lng, setLng] = useState(EN);
       const [theme, setTheme] = useState(dark);
       useEffect(() => {
              setLng(getLng());
              setTheme(getTheme());
       }, []);

       return (
              <Layout nav={true} lng={lng} title={lng.page1} theme={theme}>
                     <br />
                     <br />
                     <div>
                            <div
                                   className={
                                          "container col-md-6 mx-auto " +
                                          theme.container
                                   }
                            >
                                   <br />
                                   <br />
                                   <br />
                                   <div
                                          className={
                                                 "card card-content " +
                                                 theme.cardContent
                                          }
                                   >
                                          <div className="p-5">
                                                 <div>
                                                        <img
                                                               src="img/pp.jpeg"
                                                               alt=""
                                                               className={
                                                                      "myphoto " +
                                                                      theme.myphoto
                                                               }
                                                        />
                                                        <br />
                                                        <br />
                                                        <h1
                                                               className={
                                                                      "display-5 " +
                                                                      theme.util
                                                               }
                                                        >
                                                               Bruno Beltre
                                                               Guzman
                                                        </h1>
                                                        <h4
                                                               className={
                                                                      theme.util
                                                               }
                                                        >
                                                               {lng.funGreet}
                                                        </h4>
                                                        <br />
                                                        <p
                                                               className={
                                                                      "text-about " +
                                                                      theme.textAbout
                                                               }
                                                        >
                                                               {lng.about}{" "}
                                                        </p>
                                                        <br />
                                                 </div>

                                                 <br />

                                                 <div>
                                                        <h5
                                                               className={
                                                                      theme.util
                                                               }
                                                        >
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
                                                        <h5
                                                               className={
                                                                      theme.util
                                                               }
                                                        >
                                                               <i className="far fa-lightbulb"></i>{" "}
                                                               {lng.title2}
                                                        </h5>
                                                        <hr />
                                                        <div
                                                               className={
                                                                      "item-languaje " +
                                                                      theme.itemLanguaje
                                                               }
                                                        >
                                                               Java
                                                        </div>
                                                        <div
                                                               className={
                                                                      "item-languaje " +
                                                                      theme.itemLanguaje
                                                               }
                                                        >
                                                               JavaScript
                                                        </div>
                                                        <div
                                                               className={
                                                                      "item-languaje " +
                                                                      theme.itemLanguaje
                                                               }
                                                        >
                                                               TypeScript
                                                        </div>
                                                        <div
                                                               className={
                                                                      "item-languaje " +
                                                                      theme.itemLanguaje
                                                               }
                                                        >
                                                               PHP
                                                        </div>
                                                        <div
                                                               className={
                                                                      "item-languaje " +
                                                                      theme.itemLanguaje
                                                               }
                                                        >
                                                               SQL
                                                        </div>
                                                        <br />
                                                 </div>

                                                 <br />
                                                 <br />

                                                 <div>
                                                        <h5
                                                               className={
                                                                      theme.util
                                                               }
                                                        >
                                                               <i className="fas fa-tools"></i>{" "}
                                                               {lng.title3}
                                                        </h5>
                                                        <hr />
                                                        <div className="row">
                                                               <div className="col-md-6">
                                                                      <li
                                                                             className={
                                                                                    "item-tech " +
                                                                                    theme.itemTech
                                                                             }
                                                                      >
                                                                             React
                                                                      </li>
                                                                      <li
                                                                             className={
                                                                                    "item-tech " +
                                                                                    theme.itemTech
                                                                             }
                                                                      >
                                                                             React
                                                                             Native
                                                                      </li>
                                                                      <li
                                                                             className={
                                                                                    "item-tech " +
                                                                                    theme.itemTech
                                                                             }
                                                                      >
                                                                             Electron
                                                                      </li>
                                                                      <li
                                                                             className={
                                                                                    "item-tech " +
                                                                                    theme.itemTech
                                                                             }
                                                                      >
                                                                             Node
                                                                      </li>
                                                               </div>
                                                               <div className="col-md-6">
                                                                      <li
                                                                             className={
                                                                                    "item-tech " +
                                                                                    theme.itemTech
                                                                             }
                                                                      >
                                                                             Spring
                                                                             Boot
                                                                      </li>
                                                                      <li
                                                                             className={
                                                                                    "item-tech " +
                                                                                    theme.itemTech
                                                                             }
                                                                      >
                                                                             Laravel
                                                                      </li>
                                                                      <li
                                                                             className={
                                                                                    "item-tech " +
                                                                                    theme.itemTech
                                                                             }
                                                                      >
                                                                             Express
                                                                      </li>
                                                                      <li
                                                                             className={
                                                                                    "item-tech " +
                                                                                    theme.itemTech
                                                                             }
                                                                      >
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
                                                        <h5
                                                               className={
                                                                      theme.util
                                                               }
                                                        >
                                                               <i className="fab fa-github"></i>{" "}
                                                               {lng.title4}
                                                        </h5>
                                                        <hr />

                                                        <div>
                                                               <Repos
                                                                      theme={
                                                                             theme
                                                                      }
                                                                      limit={3}
                                                               ></Repos>
                                                        </div>

                                                        <br />
                                                        <Link href="/repositories">
                                                               <a>
                                                                      {
                                                                             lng.allRepos1
                                                                      }
                                                               </a>
                                                        </Link>
                                                        <br />
                                                 </div>

                                                 <br />
                                          </div>
                                          <div
                                                 className={
                                                        "myfooter " +
                                                        theme.myfooter
                                                 }
                                          >
                                                 <div className="row  p-3">
                                                        <h5
                                                               className={
                                                                      "text-left " +
                                                                      theme.util
                                                               }
                                                        >
                                                               Bruno Beltre
                                                               Guzman
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
                                                                      {
                                                                             lng.spanish
                                                                      }
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
                                                                      {
                                                                             lng.english
                                                                      }
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
                                                                      {
                                                                             lng.light
                                                                      }
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
                     </div>
                     <br />
                     <br />
                     <br />
              </Layout>
       );
}
