const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

app.get("/:usuario/:repositorio", (req, res) => {
  console.log("antes do ?:", req.params.usuario, req.params.repositorio); //capturar dados que estão vindo antes do ?
  console.log("depois do ?:", req.query.id, req.query.idade); //capturar dados que estão vindo depois do ? query
  console.log("body corpo da requisição : ", req.body);
  res.send("Hello World");
});

app.post("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
