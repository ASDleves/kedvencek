import Termek from "./termek.js";
//import { ADAT } from "./adat.js";
import Aszinkron from "./Aszinkron.js";
class Termekek {
  #kedvencekLista = [];
  constructor() {
    const aszinkron = new Aszinkron();
    let vegpont =  "http://localhost:3000/ADATOK";
    aszinkron.adatBeolvas(vegpont, this.megjelenit);

    $(window).on("kedvencekhez", () => {
      this.#kedvencekLista.push(event.detail);
      console.log(this.#kedvencekLista);
    });
    window.addEventListener('TORLES', (event) => {
        const indexToRemove = event.detail;
        this.#kedvencekLista.splice(indexToRemove, 1);
        console.log(this.#kedvencekLista);
      });
      $(window).on("torol", (event) =>{
        console.log("torol", event.detail.id);
        aszinkron.adatTorol(vegpont,event.detail.id)
      });

  }
 
  megjelenit(adat) {
    const szuloElem = $("article");

    let termeklista = adat;
    for (let index = 0; index < termeklista.length; index++) {
      const termek = new Termek(szuloElem, termeklista[index]);
      const divElements = document.querySelectorAll(".negyzet");
      const divElement = divElements[index];
      divElement.setAttribute("id", `${index}`);
    }
  }
}

export default Termekek;
