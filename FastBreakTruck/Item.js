const Cereales = require('./Cereales');

let datosCereales = Cereales.cereal().get();

function nombreNuevoItem(){
    var arrayItem = [];
    const newItem = new item();
    newItem.nombre = datosCereales["nombre"];
    newItem.empaquetado = Cereales.empaquetado().get();
    newItem.pvp = datosCereales["pvp"];
    arrayItem.push(newItem);
    return {
        get: function(){
            return arrayItem;
        }
    }
}

function item() {
    this.nombre = "",
    this.empaquetado = "",
    this.pvp = ""
}

module.exports = {
    nombreNuevoItem: nombreNuevoItem
}