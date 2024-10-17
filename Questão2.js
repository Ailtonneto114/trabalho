function ordenarPorIdade(pessoas) {
    return pessoas.sort((a, b) => a.idade - b.idade);
}

// Exemplo de uso:
const pessoas = [
    { nome: 'Fabio', idade: 44 },
    { nome: 'Marcelo', idade: 36 },
    { nome: 'Arias', idade: 27 }
];

const resultado = ordenarPorIdade(pessoas);
console.log(resultado);