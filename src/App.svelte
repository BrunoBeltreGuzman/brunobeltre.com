<script>
       import ModalInfo from "./components/ModalInfo.svelte";
       import Noti from "./components/Noti.svelte";
       import Song from "./components/Song.svelte";
</script>

<div class="container col-md-7 mx-auto">
       <br />
       <br />

       <ModalInfo />
       <Song />

       <br />

       <p class="text-about">
              I'm Bruno Beltre, a software developer who enjoys learning new
              programming technologies and sharing collaborative projects on <b
                     ><a href="https://github.com/BrunoBeltreGuzman">GitHub</a
                     ></b
              >. My favorite technologies right now are: React, React Native,
              Svelte, JavaScript/TypeScript, Java, Go, Python, PHP, MySQL, and
              MongoDB.
       </p>

       <hr class="mt-4 mb-4" />

       <h5 class="">Follow Me Online Here:</h5>
       <div class="row">
              <div class="col">
                     <b>
                            <a
                                   href="https://github.com/BrunoBeltreGuzman"
                                   target="_blank"
                                   class="socials">GitHub</a
                            >
                            <a
                                   href="https://www.linkedin.com/in/brunoingenierodesoftware/"
                                   target="_blank"
                                   class="socials">LinkedIn</a
                            >
                            <a
                                   href="https://twitter.com/Bruno19149482"
                                   target="_blank"
                                   class="socials">Twitter</a
                            >
                     </b>
              </div>
              <div class="col" />
              <div class="col">
                     <img
                            src="../../img/65c84ff0161c0f951f99b035170afb1e.svg"
                            class="img-socials"
                            alt=""
                            srcset=""
                     />
              </div>
       </div>

       <br />
       <br />

       <hr class="mt-4 mb-4" />

       <!-- Footer -->
       <footer class="">
              <div class="">
                     <small class="d-block mb-2 text-muted"
                            >&copy; 2021 all copyrights reserved</small
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
                                          title="go to GitHub"
                                   /></a
                            >
                            <a
                                   href="https://www.linkedin.com/in/bruno-software-developer/"
                                   target="_blank"
                                   ><i
                                          class="fab fa-linkedin-in icono"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="bottom"
                                          title="go to LinkedIn"
                                   /></a
                            >
                            <a
                                   href="https://twitter.com/Bruno19149482"
                                   target="_blank"
                                   ><i
                                          class="fab fa-twitter icono"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="bottom"
                                          title="go to Twitter"
                                   /></a
                            >
                     </div>
              </div>
       </footer>

       <br />
       <br />

       <Noti />
</div>
