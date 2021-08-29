<script>
       import { Link } from "svelte-routing";

       localStorage.setItem("lastPage", "/");

       let i1 = 5;
       let i2 = 10;

       function clickBtnDiscord() {
              if (i1 == 5) {
                     const song = new Audio("audio/song1.mp3");
                     song.play();
                     i1 = 0;
              } else {
                     i1++;
              }
       }

       function mouseoverBtnDiscord() {
              if (i2 == 10) {
                     const song = new Audio("audio/song2.mp3");
                     song.play();
                     i2 = 0;
              } else {
                     i2++;
              }
       }
</script>

<main>
       <!-- Container -->
       <div class="container mx-auto">
              <br />
              <br />
              <br />

              <div class="text-center">
                     <div class="p-0">
                            <img src="img/pp.jpeg" alt="" class="myphoto" />
                            <br />
                            <br />
                            <h1 class="display-5">Bruno Beltre Guzman</h1>
                            <h4>greet("Hello World!! 👋");</h4>
                            <br />
                            <div class="row justify-content-md-center">
                                   <div class="col col-lg-8">
                                          <p class="text-about-1">
                                                 I am a student of Computer
                                                 Systems Engineering, I have
                                                 experience in the development
                                                 and design of information
                                                 systems.
                                          </p>
                                   </div>
                            </div>
                            <br />
                            <div class="row justify-content-md-center">
                                   <div class="col col-lg-3">
                                          <Link
                                                 to="/chat"
                                                 class="btn btn-lg btn-secondary-2 btn-not-link"
                                          >
                                                 <i
                                                        class="fab fa-facebook-messenger"
                                                 />&nbsp;Sent Message
                                          </Link>
                                          <br />
                                          <br />
                                   </div>
                                   <div class="col col-lg-3">
                                          <Link
                                                 to="/home"
                                                 class="btn btn-lg btn-primary-2 btn-not-link"
                                          >
                                                 More information
                                          </Link>

                                          <br />
                                          <br />
                                   </div>
                            </div>
                            <br />
                            <br />
                     </div>
              </div>

              <br />
              <br />
              <br />
       </div>

       <!-- Footer -->
       <footer class="container-fluid pt-5">
              <div class="row">
                     <div class="col-6 col-md" />

                     <div class="col-12 col-md">
                            <h5>Bruno Beltre Guzman</h5>
                            <small class="d-block mb-2 text-muted"
                                   >&copy; 2021-2021</small
                            >
                            <div class="text-white">
                                   <a
                                          href="https://github.com/BrunoBeltreGuzman"
                                          target="_blank"
                                   >
                                          <i
                                                 class="fab fa-github icono"
                                                 data-bs-toggle="tooltip"
                                                 data-bs-placement="bottom"
                                                 title="Go to GitHub"
                                          /></a
                                   >
                                   <a
                                          href="https://www.linkedin.com/in/brunobeltrguzmanprogramador/"
                                          target="_blank"
                                          ><i
                                                 class="fab fa-linkedin-in icono"
                                                 data-bs-toggle="tooltip"
                                                 data-bs-placement="bottom"
                                                 title="Go to LinkedIn"
                                          /></a
                                   >
                                   <a
                                          href="https://twitter.com/Bruno19149482"
                                          target="_blank"
                                          ><i
                                                 class="fab fa-twitter icono"
                                                 data-bs-toggle="tooltip"
                                                 data-bs-placement="bottom"
                                                 title="Go to Twitter"
                                          /></a
                                   >
                            </div>
                            <br />
                            <br />

                            <div>
                                   <small class="d-block text-white"
                                          >Inspired by Discord</small
                                   >
                                   <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                                   <button
                                          on:click={clickBtnDiscord}
                                          on:mouseover={mouseoverBtnDiscord}
                                          class="btn-none"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="bottom"
                                          title="Click here to interact"
                                          ><img
                                                 src="img/discord.png"
                                                 alt=""
                                                 class="discord"
                                          /></button
                                   >
                                   <br />
                                   <br />
                            </div>
                     </div>

                     <div class="col-6 col-md">
                            <h6>Information</h6>
                            <ul class="list-unstyled text-small">
                                   <li>
                                          <Link to="/home" class="text-muted">
                                                 More information
                                          </Link>
                                   </li>
                                   <li>
                                          <Link to="chat" class="text-muted">
                                                 Contact
                                          </Link>
                                   </li>
                            </ul>
                     </div>
                     <div class="col-6 col-md">
                            <h6>About</h6>
                            <ul class="list-unstyled text-small">
                                   <li>
                                          <Link class="text-muted">Team</Link>
                                   </li>
                                   <li>
                                          <Link class="text-muted">
                                                 License
                                          </Link>
                                   </li>
                            </ul>
                     </div>
              </div>

              <br />
       </footer>
</main>
