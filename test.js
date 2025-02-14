// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test("One dollar should be 156.5 yen", function() {
    const yen = fromDollarToYen(1);
    const expected = 156.5; // Valor esperado
    expect(yen).toBe(expected);
});

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(1);
    const expected = 1.07; // Valor esperado
    expect(dollars).toBe(expected);
});

test("One yen should be approximately 0.00556 pounds", function() {     
    const pounds = fromYenToPound(1);     
    const expected = 0.00556; // Valor esperado     
    expect(pounds).toBeCloseTo(expected, 5); // Usar toBeCloseTo para comparar con precisión
});