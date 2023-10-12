const {senha, contas, banco, usuario} = require("../dados/bancodedados");

const validarSenhaBanco = (req,res, next) =>{
    const {senha_banco} = req.query;
    if(!senha_banco){
        return res.status(400).json({mensagem: 'A senha do banco deve ser informada'});
    }
    if(senha_banco !== banco.senha){
        return res.status(401).json({ "mensagem": "A senha do banco informada Ã© invÃ¡lida!"});
    }
    next();
};

const validarSenhaClienteQuery = (req, res,next) =>{
    const {senha, numero_conta} = req.query;
    let contaExistente = contas.find(conta => conta.numero === Number(numero_conta));
    if(!contaExistente){
        return res.status(400).json({mensagem: 'Conta bancÃ¡ria nÃ£o encontada!'})

    };
    if(!senha){
        return res.status(400).json({mensagem: 'A senha deve ser informada'});
    }
   
    if(contaExistente.usuario.senha !== senha) {
       return res.status(401).json({mensagem:'Senha invÃ¡lida!'})
    }
    next();
};
const validarSenhaClienteBody = (req, res,next) =>{
    const {senha, numero_conta} = req.body;
    let contaExistente = contas.find(conta => conta.numero === Number(numero_conta));
    if(!contaExistente){
        return res.status(400).json({mensagem: 'Conta bancÃ¡ria nÃ£o encontada!'})

    };
    if(!senha){
        return res.status(400).json({mensagem: 'A senha deve ser informada'});
    }
   
    if(contaExistente.usuario.senha !== senha) {
       return res.status(401).json({mensagem:'Senha invÃ¡lida!'})
    }
    next();
};

const validarSenhaContaOrigem = (req, res, next) =>{
    const {numero_conta_origem, senha} = req.body;
    const contaExistenteOrigem = contas.find(conta => conta.numero === Number(numero_conta_origem));

    if(!senha){
        return res.status(400).json({mensagem: 'A senha deve ser informada'});
    }
    if(contaExistenteOrigem.usuario.senha !== senha){
        return res.status(400).json({mensagem: 'A senha informada Ã© invÃ¡lida'})
    }
    next();
}

module.exports = {validarSenhaBanco, validarSenhaClienteBody, validarSenhaClienteQuery, validarSenhaContaOrigem};