const Cliente = require('../models/Cliente');

class ClienteService {
  async listar() {
    return await Cliente.findAll();
  }

  async obterPorId(id) {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      throw new Error('Cliente não encontrado');
    }
    return cliente;
  }

  async criar(dados) {
    return await Cliente.create(dados);
  }

  async atualizar(id, dados) {
    const cliente = await this.obterPorId(id);
    return await cliente.update(dados);
  }

  async deletar(id) {
    const cliente = await this.obterPorId(id);
    await cliente.destroy();
    return { mensagem: 'Cliente removido com sucesso' };
  }
}

module.exports = new ClienteService();
