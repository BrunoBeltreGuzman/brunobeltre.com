import React from "react";
import Layout from "../src/partiars/Layout";
import Head from "next/head";

export default function Index() {
       return (
              <Layout>
                     <br />
                     <br />
                     <Head>
                            {" "}
                            <title>Message | Bruno Beltre</title>
                     </Head>
                     <div className="container col-md-6 mx-auto">
                            <br />
                            <br />
                            <br />
                            <div className="card card-content">
                                   <div className="p-5">
                                          <div>
                                                 <h5>
                                                        <i className="fab fa-facebook-messenger"></i>{" "}
                                                        Send Message:{" "}
                                                 </h5>
                                                 <hr />
                                                 <p className="text-about">
                                                        Send me a email with
                                                        your favorite email
                                                        server or send me a
                                                        quick message.
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
                                                                             for="exampleInputEmail1"
                                                                             className="form-label"
                                                                      >
                                                                             Your
                                                                             Email:
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
                                                                             for="exampleFormControlTextarea1"
                                                                             className="form-label"
                                                                      >
                                                                             Message:{" "}
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
                                                                      Send
                                                                      Message
                                                               </button>
                                                        </form>
                                                 </div>
                                                 <br />
                                          </div>
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
                                                               <i className="fas fa-globe-asia"></i>
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
                                                 <div className="col-md-2 text-right"></div>
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
