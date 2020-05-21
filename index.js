const express = require('express')
const httpProxy = require('http-proxy')
const app = express()

switch (process.env.NODE_ENV) {
  case 'production':
    break

  default:
    const proxy = httpProxy.createProxyServer({ target: 'http://localhost:3333' })
    proxy.listen(8888)
}

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3333, () => console.log(`running on 3333`))
