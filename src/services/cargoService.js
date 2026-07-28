const Cargo = require('../models/Cargo');

const cargoService = {
  async listar() {
    try {
      const cargos = await Cargo.findAll({
        order: [['id', 'ASC']]
      });

      return {
        success: true,
        data: cargos,
        message: 'Cargos listados com sucesso',
        error: null
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: 'Erro ao listar cargos',
        error: error.message
      };
    }
  },

  async buscarPorId(id) {
    try {
      const cargo = await Cargo.findByPk(id);

      if (!cargo) {
        return {
          success: false,
          data: null,
          message: 'Cargo não encontrado',
          error: 'Cargo não encontrado'
        };
      }

      return {
        success: true,
        data: cargo,
        message: 'Cargo encontrado com sucesso',
        error: null
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: 'Erro ao buscar cargo',
        error: error.message
      };
    }
  },

  async criar(dados) {
    try {
      const cargo = await Cargo.create(dados);

      return {
        success: true,
        data: cargo,
        message: 'Cargo criado com sucesso',
        error: null
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: 'Erro ao criar cargo',
        error: error.message
      };
    }
  },

  async atualizar(id, dados) {
    try {
      const cargo = await Cargo.findByPk(id);

      if (!cargo) {
        return {
          success: false,
          data: null,
          message: 'Cargo não encontrado',
          error: 'Cargo não encontrado'
        };
      }

      await cargo.update(dados);

      return {
        success: true,
        data: cargo,
        message: 'Cargo atualizado com sucesso',
        error: null
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: 'Erro ao atualizar cargo',
        error: error.message
      };
    }
  },

  async excluir(id) {
    try {
      const cargo = await Cargo.findByPk(id);

      if (!cargo) {
        return {
          success: false,
          data: null,
          message: 'Cargo não encontrado',
          error: 'Cargo não encontrado'
        };
      }

      await cargo.destroy();

      return {
        success: true,
        data: cargo,
        message: 'Cargo excluído com sucesso',
        error: null
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        message: 'Erro ao excluir cargo',
        error: error.message
      };
    }
  }
};

module.exports = cargoService;