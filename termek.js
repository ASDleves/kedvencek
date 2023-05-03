class Termek{
    constructor(szuloElem, adat) {
        szuloElem.append(`<div class="negyzet"></div>`);
    
        this.divElem = $("article div:last-child");
    
        this.pElem = $("<p>").appendTo(this.divElem);
        this.gombElem = $("<button>").text("Kedvencekbe helyez").appendTo(this.divElem);
        this.adat = adat;
    
        this.update();
    
        let kattint = 0;
        this.gombElem.on("click", () => {
          if (kattint === 0) {
            this.divElem.css("background-color", "orange");
            kattint += 1;
          } else {
            this.divElem.css("background-color", "white");
            kattint = 0;
          }
        });
      }
    
      update() {
        this.pElem.text(`${this.adat.neve}, ${this.adat.fajtaja}, ${this.adat.kora} éves`);
      }
    }
    
    export default Termek;