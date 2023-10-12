const {bancodedados, contas, depositos, transferencias, saques} = require('../dados/bancodedados');
let numeroContaProxCliente = 1;

const listarContas = (req, res) =>{
    return res.json(contas);
    
};
const criarConta = (req,res) => {
    const {nome, cpf, data_nascimento, telefone, email, senha} = req.body;
    const cpfExistente = contas.find(conta => conta.usuario.cpf === cpf);

    if(cpfExistente){
        return res.status(400).json({mensagem: "Já existe uma conta com o cpf informado!"})
    };

    const emailExistente = contas.find(conta => conta.usuario.email === email);

    if(emailExistente){
        return res.status(400).json({mensagem: "Já existe uma conta com o e-mail informado!"})
    };

    
    const novaConta = {
        numero: numeroContaProxCliente , saldo: 0 ,usuario:{nome, cpf, data_nascimento, telefone, email, senha}
    };

    contas.push(novaConta);
    numeroContaProxCliente++

    return res.send();

};
const atualizarUsuario = (req,res) =>{
    const {nome, cpf, data_nascimento, telefone, email, senha} = req.body;
    const { numeroConta } = req.params;

    let contaExistente = contas.find(conta => conta.numero === Number(numeroConta));

    if(!contaExistente){
        return res.status(400).json({mensagem: 'O número da conta não existe'})

    };
   

    let {usuario} = contaExistente;

    usuario.nome = nome || usuario.nome; 
    usuario.cpf = cpf || usuario.cpf; 
    usuario.data_nascimento = data_nascimento || usuario.data_nascimento;
    usuario.telefone = telefone || usuario.telefone;
    usuario.email = email || usuario.email;
    usuario.senha = senha || usuario.senha

    return res.send();
};
const excluirConta = (req,res) =>{
    const {numeroConta} = req.params;
    if(!numeroConta ){
        return res.status(400).json({mensagem: 'Número da conta não fornecido!'})
    };
    let contaExistente = contas.find(conta => conta.numero === Number(req.params.numeroConta));

    if(!contaExistente){
        return res.status(400).json({mensagem: 'O número da conta não é válido'})
    };

    if(contaExistente.saldo > 0){
        return res.status(400).json({"mensagem": "A conta só pode ser removida se o saldo for zero!"})
    };

    if(contaExistente.saldo === 0) {
        let indice = contas.indexOf(contaExistente);
        contas.splice(indice, 1);
        return res.json({"mensagem": "Conta excluída com sucesso!"})
    };


};

const consultarSaldo = (req,res) =>{
    let {numero_conta} = req.query;

    if(!numero_conta ){
        return res.status(400).json({mensagem: 'NÃºmero da conta nÃ£o fornecido!'})
    };

    let contaExistente = contas.find(conta => Number(conta.numero) === Number(numero_conta));
    if(!contaExistente){
        return res.status(400).json({mensagem: 'Conta bancÃ¡ria nÃ£o encontada!'})
    };
    
    let consultaSaldo = {
        saldo: contaExistente.saldo
    }
    return res.json(consultaSaldo);

};

const consultarExtrato = (req,res) =>{
    let {numero_conta} = req.query;

    if(!numero_conta ){
        return res.status(400).json({mensagem: 'NÃºmero da conta nÃ£o fornecido!'})
    };

    let contaExistente = contas.find(conta => conta.numero === Number(numero_conta));
    
    if(!contaExistente){
        return res.status(400).json({mensagem: 'Conta bancÃ¡ria nÃ£o encontada!'})
    };

    let depositosConta = depositos.filter(deposito => Number(deposito.numero_conta) === Number(numero_conta));
    let saquesConta = saques.filter(saque => saque.numero_conta === numero_conta);
    let transferenciasRealizadasConta = transferencias.filter(transferencia => 
        Number(transferencia.numero_conta_origem) === Number(numero_conta));
    let transferenciasRecebidasConta = transferencias.filter(transferencia => 
        Number(transferencia.numero_conta_destino) === Number(numero_conta));

    let extrato = {depositos: depositosConta,
        saques: saquesConta,
        transferenciasEnviadas: transferenciasRealizadasConta,
        transferenciasRecebidas: transferenciasRecebidasConta};

    return res.json(extrato);

}



module.exports = {listarContas, criarConta, atualizarUsuario, excluirConta, consultarSaldo, consultarExtrato}