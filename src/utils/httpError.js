// Cria um Error com status HTTP, que o errorMiddleware usa na resposta.
module.exports = (status, message) => {
  const err = new Error(message);
  err.status = status;
  return err;
};
