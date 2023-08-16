const date = '2023-08-16T15:29:09.000Z';

const saleList = [
  {
    saleId: 1,
    date,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date,
    productId: 3,
    quantity: 15,
  },
];

const saleListWithoutSaledId = [
  {
    date,
    productId: 1,
    quantity: 5,
  },
  {
    date,
    productId: 2,
    quantity: 10,
  },
  {
    date,
    productId: 3,
    quantity: 15,
  },
];

const saleListId = [
  {
    date,
    productId: 1,
    quantity: 5,
  },
  {
    date,
    productId: 2,
    quantity: 10,
  },
];

const returnMock = {
  status: 200, 
  data: saleListWithoutSaledId,
};

const returnMockSaleList = {
  status: 200, 
  data: saleList,
};

const returnMockId = {
  status: 200, 
  data: [
    {
      date,
      productId: 1,
      quantity: 5,
    },
    {
      date,
      productId: 2,
      quantity: 10,
    },
  ],
};

module.exports = {
  saleList,
  saleListId,
  saleListWithoutSaledId,
  returnMock,
  returnMockId,
  returnMockSaleList,
};