interface Produtos {

    id: number,
    name: string,
    slug: string,
    price: number,
    stock_quantity: number,
    sku: string,
    category_id: number,
    supplier_id: number,
    is_active: boolean,

}


const meuProduto: Produtos = {
    id: 1,
    name: 'Jackson',
    slug: 'Teste',
    price: 12.3,
    stock_quantity: 100,
    sku: 'Teste',
    category_id: 1,
    supplier_id: 1,
    is_active: true
}

console.log('---Validando Produtos---')
console.log('ID:', meuProduto.id);
console.log('Nome:', meuProduto.name);
console.log('Slug:', meuProduto.slug);
console.log('Preço:', meuProduto.price);
console.log('Estoque:', meuProduto.stock_quantity);
console.log('SKU:', meuProduto.sku);
console.log('Categoria:', meuProduto.category_id);
console.log('Fornecedor:', meuProduto.supplier_id);
console.log('Ativo:', meuProduto.is_active);

