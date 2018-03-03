const serve = require('serve')
const server = serve("build/", {
    port: 8001,
    ignore: ['node_modules']
  })
