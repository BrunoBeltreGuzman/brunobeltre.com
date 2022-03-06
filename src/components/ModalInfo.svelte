<script>
       function playSong() {
              const audio = new Audio("audio/song2.mp3");
              audio.play();
       }
</script>

<!-- Button Username -->
<img
       src="img/pp.jpeg"
       alt=""
       class="photo"
       data-bs-toggle="modal"
       data-bs-target="#exampleLogin"
       on:click={playSong}
/>
<br />

<!-- Modal -->
<div
       class="modal fade"
       id="exampleLogin"
       tabindex="-1"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true"
>
       <div
              class="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable"
       >
              <div class="modal-content">
                     <div class="modal-body">
                            <button
                                   type="button"
                                   class="btn-none btn-myclose"
                                   data-bs-dismiss="modal"
                                   aria-label="Close"
                                   ><i class="fas fa-times" /></button
                            >
                            <br />
                            <h5 class="text-center p-0 m-0">
                                   <i class="fas fa-user-shield" /> Contact information
                            </h5>
                            <p class="text-muted text-center">
                                   You can contact me whenever you want!! 😉
                            </p>
                            <br />

                            <div class="preview">
                                   <p class="message">
                                          Hey!! 👋<br />
                                          This is my Contact Information:
                                          <br />
                                          <a
                                                 href="mailto:brunobeltrguzman@gmail.com"
                                                 ><b
                                                        >brunobeltrguzman@gmail.com</b
                                                 ></a
                                          >
                                          <br />
                                          <a href="tel:8094941462"
                                                 ><b>809-494-1462</b></a
                                          >
                                   </p>
                            </div>
                            <br />
                            <div class="preview">
                                   <p class="message">
                                          You can also read this QR code with my
                                          Contact Information.<br />
                                          <img
                                                 src="img/qr_preview.png"
                                                 class="qr_preview"
                                                 alt=""
                                          />
                                   </p>
                            </div>
                            <br />
                            <div class="preview">
                                   <p class="message">
                                          Or download my file contact<br />

                                          <a
                                                 href="Bruno Beltre Guzman.vcf"
                                                 download
                                                 >Bruno Beltre Guzman.vcf</a
                                          >
                                   </p>
                            </div>
                            <br />
                     </div>
              </div>
       </div>
</div>
