const http = require('http')
const db = []


const pico = ({url}, res) => {

  if (url.startsWith('/@')) {
    res.end('' + db.length)
    db.push(url.slice(2))
  }

  else {
    res.writeHead(302, {'location': db[url.slice(1)] || ''})
    res.end()
  }
}


http.createServer(pico)
.listen(80)
