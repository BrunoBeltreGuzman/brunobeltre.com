import React, { useState, useEffect } from "react";
import Layout from "../src/partiars/Layout";
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
              <Layout nav={true} lng={lng} title={lng.page3} theme={theme}>
                     <br />
                     <br />
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
                                                 <h5 className={theme.util}>
                                                        <i className="fab fa-facebook-messenger"></i>{" "}
                                                        {lng.btnMessage1}:{" "}
                                                 </h5>
                                                 <hr />
                                                 <p
                                                        className={
                                                               "text-about " +
                                                               theme.textAbout
                                                        }
                                                 >
                                                        {lng.desMessage}
                                                 </p>
                                                 <br />
                                                 <div className="">
                                                        <a href="mailto: brunobeltreguzman@gmail.com">
                                                               brunobeltreguzman@gmail.com
                                                        </a>
                                                 </div>
                                                 <br />
                                                 <hr />
                                                 <div>
                                                        <form
                                                               className={
                                                                      "col-md-6 bg bg-dark text-white " +
                                                                      theme.bgForm
                                                               }
                                                        >
                                                               <div className="mb-3">
                                                                      <label
                                                                             htmlFor="exampleInputEmail1"
                                                                             className={
                                                                                    "form-label " +
                                                                                    theme.label
                                                                             }
                                                                      >
                                                                             {
                                                                                    lng.inputEmail
                                                                             }
                                                                      </label>
                                                                      <input
                                                                             type="email"
                                                                             className={
                                                                                    "form-control " +
                                                                                    theme.bgField
                                                                             }
                                                                             id="exampleInputEmail1"
                                                                             required="email"
                                                                      />
                                                               </div>
                                                               <div className="mb-3">
                                                                      <label
                                                                             htmlFor="exampleFormControlTextarea1"
                                                                             className={
                                                                                    "form-label " +
                                                                                    theme.label
                                                                             }
                                                                      >
                                                                             {
                                                                                    lng.inputMessage
                                                                             }
                                                                             :{" "}
                                                                      </label>
                                                                      <textarea
                                                                             className={
                                                                                    "form-control " +
                                                                                    theme.bgField
                                                                             }
                                                                             id="exampleFormControlTextarea1"
                                                                             rows="4"
                                                                             required="text"
                                                                      ></textarea>
                                                               </div>
                                                               <br />
                                                               <button
                                                                      type="submit"
                                                                      className="btn btn-primary"
                                                               >
                                                                      <i className="fab fa-facebook-messenger"></i>{" "}
                                                                      {
                                                                             lng.btnMessage1
                                                                      }
                                                               </button>
                                                        </form>
                                                 </div>
                                                 <br />
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
              </Layout>
       );
}
