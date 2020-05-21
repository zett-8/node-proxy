const express = require('express')
const httpProxy = require('http-proxy')
const app = express()

const PORT = 3333
const frontend = 8888

switch (process.env.NODE_ENV) {
  case 'production':
    break

  default:
    const proxy = httpProxy.createProxyServer({ target: 'http://localhost:3333' })
    proxy.listen(frontend)
}

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => console.log(`Listening to 3333\nalso navigate 8888 -> 3333`))
