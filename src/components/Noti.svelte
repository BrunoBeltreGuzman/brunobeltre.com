<script>
       import {
              toasts,
              ToastContainer,
              FlatToast,
              BootstrapToast,
       } from "svelte-toasts";

       const notis = [
              { noti: "Hey 👋, Welcome!" },
              { noti: "👀" },
              { noti: "..." },
              { noti: "look for the secret 🤓" },
              { noti: "Click on my photo to see my contact information 🤙" },
              { noti: "👀" },
              { noti: "..." },
              { noti: "Follow me online 😎" },
              { noti: "See my projects on Github 🌐" },
       ];

       function showToast(text) {
              return toasts.add({
                     description: text,
                     title: "",
                     placement: "bottom-right",
                     type: "",
                     theme: "dark",
                     placement: "bottom-right",
                     type: "",
                     duration: 2500,
                     remove: () => {
                            /* implementation */
                     },
                     update: () => {
                            /* implementation */
                     },
                     onClick: () => {
                            console.log("Toast clicked");
                     },
                     onRemove: () => {
                            console.log("Toast removed");
                     },
                     // and whatever properties that you want to add when calling toasts.add(options)
              });
       }

       let TIME = 8000;

       let index = 0;

       function playSong() {
              const audio = new Audio("audio/song2.mp3");
              audio.play();
       }

       setInterval(() => {
              showToast(notis[index].noti);
              if (index == 4 || index == 7) {
                     playSong();
                     navigator.vibrate(200);
              }
              index++;
              if (index >= notis.length) index = 0;
       }, TIME);
</script>

<ToastContainer placement="bottom-right" let:data>
       <FlatToast {data} />
</ToastContainer>
