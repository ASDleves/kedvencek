class Aszinkron{
    constructor(){}
        adatBeolvas(vegpont, callbackFv){
            fetch(vegpont, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => response.json())
            .then((data) => 
                callbackFv(data)
            )
            .catch((error) => console.log(error))
        }
        adatTorol(vegpont, id){
            vegpont= vegpont+"/"+id
            fetch(vegpont, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => response.json())
            .then((data) => {})
        
            .catch((error) => console.log(error))
        }
    }   

export default Aszinkron