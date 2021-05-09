import React, { useState, useEffect } from "react";
import Layout from "../src/partiars//Layout";
import Link from "next/link";

import EN from "../translate/en/global.json";
import ES from "../translate/es/global.json";
import getLng from "../src/util/useLng";

import light from "../styles/light.module.css";
import dark from "../styles/dark.module.css";
import getTheme from "../src/util/useTheme";

export default function custom404() {
       const [lng, setLng] = useState(EN);
       const [theme, setTheme] = useState(dark);
       useEffect(() => {
              setLng(getLng());
              setTheme(getTheme());
       }, []);

       return (
              <Layout nav={false} title={"Error 404"} lng={lng} theme={theme}>
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
