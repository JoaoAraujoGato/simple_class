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
- usuario
  .save() // O que estou fazendo / Ação
  .then() // O que faz se der certo
  .catch() // O que faz se der errado
- O slug vai criar uma chave unica para garantirmos alem do mongo caso troquemos a hospedagem do banco.
- PUT x PATCH - O put é capaz de criar uma nova entidade caso nao exista a entidade que queira atualizar. Alem do mais se passarmos valores incompletos para atualizar a entidade, salvaremos no back com info a menos, pois o put sobrepõe os valores. Por exemplo, se quisermos atualizar o email do usuario e enviarmos apenas alguns dados, faltando o nome, o PUT vai sobrepor os dados novos sem o nome, como se apagasse o antigo e salvasse um novo. Já o PATCH ele atualiza apenas o campo que queremos, caso nao tenhamos a entidade que queremos atualizar, não será criado uma nova, vai dar erro.
- O slug esta sendo usado como uma forma de se aprender outra biblioteca, mas no nosso caso o \_id será unico, pois nao iremos trocar de banco e o mongo já cria um unico. Caso tivesse um problema e tivesse que mudar, bastava fazer uma verificação simples antes de salvar um novo elemento com msm id (Quase impossivel)
- O Slug tem muitos problemas, mas vou deixar o exemplo como seria:
  // get one (get -> /api/user/:slug) -- Usei o Slug apenas para aprender algo novo, vou deixar apenas nesse caso de get one, depois vou usar o id
  router.get('/:slug', async (req, res) => {
  try{
  const usuarios = await User.findOne({
  slug: req.params.slug
  });
  res.json({
  success: true,
  data: usuarios
  })
  }
  catch(err){
  res.json({
  success: false,
  message: err
  })
  }
  });
- O principal problema é que teriamos que atualizar o campo slug caso atualizamos o campo que usamos como referencia, logo, melhor usar o id msm

### Heroku

- para fazer um deploy no heroku, primeiro nos vamos fazer algumas configs:
  - No package.json vamos dizer qual a versão do node queremos que ele rode("engines":{"node": "10.x"})
  - Tambem precisa ter um script de start
