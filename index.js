const express = require('express')
var cors = require('cors')
const app = express()
const path = require('path')

app.use(cors())
app.use(express.static('public'))

app.get('/',(req,res)=>{ //Home Seite
    res.sendFile('./views/index.html',{root:__dirname})
})
app.get('/community',(req,res)=>{ //Community Seite
    res.sendFile('./views/community.html',{root:__dirname})
})
app.get('/solutions',(req,res)=>{ //Solutions Seite
    res.sendFile('./views/solutions.html',{root:__dirname})
})
app.get('/404',(req,res)=>{ //404 Seite
    res.sendFile('./views/404.html',{root:__dirname})
})

app.listen(3000, () => {
    console.log('listening at: localhost:3000')
})