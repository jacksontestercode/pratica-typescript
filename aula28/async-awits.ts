// No Playwright, quase tudo que fazemos leva tempo.
// Vamos simular essas ações:

async function acessarPagina() {
    return "Pagina Northwind Carregada";
}

async function clicarNoBotao() {
    return "Botão de Login Clicado";
}

async function rodarTeste() {
    console.log("Iniciando...");

    // Aqui entra o que você ensinou: await em todas as ações!
    await acessarPagina();
    console.log("-> Sucesso ao carregar");

    await clicarNoBotao();
    console.log("-> Sucesso ao clicar");

    console.log("Fim do Teste.");
}

rodarTeste();