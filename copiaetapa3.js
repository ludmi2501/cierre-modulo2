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
autosNuevos: function (){
    let autosN = this.autosParaLaVenta();
    let autosX = autosN.filter( function (auto1){
        return auto1.km <= 100;
    })
    return autosX;
},
listaDeVentas: function(){
   let lista = this.autos.filter ( auto =>{
      return auto.vendido === true;
   });
   let listaDeVentas = lista.map( item =>{
      return item.precio;
   })
      
   return listaDeVentas;
   
},
totalDeVentas: function(){
   let ventas = this.listaDeVentas();
   if(ventas.length > 0){
      let totalVentas = ventas.reduce((total, precios)=>{return total + precios})
      return totalVentas;
   }
   else { return 0}
},
puedeComprar: function(auto, personas){
   let capacidadPagoTotalCliente = personas.capacidadDePagoTotal;
   let capacidadPagoCuotasCliente = personas.capacidadDePagoEnCuotas;
   let valorAuto = auto.precio;
   let valorCuotas = auto.precio / auto.cuotas;
   if((capacidadPagoTotalCliente >= valorAuto) && (capacidadPagoCuotasCliente >= valorCuotas)){
      return true;
   }
   else{
      return false;
   }
},
autosQuePuedeComprar: function(persona){
   let autosParaLaVenta = this.autosParaLaVenta();
   let autosQuePuedeComprar = autosParaLaVenta.filter((auto) => {
      if (this.puedeComprar(auto, persona)){
         return auto
      }
   })
   return autosQuePuedeComprar;
}
};


/* console.log(concesionaria.autos); */
/* console.log(concesionaria.buscarAuto("JJK116")); */
/* console.log(concesionaria.venderAuto("JJK116")); */
/* console.log(concesionaria.autosParaLaVenta()); */
/* console.log(concesionaria.autosNuevos());
console.log(concesionaria.listaDeVentas());
console.log(concesionaria.totalDeVentas()); */
