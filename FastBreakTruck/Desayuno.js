const item = require('./Item');

let datosItem = item.nombreNuevoItem().get();

function mostrarItem(){
    console.log("Item: " + datosItem["nombre"]);
}

function getCoste(){

}



module.exports = {
    mostrarItem: mostrarItem
}