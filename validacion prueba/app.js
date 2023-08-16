const express =require("express")
const app=express()

const {body, validationResult}=require("express-validator")

app.use(express.json())
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res)=>{
    res.render("index")
})

app.post("/registrar", [
   body("nya", "ingrese un nombre y apellido completo")
    .exists()
    .isLength({min:5}),
   body("correo", "ingrese un email valido")
    .exists()
    .isEmail(),
   body("edad", "ingrese un valor numerico")
    .exists()
    .isNumeric()
], (req, res)=>{
    // const errors=validationResult(req);
    // if(!errors.isEmpty()){
    //     res.status(400).json({errors: errors.array()});
    //     console.log(errors)
    // }

    const errors=validationResult(req)
    if(!errors.isEmpty()){
        console.log(req.body)
        const valores=req.body
        const validaciones=errors.array()
        res.render("index", {validaciones:validaciones, valores:valores})
    }else{
        res.send("validacion exitosa")
    }
})


app.listen(3000, ()=>{
    console.log("el server esta escuchando")
})