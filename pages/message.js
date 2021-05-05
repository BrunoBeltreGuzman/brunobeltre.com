import React, { useState, useEffect } from "react";
import Layout from "../src/partiars/Layout";
import EN from "../translate/en/global.json";
import ES from "../translate/es/global.json";
import getLng from "../src/util/useLng";

export default function Index() {
       const [lng, setLng] = useState(EN);
       useEffect(() => {
              setLng(getLng());
       }, []);
       return (
              <Layout nav={true} lng={lng} title={lng.page3}>
                     <br />
                     <br />
                     <div className="container col-md-6 mx-auto">
                            <br />
                            <br />
                            <br />
                            <div className="card card-content">
                                   <div className="p-5">
                                          <div>
                                                 <h5>
                                                        <i className="fab fa-facebook-messenger"></i>{" "}
                                                        {lng.btnMessage1}:{" "}
                                                 </h5>
                                                 <hr />
                                                 <p className="text-about">
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
                                                        <form className="col-md-6 bg bg-dark text-white">
                                                               <div className="mb-3">
                                                                      <label
                                                                             htmlFor="exampleInputEmail1"
                                                                             className="form-label"
                                                                      >
                                                                             {
                                                                                    lng.inputEmail
                                                                             }
                                                                      </label>
                                                                      <input
                                                                             type="email"
                                                                             className="form-control bg-dark text-white bg-dark-field"
                                                                             id="exampleInputEmail1"
                                                                             required="email"
                                                                      />
                                                               </div>
                                                               <div className="mb-3">
                                                                      <label
                                                                             htmlFor="exampleFormControlTextarea1"
                                                                             className="form-label"
                                                                      >
                                                                             {
                                                                                    lng.inputMessage
                                                                             }
                                                                             :{" "}
                                                                      </label>
                                                                      <textarea
                                                                             className="form-control bg-dark text-white bg-dark-field"
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
