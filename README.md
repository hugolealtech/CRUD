
Copy
# CRUD-ANGULAR-19

Este projeto foi gerado usando [Angular CLI](https://github.com/angular/angular-cli) versão 19.0.0.

## Servidor de desenvolvimento

Para iniciar um servidor de desenvolvimento local, execute:

```bash
ng serve
Após o servidor estar em execução, abra seu navegador e acesse http://localhost:4200/. A aplicação será recarregada automaticamente sempre que você modificar qualquer arquivo de código.

Executando o JSON Server
Para simular uma API REST para operações CRUD, este projeto utiliza o json-server. Para iniciar o JSON Server, execute o seguinte comando:

bash
Copy
npm run json-server db.json
Isso iniciará o JSON Server em http://localhost:3000 e usará o arquivo db.json como banco de dados. Certifique-se de que o json-server está instalado globalmente ou como uma dependência no seu projeto.

Gerando componentes
O Angular CLI inclui ferramentas poderosas para gerar código. Para criar um novo componente, execute:

bash
Copy
ng generate component nome-do-componente
Para ver uma lista completa de schematics disponíveis (como components, directives ou pipes), execute:

bash
Copy
ng generate --help
Build do projeto
Para compilar o projeto, execute:

bash
Copy
ng build
Isso irá compilar seu projeto e armazenar os arquivos gerados na pasta dist/. Por padrão, o build de produção é otimizado para desempenho e velocidade.

Executando testes unitários
Para executar testes unitários com o test runner Karma, use o seguinte comando:

bash
Copy
ng test
Executando testes end-to-end
Para testes end-to-end (e2e), execute:

bash
Copy
ng e2e
O Angular CLI não inclui um framework de testes end-to-end por padrão. Você pode escolher um que atenda às suas necessidades.

Recursos adicionais
Para mais informações sobre como usar o Angular CLI, incluindo referências detalhadas de comandos, visite a página Angular CLI Overview and Command Reference.

Observações:
Certifique-se de que o json-server está instalado no seu projeto. Caso não esteja, você pode instalá-lo usando:

bash
Copy
npm install -g json-server
O arquivo db.json deve estar localizado na raiz do seu projeto. Se estiver em outro local, ajuste o caminho no comando conforme necessário.

Copy

Salve este conteúdo em um arquivo `.txt` (por exemplo, `README.txt`) e adicione ao seu repositório no GitHub.
