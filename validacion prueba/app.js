const express =require("express")
const app=express()

const {body, validationResult}=require("express-validator")

app.use(express.json())
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res)=>{
    res.render("index")
})

app.listen(3000, ()=>{
    console.log("el server esta escuchando")
})