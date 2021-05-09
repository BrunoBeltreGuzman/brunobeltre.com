import light from "../../styles/light.module.css";
import dark from "../../styles/dark.module.css";

export default function getTheme() {
       let theme = light;
       const locaTheme = localStorage.getItem("theme");
       console.log(locaTheme);
       switch (locaTheme) {
              case "light":
                     theme = light;
                     break;
              case "dark":
                     theme = dark;
                     break;
              default:
                     localStorage.setItem("theme", "dark");
                     theme = dark;
                     break;
       }
       return theme;
}

function setScroll(theme) {
       switch (theme) {
              case "light":
                     var styleElement = document.createElement("style");
                     styleElement.appendChild(
                            document.createTextNode(
                                   "div ::-webkit-scrollbar {-webkit-appearance: none;width: 7px;}div ::-webkit-scrollbar-thumb {border-radius: 4px;background-color: rgba(250,0,0,.5);-webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);}"
                            )
                     );
                     var styleElement = document.createElement("style");
                     styleElement.appendChild(
                            document.createTextNode(
                                   "div ::-webkit-scrollbar {-webkit-appearance: none;width: 7px;}div ::-webkit-scrollbar-thumb {border-radius: 4px;background-color: rgba(250,0,0,.5);-webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);}"
                            )
                     );
                     document
                            .getElementsByTagName("head")[0]
                            .appendChild(styleElement);
                     break;

              case "dark":
                     var ss = document.styleSheets[0];
                     ss.insertRule(
                            "::-webkit-scrollbar {background-color: red}",
                            0
                     );
                     break;

              default:
                     var ss = document.styleSheets[0];
                     ss.insertRule(
                            "::-webkit-scrollbar {background-color: red}",
                            0
                     );
                     break;
       }
}
