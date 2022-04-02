let autos = require("./autos"); 

const concesionaria = {
    /* completar */
   autos: autos,
   buscarAuto: autos.filter(function(patente){
       return patente == this.patente;
   })
};
console.log (concesionaria.buscarAuto);
