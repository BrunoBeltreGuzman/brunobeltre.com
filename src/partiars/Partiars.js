import React from "react";
import Head from "next/head";

export default function Partiars(props) {
       return (
              <Head>
                     <meta
                            name="Bobo"
                            description="Lorem, ipsum dolor sit amet consectetur
                                   adipisicing elit. Adipisci, consequatur ex
                                   expedita quidem eaque sed. Sit eum officia
                                   repudiandae? Animi eaque laboriosam excepturi
                                   nobis, mollitia obcaecati magni similique
                                   facere modi."
                     />
                     <link rel="icon" href="/img/favicon.png" />
                     <title>{props.title} | Bruno Beltre</title>
                     <link
                            rel="shortcut icon"
                            href="img/favicon.ico"
                            type="image/x-icon"
                     />

                     <link
                            rel="stylesheet"
                            href="/lib/fontawesome5/css/all.min.css"
                     />

                     {/* <!-- Bootstrap 5 -->*/}
                     <link
                            rel="stylesheet"
                            href="/lib/bootstrap5/css/bootstrap.min.css"
                     />

                     {/*<!-- Css -->*/}
                     <link rel="stylesheet" href="/css/style.css" />
              </Head>
       );
}
