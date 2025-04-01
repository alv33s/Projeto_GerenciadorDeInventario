"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produtoService_1 = require("./services/produtoService");
const categoriaService_1 = require("./services/categoriaService");
function executarTestes() {
    console.log("🔹 Iniciando Testes...");
    try {
        // Criando categorias
        console.log("\n📌 Criando Categorias...");
        const categoria1 = new categoriaService_1.Categoria(1, "Eletrônicos", "Dispositivos e acessórios", new Date());
        categoriaService_1.Categoria.listarCategorias().push(categoria1);
        const categoria2 = new categoriaService_1.Categoria(2, "Livros", "Livros físicos e digitais", new Date());
        categoriaService_1.Categoria.listarCategorias().push(categoria2);
        console.log("✅ Categorias criadas com sucesso!");
        console.log(categoriaService_1.Categoria.listarCategorias());
        // Criando produtos
        console.log("\n📌 Criando Produtos...");
        const produto1 = produtoService_1.Produto.criarProduto(101, 1, "Smartphone", "Modelo X, 128GB", 1500, 10, new Date(), new Date());
        const produto2 = produtoService_1.Produto.criarProduto(102, 2, "Livro JS Avançado", "Livro sobre JavaScript moderno", 90, 5, new Date(), new Date());
        console.log("✅ Produtos criados com sucesso!");
        console.log(produtoService_1.Produto.listarProdutos());
        // Atualizar um produto
        console.log("\n📌 Atualizando Produto...");
        produtoService_1.Produto.atualizarProduto(101, undefined, "Smartphone Pro", undefined, 2000);
        console.log("✅ Produto atualizado:");
        console.log(produtoService_1.Produto.buscarProduto(101));
        // Tentativa de remover categoria vinculada a produtos (deve falhar)
        console.log("\n📌 Tentando remover categoria vinculada...");
        try {
            categoriaService_1.Categoria.removerCategoria(1);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("❌ Erro ao remover categoria:", error.message);
            }
            else {
                console.error("❌ Erro desconhecido:", error);
            }
        }
        // Remover um produto
        console.log("\n📌 Removendo Produto...");
        produtoService_1.Produto.removerProduto(102);
        console.log("✅ Produto removido com sucesso!");
        console.log(produtoService_1.Produto.listarProdutos());
        // Agora remover categoria sem produtos vinculados (deve funcionar)
        console.log("\n📌 Removendo Categoria sem produtos...");
        try {
            categoriaService_1.Categoria.removerCategoria(2);
            console.log("✅ Categoria removida com sucesso!");
            console.log(categoriaService_1.Categoria.listarCategorias());
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("❌ Erro ao remover categoria:", error.message);
            }
            else {
                console.error("❌ Erro desconhecido:", error);
            }
        }
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("❌ Erro nos testes:", error.message);
        }
        else {
            console.error("❌ Erro desconhecido:", error);
        }
    }
    console.log("\n✅ Testes concluídos!");
}
// Executar os testes
executarTestes();
