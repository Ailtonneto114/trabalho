function separarParesImpares(numeros) {
    const resultado = {
        pares: [],
        impares: []
    };

    numeros.forEach(num => {
        if (num % 2 === 0) {
            resultado.pares.push(num);
        } else {
            resultado.impares.push(num);
        }
    });

    return resultado;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultado = separarParesImpares(numeros);
console.log(resultado);