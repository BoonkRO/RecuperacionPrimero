function newFleebJuice(){
    const prototipo = new FleebJuice();
    return {
        get: function(){
            return prototipo;
        }
    }
}


function FleebJuice() {
    this.nombre = "Fleeb Juice",
    this.pvp = 35
}

module.exports = { newFleebJuice: newFleebJuice };