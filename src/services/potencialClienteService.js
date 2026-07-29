const PotencialCliente = require('../models/PotencialCliente');

const potencialClienteService = {

  async listar() {
    try {
      const potenciaisClientes = await PotencialCliente.findAll({
        order: [['id', 'ASC']]
      });

      return {
        success: true,
        data: potenciaisClientes,
        message: 'Potenciais clientes listados com sucesso',
        error: null
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: 'Erro ao listar potenciais clientes',
        error: error.message
      };
    }
  },

  async buscarPorId(id) {
    try {
      const potencialCliente = await PotencialCliente.findByPk(id);

      if (!potencialCliente) {
        return {
          success: false,
          data: null,
          message: 'Potencial cliente não encontrado',
          error: 'Potencial cliente não encontrado'
        };
      }

      return {
        success: true,
        data: potencialCliente,
        message: 'Potencial cliente encontrado com sucesso',
        error: null
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: 'Erro ao buscar potencial cliente',
        error: error.message
      };
    }
  },

  async criar(dados) {
    try {
      const potencialCliente = await PotencialCliente.create(dados);

      return {
        success: true,
        data: potencialCliente,
        message: 'Potencial cliente criado com sucesso',
        error: null
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: 'Erro ao criar potencial cliente',
        error: error.message
      };
    }
  },

  async atualizar(id, dados) {
    try {
      const potencialCliente = await PotencialCliente.findByPk(id);

      if (!potencialCliente) {
        return {
          success: false,
          data: null,
          message: 'Potencial cliente não encontrado',
          error: 'Potencial cliente não encontrado'
        };
      }

      await potencialCliente.update(dados);

      return {
        success: true,
        data: potencialCliente,
        message: 'Potencial cliente atualizado com sucesso',
        error: null
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: 'Erro ao atualizar potencial cliente',
        error: error.message
      };
    }
  },

  async excluir(id) {
    try {
      const potencialCliente = await PotencialCliente.findByPk(id);

      if (!potencialCliente) {
        return {
          success: false,
          data: null,
          message: 'Potencial cliente não encontrado',
          error: 'Potencial cliente não encontrado'
        };
      }

      await potencialCliente.destroy();

      return {
        success: true,
        data: potencialCliente,
        message: 'Potencial cliente excluído com sucesso',
        error: null
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: 'Erro ao excluir potencial cliente',
        error: error.message
      };
    }
  }

};

module.exports = potencialClienteService;