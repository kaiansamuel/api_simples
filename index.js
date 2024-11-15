const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/minha-primeira-rota'){
    const result = {
      message: "Minha primeira rota!",
    }
    
    res.statusCode = 200
    res.setHeader('Content-type', 'application/json')

    return res.end(JSON.stringify(result))
  }

  if(req.url === '/minha-segunda-rota'){
    const result = {
      message: "Minha segunda rota!",
    }
    
    res.statusCode = 200
    res.setHeader('Content-type', 'application/json')

    return res.end(JSON.stringify(result))
  }
  
})

server.listen(3334, () => console.log('Servidor rodando na porta 3334!'))
