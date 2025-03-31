const express = require("express")

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const frutas = ["manzana"]

app.get("/frutas", (req, res)=>{
    const fruta = req.body.fruta
    frutas.push(fruta)
    res.json(frutas);
})
app.listen(3000, () => console.log("Servidor en 3000"));