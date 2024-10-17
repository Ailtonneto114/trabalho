function contarOcorrencias(arr) {
    const frequencias = {};
    
    arr.forEach(num => {
        // Se o número já existe no objeto, incrementa a frequência
        if (frequencias[num]) {
            frequencias[num]++;
        } else {
            // Caso contrário, inicializa a frequência como 1
            frequencias[num] = 1;
        }
    });

    return frequencias;
}
// Exemplo de uso:
function main(){
    const numeros = [1, 2, 4, 3, 1, 4, 1];
    const resultado = contarOcorrencias(numeros);
    console.log(resultado);
}
main();