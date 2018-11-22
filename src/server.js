import Hapi from 'hapi'

const server = Hapi.Server({ port: 5555 })

// por enquanto deixamos aqui, depois organizamos isso
require('./services/')
require('./controllers/')

const init = async () => {
  server.route({
    method: 'GET',
    path: '/',
    handler: (req, h) => ({ message: 'Hello Hapi.js' })
  })

  await server.start()

  console.log('Server is running')
}

init()
