<script>
       import Nav from "../components/Nav.svelte";
       import { Link } from "svelte-routing";
       const lastPage = localStorage.getItem("lastPage");

       localStorage.setItem("lastPage", "/chat");
</script>

<main>
       <Nav isNav={true} {lastPage} isBack={true} isContat={false} />

       <div class="container col-md-7 mx-auto chat" style="">
              <br />
              <div class="horaPost-2 text-white p-0 m-0">hoy a las 4:20 pm</div>
              <hr class="text-white  p-0 m-0 mt-1" />
              <br />

              <div
                     class="alert alert-info alert-dismissible fade show"
                     role="alert"
              >
                     <strong><i class="fas fa-eye" /> This is a demo</strong>
                     This module of this project is under construction.
                     <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                     />
              </div>

              <div class="preview">
                     <img src="img/pp.jpeg" alt="Avatar" class="avatar-chat" />
                     <div class="content-message">
                            <div class="user-4">brunodev</div>
                            <div class="horaPost-2">hoy a las 4:30 pm</div>
                            <p class="message">
                                   Hey!! 👋<br />
                                   Esta es mi Información de Contacto: <br />
                                   <b>brunobeltrguzman@gmail.com</b> <br />
                                   <b>809-494-1462</b> <br />
                                   Puedes contactarme cuando quieras!! 😉
                            </p>
                     </div>
              </div>

              <div class="preview">
                     <img src="img/pp.jpeg" alt="Avatar" class="avatar-chat" />
                     <div class="content-message">
                            <div class="user-4">brunodev</div>
                            <div class="horaPost-2">hoy a las 4:30 pm</div>
                            <p class="message">
                                   También puede leer este código QR con mi
                                   Información de Contacto <br />
                                   <img
                                          src="img/qr_preview.png"
                                          class="qr_preview"
                                          alt=""
                                   />
                            </p>
                     </div>
              </div>

              <div class="preview">
                     <img src="img/pp.jpeg" alt="Avatar" class="avatar-chat" />
                     <div class="content-message">
                            <div class="user-4">brunodev</div>
                            <div class="horaPost-2">hoy a las 4:30 pm</div>
                            <p class="message">O escribe un mensaje aquí! 😏</p>
                     </div>
              </div>

              <div class="preview">
                     <img src="img/pp.jpeg" alt="Avatar" class="avatar-chat" />
                     <div class="content-message">
                            <div class="user-4">brunodev</div>
                            <p class="message">Escribiendo...</p>
                     </div>
              </div>

              <div class="preview">
                     <div class="avatar-text">U</div>
                     <div class="content-message">
                            <div class="user-4">username</div>
                            <div class="horaPost-2">hoy a las 4:30 pm</div>
                            <p class="message">Hola Bruno!</p>
                     </div>
              </div>
       </div>

       <div class="fixed-bottom bg-chat p-3">
              <div class=" input-group-lg col-md-7 mx-auto">
                     <input
                            type="text"
                            class="form-chat"
                            id="chat"
                            placeholder="Send a message to #Bruno 🤟"
                            required="text"
                     />
              </div>
       </div>
       <br />
       <br />
</main>
