import React, { useState, useEffect } from "react";
import Repo from "./Repo";

export default function Repos(props) {
       const [error, setError] = useState(null);
       const [isLoaded, setIsLoaded] = useState(false);
       const [items, setItems] = useState([]);

       useEffect(() => {
              fetch("https://api.github.com/users/BrunoBeltreGuzman/repos")
                     .then((res) => res.json())
                     .then(
                            (result) => {
                                   setIsLoaded(true);
                                   setItems(result);
                            },
                            (error) => {
                                   setIsLoaded(true);
                                   setError(error);
                            }
                     );
       }, []);

       if (error) {
              return <div>Error: {error.message}</div>;
       } else if (!isLoaded) {
              return <div>Loading...</div>;
       } else {
              return (
                     <div>
                            <Repo items={items} limit={props.limit}></Repo>
                     </div>
              );
       }
}

/*
              return (
                     <ul>
                            {items.map(function (repo, index) {
                                   return (
                                          <div key={index}>
                                                 <li>{index}</li>
                                          </div>
                                   );
                            })}
                     </ul>
              );
*/
function Repositories2() {
       return (
              <div>
                     <section id="rep" className="blog-mf sect-pt4 route">
                            <div className="container">
                                   <div className="row">
                                          <div className="col-sm-12">
                                                 <div className="title-box text-center">
                                                        <div className="title-box-2">
                                                               <h5 className="title-left">
                                                                      Repositories
                                                               </h5>
                                                        </div>
                                                        <p className="subtitle-a">
                                                               Lorem ipsum dolor
                                                               sit amet
                                                               consectetur
                                                               adipisicing elit.
                                                               Quaerat expedita,
                                                               voluptatum
                                                               ducimus minima
                                                               quia deleniti,
                                                               vero non aperiam
                                                               quasi, unde ea.
                                                               Neque hic numquam
                                                               laudantium nihil
                                                               delectus,
                                                               corporis nesciunt
                                                               dolor?
                                                        </p>
                                                        <h4>
                                                               <span>
                                                                      <a
                                                                             href="#"
                                                                             className="btn btnGitHub btn-sm"
                                                                      >
                                                                             GitHub
                                                                             Repositories&nbsp;
                                                                             <i className="fas fa-external-link-alt"></i>
                                                                      </a>
                                                               </span>{" "}
                                                        </h4>
                                                        <div>
                                                               <div className="seccionComent-1">
                                                                      <table className="table table-hover">
                                                                             <tbody>
                                                                                    <tr>
                                                                                           <td>
                                                                                                  <div className="box-shadow-full text-left">
                                                                                                         <h3>
                                                                                                                Api
                                                                                                                Rest
                                                                                                                NodeJS
                                                                                                                MySQL
                                                                                                         </h3>
                                                                                                         <p>
                                                                                                                Lorem
                                                                                                         </p>
                                                                                                         <div>
                                                                                                                <span>
                                                                                                                       <a
                                                                                                                              href="#"
                                                                                                                              className="btn btnGitHub btn-sm gitItem"
                                                                                                                       >
                                                                                                                              <li className="">
                                                                                                                                     JavaScript
                                                                                                                              </li>
                                                                                                                       </a>
                                                                                                                </span>
                                                                                                                <span>
                                                                                                                       <a
                                                                                                                              href="#"
                                                                                                                              className="btn btnGitHub btn-sm gitItem"
                                                                                                                       >
                                                                                                                              GitHub&nbsp;
                                                                                                                              <i className="fas fa-external-link-alt"></i>
                                                                                                                       </a>
                                                                                                                </span>
                                                                                                         </div>
                                                                                                  </div>
                                                                                           </td>
                                                                                    </tr>
                                                                             </tbody>
                                                                      </table>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </section>
              </div>
       );
}
