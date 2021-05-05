import EN from "../../translate/en/global.json";
import ES from "../../translate/es/global.json";

export default function getLng() {
       let lng = ES;
       const localLng = localStorage.getItem("lng");
       //console.log(localLng);
       switch (localLng) {
              case "ES":
                     lng = ES;
                     break;
              case "EN":
                     lng = EN;
                     break;
              default:
                     localStorage.setItem("lng", "EN");
                     lng = EN;
                     break;
       }
       return lng;
}
