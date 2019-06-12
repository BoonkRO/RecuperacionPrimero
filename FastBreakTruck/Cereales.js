const Smiggles = require('./Smiggles');
const Eyeholes = require('./Eyeholes');
const Caja = require('./Caja');

let datosEyeHoles = Eyeholes.newEyeHole().get();
let datosSmiggles = Smiggles.newSmiggle().get();

function cereal() {
    if (datosEyeHoles == "") {
        let arrayEyeHoles = []
        arrayEyeHoles.push("nombre", datosEyeHoles.nombre);
        arrayEyeHoles.push("pvp", datosEyeHoles.pvp);
        return {
            get: function () {
                return arrayEyeHoles;
            }
        }
    } else {
        let arraySmiggles = [];
        arraySmiggles.push(datosSmiggles.nombre);
        arraySmiggles.push(datosSmiggles.pvp);
        return {
            get: function () {
                return arraySmiggles;
            }
        }
    }
}


function empaquetado() {
    return {
        get: function(){
            return Caja.caja().get();
        }
    }
}


module.exports = {
    empaquetado: empaquetado,
    cereal: cereal
}