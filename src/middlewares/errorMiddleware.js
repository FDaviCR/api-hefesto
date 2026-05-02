module.exports = (err, req, res, next) => {
  res.status(400).json(
    { 
      "success": false,
      "data": null,
      "message": err.message,
      "error": true
    }
  );
};