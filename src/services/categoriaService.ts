
import { ICategoria } from "../models/Icategoria";

export class Categoria implements ICategoria {
    public id: number;
    public nome: string;
    public descricao: string;
    public dataCriacao: Date;

    constructor(id: number, nome: string, descricao: string, dataCriacao: Date) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataCriacao = dataCriacao;
    }

    // Armazena as categorias em memória
    private static categorias: Categoria[] = [];

    // Implementa o método criarCategoria
    public criarCategoria(id: number, nome: string, descricao: string, dataCriacao: Date): Categoria {
        const novaCategoria = new Categoria(id, nome, descricao, dataCriacao);
        Categoria.categorias.push(novaCategoria);
        return novaCategoria;
    }

    // Implementa o método listarCategorias
    public static listarCategorias(): Categoria[] {
        return Categoria.categorias;
    }

    // Implementa o método buscarCategoria
    public static buscarCategoria(id: number): Categoria | undefined {
        return Categoria.categorias.find(categoria => categoria.id === id);
    }

    // Implementa o método atualizarCategoria
    public static atualizarCategoria(id: number, nome?: string, descricao?: string): boolean {
        const categoria = Categoria.buscarCategoria(id);
        if (!categoria) return false; // Retorna falso caso a categoria não seja encontrada

        if (nome) categoria.nome = nome;
        if (descricao) categoria.descricao = descricao;

        return true; // Retorna verdadeiro quando a atualização é feita
    }

    // Implementa o método removerCategoria
    public static removerCategoria(id: number): boolean {
        const index = Categoria.categorias.findIndex(categoria => categoria.id === id);
        if (index === -1) return false; // Retorna falso caso não encontre a categoria

        Categoria.categorias.splice(index, 1); // Remove a categoria do array
        return true; // Retorna verdadeiro quando a categoria é removida com sucesso
    }
}
