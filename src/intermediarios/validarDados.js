const {contas} = require('../dados/bancodedados')

const validarDadosAtualizarCriar = (req, res, next) =>{
    const {nome, cpf, data_nascimento, telefone, email, senha} = req.body

    if(!nome){ return res.status(400).json({mensagem: 'O nome deve ser informado'})};
    if(!cpf){ return res.status(400).json({mensagem: 'O cpf deve ser informado'})};
    if(!data_nascimento){ return res.status(400).json({mensagem: 'A data de nascimento deve ser informada'})};
    if(!telefone){ return res.status(400).json({mensagem: 'O telefone deve ser informado'})};
    if(!email){ return res.status(400).json({mensagem: 'O e-mail deve ser informado'})};
    if(!senha){ return res.status(400).json({mensagem: 'A senha deve ser informada'})};


    next();

};

module.exports = {validarDadosAtualizarCriar}