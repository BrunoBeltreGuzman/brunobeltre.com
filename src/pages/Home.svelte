<script>
       import Nav from "../components/Nav.svelte";
       import Footer from "../components/Footer.svelte";
       import Repo from "../components/Repo.svelte";
       import { Link } from "svelte-routing";

       import { onMount } from "svelte";

       //vars
       let data, loading, error;

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
       });
       localStorage.setItem("lastPage", "/home");
</script>

<main>
       <Nav isNav={false} isBack={false} isContat={false} />

       <div id="body">
              <div class="container">
                     <nav
                            class="navbar navbar-dark bg-dark text-white fixed-top "
                     >
                            <div class="container col-md-7 mx-auto">
                                   <ul class="nav">
                                          <li class="nav-item">
                                                 <Link
                                                        to="/chat"
                                                        class="nav-link a-secondary btn-secondary-2 item pl-4 pr-4"
                                                 >
                                                        <i
                                                               class="fab fa-facebook-messenger"
                                                        />&nbsp;Contact
                                                 </Link>
                                          </li>
                                   </ul>
                                   <Link to="/home#">
                                          <img
                                                 src="img/pp.jpeg"
                                                 alt="Avatar"
                                                 class="avatar"
                                          />
                                   </Link>
                            </div>
                     </nav>
              </div>

              <br />
              <br />
              <br />

              <div class="container col-md-7 mx-auto">
                     <br />
                     <br />
                     <br />
                     <div class="">
                            <div>
                                   <img
                                          src="img/pp.jpeg"
                                          alt=""
                                          class="myphoto"
                                   />
                                   <br />
                                   <br />
                                   <h1 class="display-5">
                                          Bruno Beltre Guzman
                                   </h1>
                                   <h4>greet("Hello World!! 👋");</h4>
                                   <br />
                                   <p class="text-about">
                                          I am a student of Computer Systems
                                          Engineering, I have experience in the
                                          development and design of information
                                          systems.
                                   </p>
                                   <br />
                            </div>

                            <br />

                            <div>
                                   <h5 class="">
                                          <i class="far fa-user-circle" /> Follow
                                          Me Online Here:
                                   </h5>
                                   <hr class="text-white" />
                                   <div class="row">
                                          <div class="col">
                                                 <a
                                                        href="https://github.com/BrunoBeltreGuzman"
                                                        target="_blank"
                                                        class="socials"
                                                        >GitHub</a
                                                 >
                                                 <a
                                                        href="https://github.com/BrunoBeltreGuzman"
                                                        target="_blank"
                                                        class="socials"
                                                        >Twitter</a
                                                 >
                                                 <a
                                                        href="https://github.com/BrunoBeltreGuzman"
                                                        target="_blank"
                                                        class="socials"
                                                        >LinkedIn</a
                                                 >
                                          </div>
                                          <div class="col" />
                                          <div class="col">
                                                 <img
                                                        src="../../img/65c84ff0161c0f951f99b035170afb1e.svg"
                                                        class="img-1"
                                                        alt=""
                                                        srcset=""
                                                 />
                                          </div>
                                   </div>
                            </div>

                            <br />

                            <br />

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
                                          {#each data.slice(0, 3) as repo}
                                                 <Repo {repo} />
                                          {/each}
                                   {/if}

                                   <p class="text-center">
                                          <Link
                                                 to="/repos"
                                                 class="text-center btn btn-primary-2 a-primary "
                                                 >View All Repositories</Link
                                          >
                                   </p>
                                   <br />

                                   <br />
                            </div>

                            <br />
                     </div>
              </div>
              <!-- Footer -->
              <Footer />
       </div>
</main>
