class Termek {
  constructor(szuloElem, adat) {
    szuloElem.append(`<div id="kocka" class="negyzet"></div>`);

    this.divElem = $("article div:last-child");

    this.nevePElem = $("<p>").appendTo(this.divElem);
    this.fajtajaPElem = $("<p>").appendTo(this.divElem);
    this.gombElem = $("<button>").text("Kedvencekbe helyez").appendTo(this.divElem);
    this.TorolElem = $("<button>").text("Törlés").appendTo(this.divElem);
    this.adat = adat;

    this.update();

    let kattint = 0;
    this.gombElem.on("click", () => {
      if (kattint === 0) {
        this.divElem.css("background-color", "orange");
        this.esemenyTrigger()
        kattint += 1;
      } else {
        this.divElem.css("background-color", "white");
        kattint = 0;
        this.esemenyTriggertorol()}

    });
    this.TorolElem.on("click", () => {
      this.esemenyTriggertorol2()
    })
  }
  
  update() {
    this.nevePElem.text(this.adat.neve);
    this.fajtajaPElem.text(this.adat.fajtaja);
  }
  esemenyTrigger(){
    const KEDVENC = new CustomEvent("kedvencekhez", {detail:this.adat});
    window.dispatchEvent(KEDVENC)
  }
  
  esemenyTriggertorol() {
    const indexToRemove = this.divElem.attr("id");
    const TOROL = new CustomEvent("TORLES", { detail: indexToRemove });
    window.dispatchEvent(TOROL);
  }
  esemenyTriggertorol2(){
    const esemeny = new CustomEvent("torol", {
      detail: this.elem
    })
    window.dispatchEvent(esemeny)
  }
  
}

export default Termek;