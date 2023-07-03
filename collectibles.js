const figuras1 = require("./datos/figuras1.json")
const figuras2 = require("./datos/figuras2.json")
const figuras3 = require("./datos/figuras3.json")

function retornarJsonJuguetes(marca) {
    switch(marca.toLowerCase()) {
        case "hot toys": 
            return figuras1
            break
        case "bandai": 
            return figuras2
            break
        case "star wars": 
            return figuras3
            break
        default: 
            return "Marca no encontrada"
    }

}

const juguetes = retornarJsonJuguetes("hot toys")


module.exports = retornarJsonJuguetes




