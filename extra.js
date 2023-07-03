const arregloNumeros = [2, 18, 213, 12, 55, 38, 10, 22, 11, 7]

const  [posicion0, ,posicion2, ,posicion4, ...numeros] = arregloNumeros

console.log(posicion0, posicion2, posicion4)
console.log(numeros)

// Crear un objeto literal para almacenar los datos de nuestra mascota, considerando los atributos:
const mascota = {
    nombre: "Bony",
    tipoMascota: "perro",
    color: "dorado",
    raza: "Golden Retriever"
}

const {nombre, tipoMascota, color, raza} = mascota
console.log(`Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipoMascota}, de
color: ${color} y su raza es: ${raza}.`)
