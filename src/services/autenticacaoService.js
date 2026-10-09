const User = require('../models/Usuario');
const bcrypt = require('bcrypt');
const { generateToken } = require('../config/jwt');
const { ROLES, LISTA_ROLES } = require('../config/roles');
const httpError = require('../utils/httpError');
const { garantirEmpresaAtiva } = require('../utils/empresa');

exports.registrar = async (data) => {
  if (![ROLES.ADMIN, ROLES.GERENTE].includes(solicitante.role)) {
    throw httpError(403, 'Sem permissão para cadastrar usuários');
  }

  const { usuario, email, senha, cargo, tema } = body;
  if (!senha) throw httpError(400, 'A senha é obrigatória');

  const role = body.role || ROLES.FUNCIONARIO;
  if (!LISTA_ROLES.includes(role)) {
    throw httpError(400, 'Role inválida. Use: ' + LISTA_ROLES.join(', '));
  }

  let empresa = body.empresa === undefined || body.empresa === null ? null : Number(body.empresa);

  if (solicitante.role === ROLES.GERENTE) {
    if (role !== ROLES.FUNCIONARIO && role !== ROLES.CORRETOR) {
      throw httpError(403, 'Gerente só pode cadastrar funcionários');
    }
    if (empresa !== null && empresa !== solicitante.empresa) {
      throw httpError(403, 'Gerente só pode cadastrar usuários da própria empresa');
    }
    empresa = solicitante.empresa;
  } else if (role !== ROLES.ADMIN && empresa === null) {
    throw httpError(400, 'Informe a empresa do usuário');
  }

  if (empresa !== null) await garantirEmpresaAtiva(empresa);

  const hash = await bcrypt.hash(data.senha, 10);
  const user = await User.create({ ...data, senha: hash });

  return {
    "success": true,
    "data": { id: user.id, name: user.nome, email: user.email },
    "message": "Usuário registrado com sucesso",
    "error": null
  };
};

exports.login = async (usuario, senha) => {
  const user = await User.findOne({ where: { usuario } });
  if (!user) throw new Error('Usuário não encontrado');
  if (!user.ativo) throw new Error('Usuário inativo');

  const valid = await bcrypt.compare(senha, user.senha);
  

  const token = generateToken({ id: user.id });
  return {
    "success": true,
    "data": { token, usuario: user.usuario, email: user.email },
    "message": "Login realizado com sucesso",
    "error": null
  };
};