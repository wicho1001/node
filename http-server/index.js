const http = require('http')
const fs = require('fs')



const server = http.createServer((req, res) => {
    console.log(req);
    const {url} = req;
    if(url === '/'){
        res.setHeader('Content-Type','text/html')
        const home = fs.readFileSync('../page/index.html');
        res.end(home)
    }else if(url === '/about'){
        res.setHeader('Content-Type','text/html')        
        const about = fs.readFileSync('../page/about.html');
        res.end(about)
    }
})

server.listen(8080,() => {
    console.log('listening on port 8080');
})