import inquirer from 'inquirer';
import { Categoria } from '../services/categoriaService';
import { Produto } from '../services/produtoService';

// Função principal do menu
async function mostrarMenu() {
    while (true) {
        const escolha = await inquirer.prompt({
            type: 'list',
            name: 'opcao',
            message: 'Escolha uma opção:',
            choices: [
                'Gerenciar Categorias',
                'Gerenciar Produtos',
                'Sair'
            ]
        });

        switch (escolha.opcao) {
            case 'Gerenciar Categorias':
                await gerenciarCategorias();
                break;
            case 'Gerenciar Produtos':
                await gerenciarProdutos();
                break;
            case 'Sair':
                console.log('Saindo...');
                process.exit();
        }
    }
}

// Gerenciamento de Categorias
async function gerenciarCategorias() {
    while (true) {
        const escolha = await inquirer.prompt({
            type: 'list',
            name: 'opcao',
            message: 'Escolha uma opção para categorias:',
            choices: ['Criar', 'Listar', 'Buscar', 'Atualizar', 'Remover', 'Voltar']
        });

        switch (escolha.opcao) {
            case 'Criar':
                const novaCategoria = await inquirer.prompt([
                    { type: 'input', name: 'id', message: 'ID da categoria:' },
                    { type: 'input', name: 'nome', message: 'Nome da categoria:' },
                    { type: 'input', name: 'descricao', message: 'Descrição da categoria:' }
                ]);
                Categoria.categorias.push(new Categoria(
                    parseInt(novaCategoria.id), novaCategoria.nome, novaCategoria.descricao, new Date()
                ));
                console.log('Categoria criada com sucesso!');
                break;
            case 'Listar':
                console.table(Categoria.listarCategorias());
                break;
            case 'Buscar':
                const buscarId = await inquirer.prompt({ type: 'input', name: 'id', message: 'ID da categoria:' });
                console.log(Categoria.buscarCategoria(parseInt(buscarId.id)) || 'Categoria não encontrada');
                break;
            case 'Atualizar':
                const atualizarId = await inquirer.prompt({ type: 'input', name: 'id', message: 'ID da categoria:' });
                const atualizarDados = await inquirer.prompt([
                    { type: 'input', name: 'nome', message: 'Novo nome da categoria:', default: '' },
                    { type: 'input', name: 'descricao', message: 'Nova descrição:', default: '' }
                ]);
                Categoria.atualizarCategoria(parseInt(atualizarId.id), atualizarDados.nome, atualizarDados.descricao);
                console.log('Categoria atualizada!');
                break;
            case 'Remover':
                const removerId = await inquirer.prompt({ type: 'input', name: 'id', message: 'ID da categoria:' });
                Categoria.removerCategoria(parseInt(removerId.id));
                console.log('Categoria removida!');
                break;
            case 'Voltar':
                return;
        }
    }
}

// Gerenciamento de Produtos
async function gerenciarProdutos() {
    while (true) {
        const escolha = await inquirer.prompt({
            type: 'list',
            name: 'opcao',
            message: 'Escolha uma opção para produtos:',
            choices: ['Criar', 'Listar', 'Buscar', 'Atualizar', 'Remover', 'Voltar']
        });

        switch (escolha.opcao) {
            case 'Criar':
                const novoProduto = await inquirer.prompt([
                    { type: 'input', name: 'id', message: 'ID do produto:' },
                    { type: 'input', name: 'categoriaID', message: 'ID da categoria do produto:' },
                    { type: 'input', name: 'nome', message: 'Nome do produto:' },
                    { type: 'input', name: 'descricao', message: 'Descrição do produto:' },
                    { type: 'input', name: 'preco', message: 'Preço do produto:' },
                    { type: 'input', name: 'quantidade', message: 'Quantidade do produto:' }
                ]);
                Produto.criarProduto(
                    parseInt(novoProduto.id),
                    parseInt(novoProduto.categoriaID),
                    novoProduto.nome,
                    novoProduto.descricao,
                    parseFloat(novoProduto.preco),
                    parseInt(novoProduto.quantidade),
                    new Date(),
                    new Date()
                );
                console.log('Produto criado com sucesso!');
                break;
            case 'Listar':
                console.table(Produto.listarProdutos());
                break;
            case 'Buscar':
                const buscarProdutoId = await inquirer.prompt({ type: 'input', name: 'id', message: 'ID do produto:' });
                console.log(Produto.buscarProduto(parseInt(buscarProdutoId.id)) || 'Produto não encontrado');
                break;
            case 'Atualizar':
                const atualizarProdutoId = await inquirer.prompt({ type: 'input', name: 'id', message: 'ID do produto:' });
                const atualizarProdutoDados = await inquirer.prompt([
                    { type: 'input', name: 'nome', message: 'Novo nome do produto:', default: '' },
                    { type: 'input', name: 'descricao', message: 'Nova descrição:', default: '' },
                    { type: 'input', name: 'preco', message: 'Novo preço:', default: '' },
                    { type: 'input', name: 'quantidade', message: 'Nova quantidade:', default: '' }
                ]);
                Produto.atualizarProduto(
                    parseInt(atualizarProdutoId.id),
                    undefined,
                    atualizarProdutoDados.nome,
                    atualizarProdutoDados.descricao,
                    atualizarProdutoDados.preco ? parseFloat(atualizarProdutoDados.preco) : undefined,
                    atualizarProdutoDados.quantidade ? parseInt(atualizarProdutoDados.quantidade) : undefined,
                    undefined,
                    new Date()
                );
                console.log('Produto atualizado com sucesso!');
                break;
            case 'Remover':
                const removerProdutoId = await inquirer.prompt({ type: 'input', name: 'id', message: 'ID do produto:' });
                Produto.removerProduto(parseInt(removerProdutoId.id));
                console.log('Produto removido com sucesso!');
                break;
            case 'Voltar':
                return;
        }
    }
}

// Inicia o menu
mostrarMenu();
