function seleccionarArchivoJson (e) {
    return require(`./datos/figuras${e}.json`)
}

function retornarJuguetes(nombreMarca) {
    const marcas = ["hot toys", "bandai", "star wars"]
    const marcaJuguete = nombreMarca.toLowerCase()
    const key = marcas.indexOf(marcaJuguete) + 1

    return seleccionarArchivoJson(key)
}

// console.log(retornarJuguetes("Bandai"))