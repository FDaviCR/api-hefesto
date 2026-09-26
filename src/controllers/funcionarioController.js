const funcionarioService = require('../services/funcionarioService');

class FuncionarioController {
  async listar(req, res, next) {
    try {
      const funcionarios = await funcionarioService.listar();
      return res.status(200).json(funcionarios);
    } catch (error) {
      next(error);
    }
  }

  async obterPorId(req, res, next) {
    try {
      const funcionario = await funcionarioService.obterPorId(req.params.id);
      return res.status(200).json(funcionario);
    } catch (error) {
      next(error);
    }
  }

  async criar(req, res, next) {
    try {
      const novoFuncionario = await funcionarioService.criar(req.body);
      return res.status(201).json(novoFuncionario);
    } catch (error) {
      next(error);
    }
  }

  async atualizar(req, res, next) {
    try {
      const funcionarioAtualizado = await funcionarioService.atualizar(req.params.id, req.body);
      return res.status(200).json(funcionarioAtualizado);
    } catch (error) {
      next(error);
    }
  }

  async deletar(req, res, next) {
    try {
      const resultado = await funcionarioService.deletar(req.params.id);
      return res.status(200).json(resultado);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new FuncionarioController();
