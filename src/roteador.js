const { clear } = require('console');
const express = require('express');

rotas.get('/contas', validarSenhaBanco, listarContas);
rotas.post('/contas', validarDadosAtualizarCriar, criarConta);
rotas.put('/contas/:numeroConta/usuario', validarDadosAtualizarCriar, atualizarUsuario)
rotas.delete('/contas/:numeroConta', excluirConta);
rotas.get('/contas/saldo', validarSenhaClienteQuery, consultarSaldo);
rotas.get('/contas/extrato',validarSenhaClienteQuery, consultarExtrato);


module.exports = rotas;