// ARRAY: Uma lista de coisas (pode crescer ou diminuir)
const frutas = ['Maçã', 'Banana', 'Laranja'];

// ENUM: Um conjunto de regras FIXAS (não muda durante o teste)
enum StatusPedido {
    Pendente = 'PENDING',
    Aprovado = 'APPROVED',
    Cancelado = 'CANCELLED'
}

enum StatusCode {

}

const meuStatus = StatusPedido.Aprovado;

console.log('Array (Lista):', frutas[0]);

console.log('Enum (Estado):', meuStatus);