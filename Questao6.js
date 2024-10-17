function substituirElemento(array, valorAntigo, novoValor) {
    return array.map(item => (item === valorAntigo ? novoValor : item));
}

const arrayOriginal = [1, 2, 3, 2, 4, 2];
const resultado = substituirElemento(arrayOriginal, 2, 5);
console.log(resultado);