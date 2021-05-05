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
