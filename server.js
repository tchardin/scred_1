const port = process.env.PORT || 3000
const express = require('express')
const server = express()

server.use(express.static(__dirname + '/public'))
server.use('/charts', express.static(__dirname + '/node_modules/vue-charts/dist'))

server.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
