import { IProduto } from "../models/Iproduto";
import { Categoria } from "./categoriaService";

export class Produto{

    public id:number;
    public categoriaID: number; 
    public nome: string;
    public descricao: string;
    public preco: number;
    public quantidade: number;
    public dataCriacao: Date;
    public dataAtualizacao: Date;

    constructor(id:number,categoriaID: number,nome: string,descricao: string,preco: number,quantidade: number,dataCriacao: Date,dataAtualizacao: Date){

        if (!Categoria.buscarCategoria(categoriaID)) {
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

       public getId(): number {
        return this.id;
    }

    public getCategoriaID(): number {
        return this.categoriaID;
    }

    public getNome(): string {
        return this.nome;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getPreco(): number {
        return this.preco;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }

    public getDataCriacao(): Date {
        return this.dataCriacao;
    }

    public getDataAtualizacao(): Date {
        return this.dataAtualizacao;
    }


    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public setPreco(preco: number): void {
        if (preco >= 0) this.preco = preco;
    }

    public setQuantidade(quantidade: number): void {
        if (quantidade >= 0) this.quantidade = quantidade;
    }

    public setDataAtualizacao(dataAtualizacao: Date): void {
        this.dataAtualizacao = dataAtualizacao;
    }

 
    private static produtos: Produto[] = [];

    public static  criarProduto(id:number,categoriaID: number,nome: string,descricao: string,preco: number,quantidade: number,dataCriacao: Date,dataAtualizacao: Date): Produto {

        if (!Categoria.buscarCategoria(categoriaID)) {
            throw new Error("A categoria informada não existe.");
        }

        if (preco < 0 || quantidade < 0) {
            throw new Error("Preço e quantidade devem ser valores positivos.");
        }

        const novoProduto = new Produto(id, categoriaID, nome, descricao, preco, quantidade, dataCriacao, dataAtualizacao);
        Produto.produtos.push(novoProduto);
        return novoProduto;

    }

   
    public static listarProdutos(): Produto[] {

        return Produto.produtos;

    }


    public static buscarProduto(id: number): Produto | undefined {

        return Produto.produtos.find(produtos => produtos.id === id);

    }


    public static atualizarProduto(id: number, categoriaID ?: number, nome?: string, descricao?: string, preco ?: number, quantidade ?: number, dataCriacao ?: Date, dataAtualizacao ?: Date): boolean {

        const produto = this.buscarProduto(id);
        if (!produto) {
            throw new Error("Produto não encontrado.");
        }

        if (categoriaID && !Categoria.buscarCategoria(categoriaID)) {
            throw new Error("A categoria informada não existe.");
        }

        if (preco !== undefined && preco < 0) {
            throw new Error("O preço não pode ser negativo.");
        }

        if (quantidade !== undefined && quantidade < 0) {
            throw new Error("A quantidade não pode ser negativa.");
        }

        if (categoriaID) produto.categoriaID = categoriaID;
        if (nome) produto.nome = nome;
        if (descricao) produto.descricao = descricao;
        if (preco !== undefined) produto.preco = preco;
        if (quantidade !== undefined) produto.quantidade = quantidade;
        if (dataAtualizacao) produto.dataAtualizacao = dataAtualizacao;

        return true;
    }

  
    public static removerProduto(id: number): boolean {

        const index = this.produtos.findIndex(produto => produto.id === id);
        if (index === -1) {
            throw new Error("Produto não encontrado.");
        }

        this.produtos.splice(index, 1);
        return true;
    }



    public static existemProdutosVinculados(categoriaID: number): boolean {
        return this.produtos.some(produto => produto.categoriaID === categoriaID);
    }




}