const FastBreakTruck = require('./FastBreakTruck');
const eyeDes = require('./FastBreakTruck/Desayuno');


/**
 * Desayuno Eyeholes
*/

FastBreakTruck.prepararEyeHoles();
console.log("No abras la caja de Eyeholes!");
eyeDes.mostrarItem();
console.log("Precio pedido: " + eyeDes.getCoste());

// /**
//  * Desayuno Smiggles
//  */

// FastBreakTruck.prepararSmiggles();
// console.log("Smiggles per als nins!");
// smigDes.mostrarItems();
// console.log("Precio pedido: " + smigDes.getCoste());

// /**
//  * Plumbus
//  */

// FastBreakTruck.prepararEyeHoles();
// FastBreakTruck.incluirJuguete(eyeDes);
// console.log("Eyeholes con plumbus!");
// eyeDes.mostrarItems();
// console.log("Precio pedido: " + eyeDes.getCoste());
