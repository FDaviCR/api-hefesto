const service = require('../services/empresaService');
const logService = require('../services/logService');

exports.criar = async (req, res, next) => {
  try {
    const empresa = await service.criarEmpresa(req.body);
    await logService.criarLog({
      mensagem: "Empresa criada com sucesso",
      usuario: req.userId,
      tabela: "Empresa",
      acao: "Empresa criada: " + empresa.empresa,
      sucesso: true,
      erro: false
    });
    
    res.status(201).json({
      mensagem: "Empresa criada com sucesso",
      usuario: req.userId,
      tabela: "Empresa",
      acao: "Empresa criada com ID " + empresa.id,
      sucesso: true,
      erro: false
    });
  } catch (err) {
    next({
        "message": "Erro ao criar empresa: " + err.message
    });
  }
};

exports.listar = async (req, res, next) => {
  try {
    const empresas = await service.listarEmpresas();
    res.status(200).json(empresas);
  } catch (err) {
    next({
        "message": "Erro ao listar empresas: " + err.message
    });
  }
};

exports.obter = async (req, res, next) => {
  try {
    const empresa = await service.obterEmpresa(req.params.id);
    res.status(200).json(empresa);
  } catch (err) {
    next({
        "message": "Erro ao obter empresa: " + err.message
    });
  }
};

exports.atualizar = async (req, res, next) => {
  try {
    const empresa = await service.atualizarEmpresa(req.params.id, req.body);
    res.status(200).json(empresa);
  } catch (err) {
    next({
        "message": "Erro ao atualizar empresa: " + err.message
    });
  }
};

exports.inativar = async (req, res, next) => {
  try {
    const result = await service.inativarEmpresa(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    next({
        "message": "Erro ao inativar empresa: " + err.message
    });
  }
};

