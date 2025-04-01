# 📜Projeto Gerenciador de estoque
Nesse projeto foi desenvolvido um gerenciador de inventário utilizando a linguagem TypeScript, manipulando dados das categoria e seus produtos, utilizando uma interface fácil e intuitiva.

## 🚧Estrutura do projeto

   - 📂.vscode
   - 📂dist
        - Cópia dos arquivos src compliados em JavaScript
   - 📂node_modules
        - Dependências necessárias
   - 📂src
        - 📂cli
            - Interface gráfica `menu.ts`
        - 📂models
            - Interfaces `Iproduto.ts` e `Icategoria.ts`
        - 📂services
            - Classes `categoriaService.ts` e `produtoService.ts`
    
  - teste.ts 
    - arquivo de testes
  - package-lock.json
  - package.json
    
                Configurações  {
                "name": "projeto_inventariocli",
                "version": "1.0.0",
                "main": "index.js",
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1",
                    "start": "ts-node src/index.ts",
                    "dev": "nodemon --exec ts-node src/index.ts"
                },
                "keywords": [],
                "author": "",
                "license": "ISC",
                "description": "",
                "dependencies": {
                    "chalk": "^5.4.1",
                    "inquirer": "^12.5.0",
                    "ts-node": "^10.9.2",
                    "typescript": "^5.8.2"
                },
                "devDependencies": {
                    "@types/inquirer": "^9.0.7",
                    "@types/node": "^22.13.14",
                    "nodemon": "^3.1.9"
                }
            }

- tsconfig.json

           "compilerOptions": {

            "target": "ES6",             
            "module": "CommonJS",         
            "rootDir": "./src",           
            "outDir": "./dist",           
            "strict": true,               
            "esModuleInterop": true,      
            "forceConsistentCasingInFileNames": true
      
          }
      

## Sinataxe e Boas Práticas
   - Foi utilizado 2 intefaces para definir os atributos de categoria e produto, nas classe implementamos essas interfaces e  também exportamos as classes para podermos utilizar em outros arquivos necessários.
   - Criamos getter e setters para encapsular as informações
   - Criamos uma lista de produtos[] e categorias[] para guardar as informações da categorias e produtos criados
   - Utilizamos métodos estáticos em alguns métodos para poderem ser acessados sem precisar de uma instância

### Validações
   - Criamos validações para garantir a integridade dos produtos e categorias.

### Adionamos a biblioteca inquirer
   - Usamos ela para fazer e registrar a entrada de usuários.
        

## 🍃Fluxo do Sistema-
Operações CRUD: O sistema permite CRUD completo para as entidades Produto e Categoria.
Contendo validações

Funcionalidades Principais
Cadastro e Manipulação de Produtos e Categorias: Cadastro, atualização, exclusão e consulta.
Interface Gráfica: Interface gráfica construída no prompt de facil navegação.****

## Autor
Felipe Alves Muniz
