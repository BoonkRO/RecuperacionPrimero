const prepareEyeHoles = require('./FastBreakTruck');


function newEyeHole(){
    const prototipo = new Eyeholes();
    return {
        get: function(){
            return prototipo;
        }
    }
}


function Eyeholes() {
    this.nombre = "Eyeholes",
    this.pvp = 25
}

module.exports = { newEyeHole: newEyeHole };