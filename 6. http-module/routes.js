const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url=='/'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end('Home Page')
    }else if(url=='/projects'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end('Projects Page');
    }else if(url=='/dashboard'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end('Dashboard Page');
    }else{
        res.writeHead(400,{'content-type':'text/plain'});
        res.end('This page is not Found');
    }
});

const port = 5000;

server.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})