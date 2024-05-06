const express = require("express");

const rotas = express();

const {
    listarContas,
    criarConta,
    editarConta,
    deletarConta,
    depositar,
    sacar,
    transferir,
    exibirSaldo,
    exibirExtrato,
} = require("../controlador/controladores");

rotas.get("/contas", listarContas);
rotas.post("/contas", criarConta);
rotas.put("/contas/:numeroConta/usuario", editarConta);
rotas.delete("/contas/:numeroConta", deletarConta);
rotas.post("/transacoes/depositar", depositar);
rotas.post("/transacoes/sacar", sacar);
rotas.post("/transacoes/transferir", transferir);
rotas.get("/contas/saldo", exibirSaldo);
rotas.get("/contas/extrato", exibirExtrato);

module.exports = rotas;