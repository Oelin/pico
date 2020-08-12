const http = require('http')
const db = {}


const pico = ({url}, res) => {

  if (url.startsWith('/@')) {
    len = Object.keys(db).length
    db[len] = url.slice(2)
    res.end('' + len)
  }

  else {
    res.writeHead(302, {'location': db[url.slice(1)] || ''})
    res.end()
  }
}


http.createServer(pico)
.listen(80)
