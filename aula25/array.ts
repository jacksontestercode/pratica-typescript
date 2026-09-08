export interface Product {
    id: number;
    name: string;
    slug: string;
    price: number;
    stock_quantity: number;
    sku: string;
    category_id: number;
    supplier_id: number;
    is_active: boolean;
    categories: {
        name: string;
    };
    suppliers: {
        company_name: string;
    };
}

const listaDeProdutos: Product[] = [
    { id: 1, name: 'Mouse Gamer RGB Pro Wireless', slug: 'mouse-gamer-rgb-pro-wireless', price: 299.9, stock_quantity: 150, sku: 'MGP-2024W', category_id: 1, supplier_id: 1, is_active: true, categories: { name: 'Periféricos' }, suppliers: { company_name: 'Tech Solutions Ltda' } },
    { id: 2, name: 'Teclado Mecânico Wireless', slug: 'teclado-mecanico-wireless', price: 549.99, stock_quantity: 37, sku: 'TCMW-2024B', category_id: 1, supplier_id: 1, is_active: true, categories: { name: 'Periféricos' }, suppliers: { company_name: 'Tech Solutions Ltda' } },
];

console.log('Total de produtos no depósito: ', listaDeProdutos.length);
console.log('Primeirot produto: ', listaDeProdutos[0].name)
console.log('Ultimo produto: ', listaDeProdutos[listaDeProdutos.length-1].name)



