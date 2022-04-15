- express:
  Serve para lidar com requisões http, o node faz mas da trabalho. a variavel app é a instancia do express que esta rodando.
- PORT:
  a porta serve apenas para colocar o servidor no ar. Normalmente utilizam o numero 80 ou 8080 para projetos em produção. o "app.listen(PORT)" faz com que qualquer requisição que chegar na porta PORT será repassada para o express
- /api:
  Vamos separar as rotas de back e front, para isso vamos separar as rotas por um /api para que não de conflito e o usuario nao tenha acesso assim.
- app.use():
  o express tem um middleware, na qual esse middleware pega a requisição e antes de executar faz uma verificação.
- Quando fazemos uma importação de uma pasta e nao especificamos o arquivo que queremos abrir, o computador sempre vai abrir o arquivo chamado index.js
-
