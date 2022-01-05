// const { db } = require("./cnn");

// db.any('select * from pizza').then(
//     res=>{
//         console.table(res)
//     }
// )
 
const express = require('express')
const app = express()
const bodyparser = require('body-parser') // reconoce html
//midleware 

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.use(require('./routes/index'))
//execution server web
app.listen(4000)

console.log('server listen on http://localhost:4000')
app.get('/',(req,res)=>{
    res.send('Bien Venido a mi servicio rest')
})