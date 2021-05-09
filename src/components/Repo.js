import React from "react";

export default function Repo(props) {
       //console.log(props.limit);
       return (
              <div>
                     {props.items
                            .slice(0, props.limit)
                            .map(function (repo, index) {
                                   return (
                                          <div key={index}>
                                                 <div className="">
                                                        <div
                                                               className={
                                                                      "card repo p-3 " +
                                                                      props
                                                                             .theme
                                                                             .repo
                                                               }
                                                        >
                                                               <h5
                                                                      className={
                                                                             props
                                                                                    .theme
                                                                                    .util
                                                                      }
                                                               >
                                                                      {
                                                                             repo.full_name
                                                                      }
                                                               </h5>
                                                               <p
                                                                      className={
                                                                             "text-description " +
                                                                             props
                                                                                    .theme
                                                                                    .textDescription
                                                                      }
                                                               >
                                                                      {
                                                                             repo.description
                                                                      }
                                                               </p>
                                                               <div className="row">
                                                                      <span
                                                                             className={
                                                                                    "col-md-3 " +
                                                                                    props
                                                                                           .theme
                                                                                           .span
                                                                             }
                                                                      >
                                                                             <i className="fas fa-code"></i>{" "}
                                                                             {
                                                                                    repo.language
                                                                             }
                                                                      </span>
                                                                      <span
                                                                             className={
                                                                                    "col-md-2 " +
                                                                                    props
                                                                                           .theme
                                                                                           .span
                                                                             }
                                                                      >
                                                                             <i className="far fa-star"></i>{" "}
                                                                             {
                                                                                    repo.stargazers_count
                                                                             }
                                                                      </span>
                                                                      <span
                                                                             className={
                                                                                    "col-md-2 " +
                                                                                    props
                                                                                           .theme
                                                                                           .span
                                                                             }
                                                                      >
                                                                             <i className="fas fa-code-branch"></i>{" "}
                                                                             {
                                                                                    repo.default_branch
                                                                             }
                                                                      </span>
                                                                      <span
                                                                             className={
                                                                                    "col-md-2 " +
                                                                                    props
                                                                                           .theme
                                                                                           .span
                                                                             }
                                                                      >
                                                                             <a
                                                                                    href={
                                                                                           repo.html_url
                                                                                    }
                                                                                    target="_blank"
                                                                                    className={
                                                                                           props
                                                                                                  .theme
                                                                                                  .a
                                                                                    }
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
