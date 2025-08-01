const validateId = (req, res, next) => { 
  const { id } = req.params;

  if (!Number.isNaN(Number(id))) {
    next();
  } else {
    res.status(400).send({ message: 'O ID deve ser um número' });
  }
};

module.exports = validateId;