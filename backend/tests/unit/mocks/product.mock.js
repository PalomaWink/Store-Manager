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

module.exports = { 
  productList, 
  firstProduct,
  returnMock,
  returnMockId,
};