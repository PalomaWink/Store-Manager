const productList = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const firstProduct = {
  id: 1,
  name: 'Martelo de Thor',
};

const returnMock = {
  status: 200, 
  data: productList,
};

const returnMockId = {
  status: 200, 
  data: productList[0],
};

const registerNewProduct = {
  name: 'Fishbones',
};

const returnMistakeName = { message: '"name" is required' };

const returnMistakeNameLength = { message: '"name" length must be at least 5 characters long' };

const updateProduct = { id: 1, name: 'Capa do Super-Homem' };

module.exports = { 
  productList, 
  firstProduct,
  returnMock,
  returnMockId,
  registerNewProduct,
  returnMistakeName,
  returnMistakeNameLength,
  updateProduct,
};