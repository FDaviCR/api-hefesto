const clienteService = require('../services/clienteService');
const { randomUUID } = require('crypto');

class ClienteController {
  async listar(req, res, next) {
    try {
      const clientes = await clienteService.listar();
      return res.status(200).json(clientes);
    } catch (error) {
      next(error);
    }
  }

  async obterPorId(req, res, next) {
    try {
      const cliente = await clienteService.obterPorId(req.params.id);
      return res.status(200).json(cliente);
    } catch (error) {
      next(error);
    }
  }

  async criar(req, res, next) {
    try {
      const novoCliente = await clienteService.criar({ ...req.body, sys_id: randomUUID() });
      return res.status(201).json(novoCliente);
    } catch (error) {
      next(error);
    }
  }

  async atualizar(req, res, next) {
    try {
      const clienteAtualizado = await clienteService.atualizar(req.params.id, req.body);
      return res.status(200).json(clienteAtualizado);
    } catch (error) {
      next(error);
    }
  }

  async deletar(req, res, next) {
    try {
      const resultado = await clienteService.deletar(req.params.id);
      return res.status(200).json(resultado);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ClienteController();
