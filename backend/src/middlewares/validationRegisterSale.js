const validateRegisterNewSale = (req, res, next) => {
 const hasProductId = req.body.every((item) => item.productId);
  if (!hasProductId) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  const hasQuantity = req.body.every((item) => item.quantity !== undefined);
  if (!hasQuantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  const isValidateQuantity = req.body.every((item) => item.quantity >= 1);
  if (!isValidateQuantity) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

module.exports = validateRegisterNewSale;