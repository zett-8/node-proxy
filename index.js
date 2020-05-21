const express = require('express')
const httpProxy = require('http-proxy')
const http = require('http')
const app = express()

const port = 3000
const anotherPort = 8000

if (process.env.NODE_ENV !== 'production') {
  const proxy = httpProxy.createProxyServer({ target: `http://localhost:${port}` })
  proxy.listen(anotherPort)
}

app.get('/', (req, res) => {
  res.send('hello world')
})

const server = http.createServer(app)

server.listen(port, () => console.log(`Listening to ${port}\nalso navigate ${anotherPort} -> ${port}`))
