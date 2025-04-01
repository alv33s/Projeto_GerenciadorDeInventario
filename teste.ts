import { Categoria } from "./src/services/categoriaService";

// Criando categorias
const categoria1 = new Categoria(1, "Eletrônicos", "Produtos eletrônicos", new Date());
const categoria2 = new Categoria(2, "Roupas", "Vestuário e acessórios", new Date());

// Adicionando categorias
categoria1.criarCategoria(1, "Eletrônicos", "Produtos eletrônicos", new Date());
categoria2.criarCategoria(2, "Roupas", "Vestuário e acessórios", new Date());

// Listando categorias
console.log(Categoria.listarCategorias());

// Buscando uma categoria
console.log(Categoria.buscarCategoria(1));

// Atualizando uma categoria
Categoria.atualizarCategoria(1, "Tecnologia", "Produtos tecnológicos");
console.log(Categoria.buscarCategoria(1));

// Removendo uma categoria
Categoria.removerCategoria(2);
console.log(Categoria.listarCategorias());
