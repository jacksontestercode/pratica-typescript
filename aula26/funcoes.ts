function calculaDesconto(preco: number): number{
    return preco * 15; // Dá 10% de desconto
}

const valorFinal = calculaDesconto(100);

console.log('Preço com desconto: ', valorFinal)