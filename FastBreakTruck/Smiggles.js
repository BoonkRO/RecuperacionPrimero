function newSmiggle(){
    const prototipo = new Smiggles();
    return {
        get: function(){
            return prototipo;
        }
    }
}


function Smiggles() {
    this.nombre = "Smiggles",
    this.pvp = 50
}

module.exports = { newSmiggle: newSmiggle };