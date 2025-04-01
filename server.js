const express = require('express');
const Database = require('better-sqlite3');

const app = express();
app.use(express.json());
app.use(express.static('public')); 


const db = new Database('database.db');


app.get("/frutas", (req, res) => {
  const query = db.prepare("SELECT name FROM fruits");
  const fruits = query.all().map(row => row.name);
  res.json(fruits);
});

app.post("/frutas", (req, res) => {
  const { fruta } = req.body;
  const insert = db.prepare("INSERT INTO fruits (name) VALUES (?)");
  insert.run(fruta);
  //parte json
  const query = db.prepare("SELECT * FROM fruits");
  const fruits = query.all();
  res.json(fruits);
});
////});

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
