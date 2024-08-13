const express = require("express");
const app = express();
const port = 4000;
const corretora = require("./controllers/corretora.js");
app.use(express.json());
//Coomo pegar dados
// app.get("/:usuario/:repositorio", (req, res) => {
//   console.log("antes do ?:", req.params.usuario, req.params.repositorio); //capturar dados que estão vindo antes do ?
//   console.log("depois do ?:", req.query.id, req.query.idade); //capturar dados que estão vindo depois do ? query
//   console.log("body corpo da requisição : ", req.body);
//   res.send("Hello World");
// });

// app.post("/", (req, res) => {
//   res.send("Hello World");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

app.get("/corretora", (req, resp) => {
  resp.json(corretora.index());
});

app.post("/corretora", (req, resp) => {
  const code = corretora.store(req.body);
  resp.status(code).json();
});

app.get("/corretora/:id", (req, resp) => {
  resp.json(corretora.show(req.params.id));
});

app.put("/corretora/:id", (req, resp) => {
  const code = corretora.update(req.body, req.params.id);
  resp.status(code).json();
});
app.delete("/corretora/:id", (req, resp) => {
  corretora.destroy(req.params.id);
  resp.status(code).json();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
