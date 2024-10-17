function ehPalindromo(str) {

    const normalizedStr = str.toLowerCase();
    
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    return normalizedStr === reversedStr;
}

console.log(ehPalindromo("Carro"));
console.log(ehPalindromo("Madam"));
