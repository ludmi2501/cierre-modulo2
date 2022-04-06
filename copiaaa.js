let autos = require("./autos"); 

let concesionaria = {
autos: autos,

autos: autos,

buscarAuto: function buscarAuto(patente){
    for (let i = 0; i<=autos.length; i++){
       switch (patente){
           case (autos[i].patente):
              return autos[i];
           case (autos[i+1].patente):
              return autos[i+1]
       default:
        return null;
      }
   }
 },

 venderAuto: function(patente){
 let autoVenta = this.buscarAuto(patente);
 autoVenta.vendido = true;
 return autoVenta;
 },
autosParaLaVenta: function(){
return autos = this.autos.filter(function (elemento){
      return !elemento.vendido
   })
},
autosNuevos: function(){
    let autosNuevos = this.autosParaLaVenta().filter(auto => {
        return auto.km < 100 ;
    })
    return autosNuevos;
}

}