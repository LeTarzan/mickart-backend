import UsersController from './users'
console.log('Controllers')

/*
  nessa pasta vão ficar os controllers, cada um dentro de sua respectiva pasta
  Exemplo:
  O controller de User vai ficar na pasta
  src/controllers/user/index.js

  Os arquivos ficam sempre dentro de pastas e em um index.js
  - Pq isso?
  -- Para os requires ficarem mais bem organizados e seguirem um padrão
  (Eu não gosto, mas desse jeito também é mais fácil de criar uma função para
    importar automaticamente todos... é como se fizesse um for nas pastas e ir importando todos)
 */

exports.UsersController = UsersController
