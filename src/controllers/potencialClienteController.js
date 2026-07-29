const potencialClienteService = require('../services/potencialClienteService');
const logService = require('../services/logService');

const potencialClienteController = {

  async listar(req, res) {
    const resultado = await potencialClienteService.listar();

    await logService.criarLog({
      mensagem: resultado.message,
      usuario: req.userId,
      tabela: "PotencialCliente",
      acao: "Listagem de potenciais clientes",
      sucesso: resultado.success,
      erro: !resultado.success
    });

    return res
      .status(resultado.success ? 200 : 500)
      .json(resultado);
  },

  async buscarPorId(req, res) {
    const { id } = req.params;

    const resultado = await potencialClienteService.buscarPorId(id);

    await logService.criarLog({
      mensagem: resultado.message,
      usuario: req.userId,
      tabela: "PotencialCliente",
      acao: resultado.success
        ? "Potencial cliente consultado: " + resultado.data.nome
        : "Tentativa de consulta do potencial cliente: " + id,
      sucesso: resultado.success,
      erro: !resultado.success
    });

    if (
      !resultado.success &&
      resultado.error === 'Potencial cliente não encontrado'
    ) {
      return res.status(404).json(resultado);
    }

    return res
      .status(resultado.success ? 200 : 500)
      .json(resultado);
  },

  async criar(req, res) {
    const {
      nome,
      telefone,
      email,
      cliente
    } = req.body;

    if (!nome) {
      const resultado = {
        success: false,
        data: null,
        message: 'O campo nome é obrigatório',
        error: 'Campo nome não informado'
      };

      await logService.criarLog({
        mensagem: resultado.message,
        usuario: req.userId,
        tabela: "PotencialCliente",
        acao: "Tentativa de criação de potencial cliente sem informar o nome",
        sucesso: false,
        erro: true
      });

      return res.status(400).json(resultado);
    }

    const resultado = await potencialClienteService.criar({
      nome,
      telefone,
      email,
      cliente
    });

    await logService.criarLog({
      mensagem: resultado.message,
      usuario: req.userId,
      tabela: "PotencialCliente",
      acao: resultado.success
        ? "Potencial cliente criado: " + resultado.data.nome
        : "Tentativa de criação de potencial cliente: " + nome,
      sucesso: resultado.success,
      erro: !resultado.success
    });

    return res
      .status(resultado.success ? 201 : 500)
      .json(resultado);
  },

  async atualizar(req, res) {
    const { id } = req.params;

    const resultado = await potencialClienteService.atualizar(
      id,
      req.body
    );

    await logService.criarLog({
      mensagem: resultado.message,
      usuario: req.userId,
      tabela: "PotencialCliente",
      acao: resultado.success
        ? "Potencial cliente atualizado: " + resultado.data.nome
        : "Tentativa de atualização do potencial cliente: " + id,
      sucesso: resultado.success,
      erro: !resultado.success
    });

    if (
      !resultado.success &&
      resultado.error === 'Potencial cliente não encontrado'
    ) {
      return res.status(404).json(resultado);
    }

    return res
      .status(resultado.success ? 200 : 500)
      .json(resultado);
  },

  async excluir(req, res) {
    const { id } = req.params;

    const resultado = await potencialClienteService.excluir(id);

    await logService.criarLog({
      mensagem: resultado.message,
      usuario: req.userId,
      tabela: "PotencialCliente",
      acao: resultado.success
        ? "Potencial cliente excluído: " + resultado.data.nome
        : "Tentativa de exclusão do potencial cliente: " + id,
      sucesso: resultado.success,
      erro: !resultado.success
    });

    if (
      !resultado.success &&
      resultado.error === 'Potencial cliente não encontrado'
    ) {
      return res.status(404).json(resultado);
    }

    return res
      .status(resultado.success ? 200 : 500)
      .json(resultado);
  }

};

module.exports = potencialClienteController;
