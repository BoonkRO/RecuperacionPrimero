function newTurbulentJuice(){
    const prototipo = new TurbulentJuice();
    return {
        get: function(){
            return prototipo;
        }
    }
}


function TurbulentJuice() {
    this.nombre = "Turbulent juuuuice",
    this.pvp = 30
}

module.exports = { newTurbulentJuice: newTurbulentJuice };