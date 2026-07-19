const service = require('../services/usuarioService');
const logService = require('../services/logService');

exports.atualizar = async (req, res, next) => {
  try {
    const usuario = await service.atualizarUsuario(req.params.id, req.body);

    logService.criarLog({
      mensagem: "Usuário atualizado com sucesso",
      usuario: req.userId,
      tabela: "Usuário",
      acao: "Usuário atualizado com ID " + req.params.id,
      sucesso: true,
      erro: false
    });

    res.json(usuario);
  } catch (err) {
    logService.criarLog({
      mensagem: "Erro ao atualizar usuário: " + err.message,
      usuario: req.userId,
      tabela: "Usuário",
      acao: "Usuário atualizado com ID " + req.params.id,
      sucesso: false,
      erro: true
    });

    next(
      {
        "message": "Erro ao atualizar usuário: " + err.message
      }
    );
  }
};

exports.inativar = async (req, res, next) => {
  try {
    const result = await service.inativarUsuario(req.params.id);
    
    logService.criarLog({
      mensagem: "Usuário inativado com sucesso",
      usuario: null,
      tabela: "Usuário",
      acao: "Usuário inativado com ID " + req.params.id,
      sucesso: true,
      erro: false
    });
    
    res.json(result);
  } catch (err) {
    logService.criarLog({
      mensagem: "Erro ao inativar usuário: " + err.message,
      usuario: null,
      tabela: "Usuário",
      acao: "Erro ao inativar usuário com ID " + req.params.id,
      sucesso: false,
      erro: true
    });
    
    next(
      {
        "message": "Erro ao inativar usuário: " + err.message
      }
    );
  }
};