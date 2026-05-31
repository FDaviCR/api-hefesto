const { Op } = require('sequelize');
const LogModel = require('../models/Log');

exports.criarLog = async (data) => {
  const log = await LogModel.create({
    mensagem: data.mensagem,
    usuario: data.usuario,
    tabela: data.tabela,
    acao: data.acao,
    sucesso: data.sucesso,
    erro: data.erro
  });

  return {
    success: true,
    data: { log },
    message: 'Log criado com sucesso',
    error: null
  };
};

exports.buscarLogs = async (filtros) => {
  const where = {};

  if (filtros.usuario) {
    where.usuario = filtros.usuario;
  }

  if (filtros.tabela) {
    where.tabela = filtros.tabela;
  }

  if (filtros.acao) {
    where.acao = filtros.acao;
  }

  if (filtros.createdInicio || filtros.createdFim) {
    where.createdAt = {};

    if (filtros.createdInicio) {
      where.createdAt[Op.gte] = new Date(filtros.createdInicio);
    }

    if (filtros.createdFim) {
      where.createdAt[Op.lte] = new Date(filtros.createdFim);
    }
  }

  const logs = await LogModel.findAll({
    where,
    order: [['createdAt', 'DESC']]
  });

  return {
    success: true,
    data: { logs },
    message: '',
    error: null
  };
};