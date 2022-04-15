- express:
  Serve para lidar com requisões http, o node faz mas da trabalho. a variavel app é a instancia do express que esta rodando.
- PORT:
  a porta serve apenas para colocar o servidor no ar. Normalmente utilizam o numero 80 ou 8080 para projetos em produção. o "app.listen(PORT)" faz com que qualquer requisição que chegar na porta PORT será repassada para o express
- /api:
  Vamos separar as rotas de back e front, para isso vamos separar as rotas por um /api para que não de conflito e o usuario nao tenha acesso assim.
- app.use():
  o express tem um middleware, na qual esse middleware pega a requisição e antes de executar faz uma verificação.
- Quando fazemos uma importação de uma pasta e nao especificamos o arquivo que queremos abrir, o computador sempre vai abrir o arquivo chamado index.js
- router.get('/:id') -> tem como pegar esse id fazendo req.params.id e temos que retornar uma resposta .res para o servidor nao ficar "esperando"
- Quando fazemos um request do tipo POST, o req da requisação vem pelo body, porem o express nao é capaz de lidar com o body em requisições e para isso usamos body-parser. O bodyParser vai atuar como um middleware e vai avaliar se na requisição existe um body e vai corrigir para o express, para que ele consiga trabalhar.
- o arquivo .env.sample serve para mostrar ao usuario as variaveis necessarias sem infroma-las
- não sao todas as rotas que vao precisar ter acesso ao mongoDB, logo, somente as rotas com /api que vao
