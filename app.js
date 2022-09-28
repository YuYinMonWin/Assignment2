const express = require ('express')
const path = require ( 'path')
const app = express()


app.get("/red",(req,res)=>{

    res.sendFile (path.join(_dirname, '/red.html'))

})

app.get("/yellow",(req,res)=>{

    res.sendFile(path.join(_dirname, '/yellow.html'))

})

app.get ("/white",(req,res)=>{
    
    res.sendFile(path.join(_dirname, '/white.html'))

})

app.get("/green",(req,res)=>{

    res.sendFile(path.join(_dirname,'/green.html'))

})

app.listen(3000,()=>{

    console.log('Sever is listening at port:3000')
    
})
