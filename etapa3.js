let autos = require("./autos"); 

let concesionaria = {
autos: autos,

autos: autos,

buscarAuto: function (patente){
    let autoEncontrado = this.autos;
  for ( let i = 0; i < autoEncontrado.length; i++){
     if ( autoEncontrado[i].patente === patente){
        /* console.log(autos[i]); */
        return autoEncontrado[i];
     }else {
        return null;
      }
   }
 },

 venderAuto: function(patente){
 let autoVenta = this.buscarAuto(patente);
 autoVenta.vendido = true;
 },
autosParaLaVenta: function(){
return autos = this.autos.filter(function (elemento){
      return !elemento.vendido
   })
},
autosNuevos: function (){
for ( let i = 0; i <= autos.length; i++){
     if ( autos[i].km <= 100 ){
        return autos[i] <=100;
     }
}
}
}
/* console.log(concesionaria.autos); */
console.log(concesionaria.buscarAuto("APL123"));
console.log(concesionaria.venderAuto("APL123"));
/* console.log(concesionaria.autosParaLaVenta);
console.log(concesionaria.autosNuevos); */