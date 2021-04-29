import React from "react";
import Layout from "../src/partiars/Layout";
import Link from "next/link";
import Ropos from "../src/components/Repos";
import Head from "next/head";

export default function Index() {
       return (
              <Layout>
                     <br />
                     <br />
                     <Head>
                            {" "}
                            <title>Repositories | Bruno Beltre</title>
                     </Head>
                     <div class="container col-md-6 mx-auto">
                            <br />
                            <br />
                            <br />
                            <div class="card card-content">
                                   <div class="p-5">
                                          <div>
                                                 <h5>
                                                        <i class="fab fa-github"></i>{" "}
                                                        GitHub Repositories:
                                                 </h5>
                                                 <hr />
                                                 <div class="">
                                                        <a
                                                               href="https://github.com/BrunoBeltreGuzman"
                                                               target="_blank"
                                                               class=""
                                                        >
                                                               See all on github{" "}
                                                        </a>
                                                 </div>
                                                 <br />
                                                 <Ropos></Ropos>
                                          </div>
                                   </div>
                                   <div class="myfooter">
                                          <div class="row p-3">
                                                 <div class="col-md-10">
                                                        <h5 class="text-left">
                                                               Bruno Beltre
                                                               Guzman
                                                        </h5>
                                                        <a
                                                               href=""
                                                               class="language"
                                                        >
                                                               <i class="fas fa-globe-asia"></i>{" "}
                                                               Espanol
                                                        </a>
                                                        <a
                                                               href=""
                                                               class="language"
                                                        >
                                                               <i class="fas fa-flag-usa"></i>{" "}
                                                               English
                                                        </a>
                                                 </div>
                                                 <div class="col-md-2 text-right">
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
                     <br />
              </Layout>
       );
}
