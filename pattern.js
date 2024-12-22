const add = function (init, priceOfEach) {
  return (init + priceOfEach);
};

const average = function (value, numOfElement) {
  return value / numOfElement;
};

const belowAverage = function (prices, comparisonKey) {
  const value = prices.reduce(add, 0);
  const numOfElement = prices.length;
  const averagePrice = average(value, numOfElement);

  return function (productDetails) {
    return productDetails[comparisonKey] < averagePrice;
  };
};

const getPrices = function (comparisonKey) {
  return function (product) {
    return product[comparisonKey]; 
  } 
};

const filterBelowAveragePrice = function (products) {
  const prices = products.map(getPrices('price'));

  return products.filter(belowAverage(prices, 'price'));
};

console.log(
  filterBelowAveragePrice([{ name: "item1", price: 10 },
  { name: "item2", price: 14 }, { name: "item3", price: 15 }]),
  filterBelowAveragePrice([{ name: "bottle", price: 17 },
  { name: "mug", price: 25 }, { name: "glass", price: 11 },
  { name: "spoon", price: 12 }])
);

const compliment = function (f) {
  return function (...args) {
    return !f(...args);
  };
};

const filterHighValueOrders = function (orders) {
  const prices = orders.map(getPrices('amount'));
  return orders.filter(compliment(belowAverage(prices, 'amount')));
};

console.log(
  filterHighValueOrders([{ orderId: 1, amount: 20 }, { orderId: 2, amount: 50 },
  { orderId: 3, amount: 10 }]),
  filterHighValueOrders([{ orderId: 4, amount: 60 }, { orderId: 5, amount: 0 },
  { orderId: 6, amount: 15 }])
);