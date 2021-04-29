import React from "react";
import Layout from "../src/partiars//Layout";
import Link from "next/link";

export default function custom404() {
       return (
              <Layout>
                     <br />
                     <br />
                     <br />

                     <div className="row p-5">
                            <div className="col-md-10 m-auto text-center">
                                   <div className="container text-center">
                                          <h1 className="text-light">
                                                 Opss!! &#128533;
                                          </h1>
                                          <h1 className="display-4 text-light">
                                                 Error 404 Not Found
                                          </h1>
                                          <br />
                                          <br />
                                          <p className="pt-3">
                                                 <Link href="/">
                                                        <a
                                                               className="btn btn-primary btn js-scroll px-4"
                                                               style={{
                                                                      textDecoration:
                                                                             "none",
                                                               }}
                                                        >
                                                               Go To Home
                                                        </a>
                                                 </Link>
                                          </p>
                                   </div>
                                   <br />
                            </div>
                     </div>
              </Layout>
       );
}
