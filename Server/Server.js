const http=require('http')
//const server=http.createServer((req,res)=>{console.log('hello')})
//server.listen(8081,()=>{console.log('server started')})
//console.log('server')

const server=http.createServer((req,res)=>{ 
    //res.writeHead(200,{'content-type':'text/html'}) //gives text written in html
    //res.writeHead(200,{'content-type':'text/plain'}) //gives text with tags 
    res.write('<h1>hello world</h1>'); res.end()})
server.listen(8090,()=>{console.log('server started')})


