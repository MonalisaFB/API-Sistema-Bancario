const express = require('express');

rotas.get('/contas', validarSenhaBanco, listarContas);
rotas.post('/contas', validarDadosAtualizarCriar, criarConta);
rotas.put('/contas/:numeroConta/usuario', validarDadosAtualizarCriar, atualizarUsuario)
rotas.delete('/contas/:numeroConta', excluirConta);
rotas.get('/contas/saldo', validarSenhaClienteQuery, consultarSaldo);
rotas.get('/contas/extrato',validarSenhaClienteQuery, consultarExtrato);

rotas.post('/transacoes/depositar', depositarConta);
rotas.post('/transacoes/sacar', validarSenhaClienteBody, sacar);
rotas.post('/transacoes/transferir', validarSenhaContaOrigem, transferir)

module.exports = rotas;