const Funcionario = require('../models/Funcionario');

class FuncionarioService {
  async listar() {
    return await Funcionario.findAll();
  }

  async obterPorId(id) {
    const funcionario = await Funcionario.findByPk(id);
    if (!funcionario) {
      throw new Error('Funcionário não encontrado');
    }
    return funcionario;
  }

  async criar(dados) {
    return await Funcionario.create(dados);
  }

  async atualizar(id, dados) {
    const funcionario = await this.obterPorId(id);
    return await funcionario.update(dados);
  }

  async deletar(id) {
    const funcionario = await this.obterPorId(id);
    await funcionario.destroy();
    return { mensagem: 'Funcionário removido com sucesso' };
  }
}

module.exports = new FuncionarioService();
