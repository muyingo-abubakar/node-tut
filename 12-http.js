const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to the home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short about')
    }
    res.end(`<h1>Ooops</h1>
     <p>We can't find your page</p>
    <a href="/">back home</a>
     `)
})

server.listen(5000)