const rotas = require("../rotas/rotas");
const express = require("express");
const app = express();

app.use(express.json());
app.use(rotas);

app.listen(3000);