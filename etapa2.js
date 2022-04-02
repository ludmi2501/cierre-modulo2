let autos = require("./autos"); 

let concesionaria = {
   auto: autos,
   buscarAuto: function ppp (patentebuscada){
    for (let i = 0; i <= autos.length; i++) {
        switch(patentebuscada){
            case (autos[i].patente):
                return autos[i]
            case (autos[i+1].patente):
                return autos[i+1]
            default:
                return null;
        }
        }
        }
        };

        