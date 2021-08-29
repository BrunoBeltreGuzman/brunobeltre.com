<script>
       import Nav from "../components/Nav.svelte";
       import Footer from "../components/Footer.svelte";
       import Repo from "../components/Repo.svelte";

       import { Link } from "svelte-routing";
       const lastPage = localStorage.getItem("lastPage");

       localStorage.setItem("lastPage", "/repos");

       import { onMount } from "svelte";

       //vars
       let data, loading, error;
       let data2, loading2, error2;

       onMount(async () => {
              try {
                     loading = true;
                     const response = await fetch(
                            "https://api.github.com/users/BrunoBeltreGuzman/repos"
                     );
                     const json = await response.json();
                     console.log(json);
                     data = json;
                     loading = false;
              } catch (err) {
                     console.log(err);
                     loading = false;
                     error = err;
              }

              try {
                     loading2 = true;
                     const response2 = await fetch(
                            "https://api.github.com/users/BrunoBeltreGuzman"
                     );
                     const json2 = await response2.json();
                     console.log(json2);
                     data2 = json2;
                     loading2 = false;
              } catch (err) {
                     console.log(err);
                     loading2 = false;
                     error2 = err;
              }
       });
</script>

<main>
       <Nav isNav={true} {lastPage} isBack={true} isContat={false} />
       <br />
       <br />
       <br />

       <div class="container col-md-7 mx-auto">
              <br />
              <br />
              <div class="">
                     <div class="">
                            <div />
                            {#if data2}
                                   <!-- content here -->
                                   <img
                                          src={data2.avatar_url
                                                 ? data2.avatar_url
                                                 : "img/pp.jpeg"}
                                          alt=""
                                          class="myphoto"
                                   />
                                   <br />
                                   <h1 class="display-5">
                                          {data2.name ? data2.name : "Bruno"}
                                   </h1>
                                   <h4 class="text-muted">
                                          {data2.login
                                                 ? data2.login
                                                 : "BrunoBeltreGuzman"}
                                   </h4>
                                   <div>
                                          <p class="text-white">
                                                 <i class="fas fa-users" />
                                                 {data2.followers
                                                        ? data2.followers
                                                        : "10"} followers &nbsp;&nbsp;<i
                                                        class="fas fa-thumbs-up"
                                                 />
                                                 {data2.following
                                                        ? data2.following
                                                        : "15"} following &nbsp;&nbsp;<i
                                                        class="fas fa-star"
                                                 />
                                                 {data2.public_repos
                                                        ? data2.public_repos
                                                        : "64"}
                                          </p>
                                          <a
                                                 href={data2.html_url
                                                        ? data2.html_url
                                                        : "https://github.com/BrunoBeltreGuzman"}
                                                 target="_blank"
                                                 class="socials text-right"
                                                 >GitHub <i
                                                        class="fas fa-external-link-alt"
                                                 /></a
                                          >
                                   </div>
                                   <br />
                            {/if}
                     </div>
                     <div>
                            <h5>
                                   <i class="fab fa-github" /> GitHub Repositories:
                            </h5>
                            <hr class="text-white" />
                            {#if loading == true}
                                   <div>
                                          <div class="card repo">
                                                 <p class="text-repo">
                                                        Loading...
                                                 </p>
                                          </div>
                                   </div>
                                   <br />
                            {/if}
                            {#if data}
                                   {#each data as repo}
                                          <Repo {repo} />
                                   {/each}
                            {/if}

                            <br />
                     </div>

                     <br />
              </div>
       </div>

       <!-- Footer -->
       <Footer />
</main>
