const Packing = require('./Packing.js');

function tubo(){
    return {
        get: function(){
            return Packing.envoltorio("Tubo");
        }
    }
}

module.exports = { 
    tubo: tubo
 }