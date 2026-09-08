async function testarApi() {
    try {
        console.log("Tentando chamada para Northwind...");

        // Simulando um erro de conexão na API
        throw new Error("Erro na API Northwind (500)");

    } catch (error: any) {
        // O catch captura o erro para o teste não quebrar o projeto
        console.log("ALERTA QA: Falha na API ->", error.message);
    }
}

testarApi();