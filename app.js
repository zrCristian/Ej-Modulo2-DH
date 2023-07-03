const retornarJsonJuguetes = require("./collectibles")

const hotToys = retornarJsonJuguetes("hot Toys")
const bandai = retornarJsonJuguetes("bandai")
const starWars = retornarJsonJuguetes("star Wars")

const unifiedCollectibles = [...hotToys, ...bandai, ... starWars]

const collectibles = {
    figuras: unifiedCollectibles,
    listFigures: function () {
        console.log("-- Juguetes disponibles -- \n")
        this.figuras.forEach((e) => {
            console.log(`${e.nombre} - ${e.marca} \nprecio: $${e.precio} \nstock: ${e.stock} \n`)
        })
    },
    figuresByBrand: function (marca) {
        return this.figuras.filter(e => e.marca.toLowerCase() === marca.toLowerCase())
    }

}

const juguetesHotToys = collectibles.figuresByBrand("hot TOYS")
const juguetesBandai = collectibles.figuresByBrand("BANDAI")
const juguetesStarWars = collectibles.figuresByBrand("star Wars")

// collectibles.listFigures()
console.log(juguetesHotToys)
console.log(juguetesBandai)
console.log(juguetesStarWars)
