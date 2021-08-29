const btnDiscord = document.getElementById("btn-discord");

let i1 = 5;
let i2 = 10;

btnDiscord.addEventListener("click", function () {
      if (i1 == 5) {
            const song = new Audio("public/audio/song1.mp3");
            song.play();
            i1 = 0;
      } else {
            i1++;
      }
});

btnDiscord.addEventListener("mouseover", function () {
      if (i2 == 10) {
            const song = new Audio("public/audio/song2.mp3");
            song.play();
            i2 = 0;
      } else {
            i2++;
      }
});

//Nav
document.addEventListener("DOMContentLoaded", function (event) {
      const showNavbar = (toggleId, navId, bodyId, headerId) => {
            const toggle = document.getElementById(toggleId),
                  nav = document.getElementById(navId),
                  bodypd = document.getElementById(bodyId),
                  headerpd = document.getElementById(headerId);

            // Validate that all variables exist
            if (toggle && nav && bodypd && headerpd) {
                  toggle.addEventListener("click", () => {
                        // show navbar
                        nav.classList.toggle("show");
                        // change icon
                        toggle.classList.toggle("bx-x");
                        // add padding to body
                        bodypd.classList.toggle("body-pd");
                        // add padding to header
                        headerpd.classList.toggle("body-pd");
                  });
            }
      };

      showNavbar("header-toggle", "nav-bar", "body-pd", "header");

      /*===== LINK ACTIVE =====*/
      const linkColor = document.querySelectorAll(".nav_link");

      function colorLink() {
            if (linkColor) {
                  linkColor.forEach((l) => l.classList.remove("active"));
                  this.classList.add("active");
            }
      }
      linkColor.forEach((l) => l.addEventListener("click", colorLink));

      // Your code to run since DOM is loaded and ready
});
