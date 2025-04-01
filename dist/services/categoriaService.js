"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
const produtoService_1 = require("./produtoService");
class Categoria {
    constructor(id, nome, descricao, dataCriacao) {
        if (!nome || nome.trim() === "") {
            throw new Error("O nome da categoria é obrigatório.");
        }
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataCriacao = dataCriacao;
    }
    getId() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    getDescricao() {
        return this.descricao;
    }
    getDataCriacao() {
        return this.dataCriacao;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
    criarCategoria(id, nome, descricao, dataCriacao) {
        const novaCategoria = new Categoria(id, nome, descricao, dataCriacao);
        Categoria.categorias.push(novaCategoria);
        return novaCategoria;
    }
    static listarCategorias() {
        return Categoria.categorias;
    }
    static buscarCategoria(id) {
        return Categoria.categorias.find(categoria => categoria.id === id);
    }
    static atualizarCategoria(id, nome, descricao) {
        const categoria = Categoria.buscarCategoria(id);
        if (!categoria)
            return false;
        if (nome)
            categoria.nome = nome;
        if (descricao)
            categoria.descricao = descricao;
        return true;
    }
    // Implementa o método removerCategoria
    static removerCategoria(id) {
        if (produtoService_1.Produto.existemProdutosVinculados(id)) {
            throw new Error("Não é possível remover uma categoria com produtos vinculados.");
        }
        const index = this.categorias.findIndex(categoria => categoria.id === id);
        if (index === -1)
            return false;
        this.categorias.splice(index, 1);
        return true;
    }
}
exports.Categoria = Categoria;
Categoria.categorias = [];
