
import { ICategoria } from "../models/Icategoria";
import { Produto } from "./produtoService"

export class Categoria implements ICategoria {
    public id: number;
    public nome: string;
    public descricao: string;
    public dataCriacao: Date;

    constructor(id: number, nome: string, descricao: string, dataCriacao: Date) {
        if (!nome || nome.trim() === "") {
            throw new Error("O nome da categoria é obrigatório.");
        }
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataCriacao = dataCriacao;
    }


    public getId(): number {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getDataCriacao(): Date {
        return this.dataCriacao;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }


    public static categorias: Categoria[] = [];


    public criarCategoria(id: number, nome: string, descricao: string, dataCriacao: Date): Categoria {
        const novaCategoria = new Categoria(id, nome, descricao, dataCriacao);
        Categoria.categorias.push(novaCategoria);
        return novaCategoria;
    }


    public static listarCategorias(): Categoria[] {
        return Categoria.categorias;
    }


    public static buscarCategoria(id: number): Categoria | undefined {
        return Categoria.categorias.find(categoria => categoria.id === id);
    }


    public static atualizarCategoria(id: number, nome?: string, descricao?: string): boolean {
        const categoria = Categoria.buscarCategoria(id);
        if (!categoria) return false; 

        if (nome) categoria.nome = nome;
        if (descricao) categoria.descricao = descricao;

        return true; 
    }

    // Implementa o método removerCategoria
    public static removerCategoria(id: number): boolean {
        if (Produto.existemProdutosVinculados(id)) {
            throw new Error("Não é possível remover uma categoria com produtos vinculados.");
        }
        const index = this.categorias.findIndex(categoria => categoria.id === id);
        if (index === -1) return false;
        this.categorias.splice(index, 1);
        return true;
    }
}
