const express=require('express')
const app=express()
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('./index.ejs',{college:'shri'})
})
app.listen(5050,()=>{console.log('server started')})