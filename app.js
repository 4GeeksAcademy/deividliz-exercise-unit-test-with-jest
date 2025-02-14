// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3));


// Función para convertir de dólares a yenes
function fromDollarToYen(dollars) {     
    let yenes = dollars * 156.5; // Convertir dólares directamente a yenes     
    return yenes;
}
// Función para convertir de euros a dólares
function fromEuroToDollar(euros) {
    return euros * 1.07; // Convertir euros a dólares
}

// Función para convertir de yenes a libras
function fromYenToPound(yen) {
    let euros = yen / 156.5; // Convertir yenes a euros
    return euros * 0.87; // Convertir euros a libras
}

module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };

console.log(fromYenToPound(1000));
