const path=require('path')
const express=require('express')
app = express()

app.use(express.static('public')) //if in public index.html is ther then it directly gets printed if not type localhost/reqfilename in public

app.get('/',(req,res)=>{
    res.send('home page')
})
app.get('/about',(req,res)=>{
    res.send('about page <br> wowww')
    //res.send('mdngf,jsf') cant write like this
})

app.get('/college',(req,res)=>{
    res.sendFile('C:/Users/91995/Desktop/1255node/Server/College.html')
})
//app.get('/college',(req,res)=>{
 //   res.sendFile(path.json(__dirname+'/College.html'))
//})
app.listen(5000,()=>{console.log('express')})
