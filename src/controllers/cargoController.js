const cargoService = require('../services/cargoService');
const logService = require('../services/logService');

const cargoController = {

  async listar(req, res) {
    const resultado = await cargoService.listar();

    await logService.criarLog({
      mensagem: resultado.message,
      usuario: req.userId,
      tabela: "Cargo",
      acao: "Listagem de cargos",
      sucesso: resultado.success,
      erro: !resultado.success
    });

    return res
      .status(resultado.success ? 200 : 500)
      .json(resultado);
  },

  async buscarPorId(req, res) {
    const { id } = req.params;

    const resultado = await cargoService.buscarPorId(id);

    await logService.criarLog({
      mensagem: resultado.message,
      usuario: req.userId,
      tabela: "Cargo",
      acao: "Cargo consultado: " + id,
      sucesso: resultado.success,
      erro: !resultado.success
    });

    if (!resultado.success && resultado.error === 'Cargo não encontrado') {
      return res.status(404).json(resultado);
    }

    return res
      .status(resultado.success ? 200 : 500)
      .json(resultado);
  },

  async criar(req, res) {
    const {
      cargo,
      descricao,
      permissao,
      empresa,
      ativo
    } = req.body;

    if (!cargo) {
      const resultado = {
        success: false,
        data: null,
        message: 'O campo cargo é obrigatório',
        error: 'Campo cargo não informado'
      };

      await logService.criarLog({
        mensagem: resultado.message,
        usuario: req.userId,
        tabela: "Cargo",
        acao: "Tentativa de criação de cargo sem informar o cargo",
        sucesso: false,
        erro: true
      });

      return res.status(400).json(resultado);
    }

    const resultado = await cargoService.criar({
      cargo,
      descricao,
      permissao,
      empresa,
      ativo
    });

    await logService.criarLog({
      mensagem: resultado.message,
      usuario: req.userId,
      tabela: "Cargo",
      acao: resultado.success
        ? "Cargo criado: " + resultado.data.cargo
        : "Tentativa de criação de cargo: " + cargo,
      sucesso: resultado.success,
      erro: !resultado.success
    });

    return res
      .status(resultado.success ? 201 : 500)
      .json(resultado);
  },

  async atualizar(req, res) {
    const { id } = req.params;

    const resultado = await cargoService.atualizar(
      id,
      req.body
    );

    await logService.criarLog({
      mensagem: resultado.message,
      usuario: req.userId,
      tabela: "Cargo",
      acao: resultado.success
        ? "Cargo atualizado: " + resultado.data.cargo
        : "Tentativa de atualização do cargo: " + id,
      sucesso: resultado.success,
      erro: !resultado.success
    });

    if (!resultado.success && resultado.error === 'Cargo não encontrado') {
      return res.status(404).json(resultado);
    }

    return res
      .status(resultado.success ? 200 : 500)
      .json(resultado);
  },

  async excluir(req, res) {
    const { id } = req.params;

    const resultado = await cargoService.excluir(id);

    await logService.criarLog({
      mensagem: resultado.message,
      usuario: req.userId,
      tabela: "Cargo",
      acao: resultado.success
        ? "Cargo excluído: " + resultado.data.cargo
        : "Tentativa de exclusão do cargo: " + id,
      sucesso: resultado.success,
      erro: !resultado.success
    });

    if (!resultado.success && resultado.error === 'Cargo não encontrado') {
      return res.status(404).json(resultado);
    }

    return res
      .status(resultado.success ? 200 : 500)
      .json(resultado);
  }

};

module.exports = cargoController;
