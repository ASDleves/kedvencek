import  Termek  from "./termek.js"
import { ADAT } from "./adat.js";
class Termekek{
    constructor() {
        const szuloElem = $("article");

        for (let index = 0; index < ADAT.length; index++) {
            const termek = new Termek(szuloElem, ADAT[index])
          
        }
        
}



}
export default Termekek