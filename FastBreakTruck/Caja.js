const Packing = require('./Packing.js');

function caja(){
    return {
        get: function(){
            return Packing.envoltorio("Caja");
        }
    }
}

module.exports = { 
    caja: caja
 }