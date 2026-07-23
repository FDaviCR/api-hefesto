const EmpresaModel = require('../models/Empresa');

exports.criarEmpresa = async (data) => {
  const empresa = await EmpresaModel.create(data);
  return {
    "success": true,
    "data": empresa,
    "message": "Empresa criada com sucesso",
    "error": null
  };
};

exports.listarEmpresas = async () => {
  const empresas = await EmpresaModel.findAll();
  return { 
    "success": true,
    "data": empresas,
    "message": "",
    "error": null
  };
};

exports.obterEmpresa = async (id) => {
  const empresa = await EmpresaModel.findByPk(id);
  if (!empresa) throw new Error('Empresa não encontrada');
  return {
    "success": true,
    "data": empresa,
    "message": "",
    "error": null
  };
};

exports.atualizarEmpresa = async (id, data) => {
  const empresa = await EmpresaModel.findByPk(id);
  if (!empresa) throw new Error('Empresa não encontrada');
  await empresa.update(data);
  return {
    "success": true,
    "data": empresa,
    "message": "Empresa atualizada com sucesso",
    "error": null
  };
};

exports.inativarEmpresa = async (id) => {
  const empresa = await EmpresaModel.findByPk(id);
  if (!empresa) throw new Error('Empresa não encontrada');
  await empresa.update({ ativo: false });
  return {
    "success": true,
    "data": {},
    "message": "Empresa inativada",
    "error": null
  };
};

