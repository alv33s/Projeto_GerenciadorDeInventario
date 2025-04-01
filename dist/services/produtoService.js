"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
const categoriaService_1 = require("./categoriaService");
class Produto {
    constructor(id, categoriaID, nome, descricao, preco, quantidade, dataCriacao, dataAtualizacao) {
        if (!categoriaService_1.Categoria.buscarCategoria(categoriaID)) {
            throw new Error("Categoria não encontrada! O produto deve estar vinculado a uma categoria existente.");
        }
        if (preco < 0 || quantidade < 0) {
            throw new Error("Preço e quantidade não podem ser negativos.");
        }
        this.id = id;
        this.categoriaID = categoriaID;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.quantidade = quantidade;
        this.dataCriacao = dataCriacao;
        this.dataAtualizacao = dataAtualizacao;
    }
    getId() {
        return this.id;
    }
    getCategoriaID() {
        return this.categoriaID;
    }
    getNome() {
        return this.nome;
    }
    getDescricao() {
        return this.descricao;
    }
    getPreco() {
        return this.preco;
    }
    getQuantidade() {
        return this.quantidade;
    }
    getDataCriacao() {
        return this.dataCriacao;
    }
    getDataAtualizacao() {
        return this.dataAtualizacao;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
    setPreco(preco) {
        if (preco >= 0)
            this.preco = preco;
    }
    setQuantidade(quantidade) {
        if (quantidade >= 0)
            this.quantidade = quantidade;
    }
    setDataAtualizacao(dataAtualizacao) {
        this.dataAtualizacao = dataAtualizacao;
    }
    static criarProduto(id, categoriaID, nome, descricao, preco, quantidade, dataCriacao, dataAtualizacao) {
        if (!categoriaService_1.Categoria.buscarCategoria(categoriaID)) {
            throw new Error("A categoria informada não existe.");
        }
        if (preco < 0 || quantidade < 0) {
            throw new Error("Preço e quantidade devem ser valores positivos.");
        }
        const novoProduto = new Produto(id, categoriaID, nome, descricao, preco, quantidade, dataCriacao, dataAtualizacao);
        Produto.produtos.push(novoProduto);
        return novoProduto;
    }
    static listarProdutos() {
        return Produto.produtos;
    }
    static buscarProduto(id) {
        return Produto.produtos.find(produtos => produtos.id === id);
    }
    static atualizarProduto(id, categoriaID, nome, descricao, preco, quantidade, dataCriacao, dataAtualizacao) {
        const produto = this.buscarProduto(id);
        if (!produto) {
            throw new Error("Produto não encontrado.");
        }
        if (categoriaID && !categoriaService_1.Categoria.buscarCategoria(categoriaID)) {
            throw new Error("A categoria informada não existe.");
        }
        if (preco !== undefined && preco < 0) {
            throw new Error("O preço não pode ser negativo.");
        }
        if (quantidade !== undefined && quantidade < 0) {
            throw new Error("A quantidade não pode ser negativa.");
        }
        if (categoriaID)
            produto.categoriaID = categoriaID;
        if (nome)
            produto.nome = nome;
        if (descricao)
            produto.descricao = descricao;
        if (preco !== undefined)
            produto.preco = preco;
        if (quantidade !== undefined)
            produto.quantidade = quantidade;
        if (dataAtualizacao)
            produto.dataAtualizacao = dataAtualizacao;
        return true;
    }
    static removerProduto(id) {
        const index = this.produtos.findIndex(produto => produto.id === id);
        if (index === -1) {
            throw new Error("Produto não encontrado.");
        }
        this.produtos.splice(index, 1);
        return true;
    }
    static existemProdutosVinculados(categoriaID) {
        return this.produtos.some(produto => produto.categoriaID === categoriaID);
    }
}
exports.Produto = Produto;
Produto.produtos = [];
