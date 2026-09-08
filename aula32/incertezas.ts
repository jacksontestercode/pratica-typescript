interface Product {
  name: string;
  category?: { name: string }
}

// 1. Simulando um JSON que veio incompleto da API
const response: any = {
  name: "Cerveja"
};

// 2. Optional Chaining (?.) - O Sensor de Segurança
console.log("Categoria:", response.category?.name);

// 3. Type Assertion (as) - Afirmando o Tipo
const produto = response as Product;
console.log("Produto validado:", produto.name);