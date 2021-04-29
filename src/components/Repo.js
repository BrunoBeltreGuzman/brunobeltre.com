import React from "react";

export default function Repo(props) {
       console.log(props.limit);
       return (
              <div>
                     {props.items
                            .slice(0, props.limit)
                            .map(function (repo, index) {
                                   return (
                                          <div
                                                 key={index}
                                                 className="text-light"
                                          >
                                                 <div className="">
                                                        <div className="card repo p-3 ">
                                                               <h5>
                                                                      {
                                                                             repo.full_name
                                                                      }
                                                               </h5>
                                                               <p className="text-description">
                                                                      {
                                                                             repo.description
                                                                      }
                                                               </p>
                                                               <div className="row">
                                                                      <span className="col-md-3">
                                                                             <i className="fas fa-code"></i>{" "}
                                                                             {
                                                                                    repo.language
                                                                             }
                                                                      </span>
                                                                      <span className="col-md-2">
                                                                             <i className="far fa-star"></i>{" "}
                                                                             {
                                                                                    repo.stargazers_count
                                                                             }
                                                                      </span>
                                                                      <span className="col-md-2">
                                                                             <i className="fas fa-code-branch"></i>{" "}
                                                                             {
                                                                                    repo.default_branch
                                                                             }
                                                                      </span>
                                                                      <span className="col-md-2 ">
                                                                             <a
                                                                                    href={
                                                                                           repo.html_url
                                                                                    }
                                                                                    target="_blank"
                                                                                    className=""
                                                                             >
                                                                                    GitHub{" "}
                                                                                    <i className="far fa-external-link-alt"></i>
                                                                             </a>
                                                                      </span>
                                                               </div>
                                                        </div>
                                                        <br />
                                                 </div>
                                          </div>
                                   );
                            })}
              </div>
       );
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
