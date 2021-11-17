const server = require('./server')

const port = provess.env.PORT || 3000

server.listen(port, function(){
  console.log('Listening on port ',port)
})