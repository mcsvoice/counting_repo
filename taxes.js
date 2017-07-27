var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

//I need to get all the sales #s out and add them up
//I need the sales total to be separated by name and province
//I need the sales total to be multiplied by the tax rate and the tax rate to be stored
//I need to create an object with the NAME from the first object in a new object
//I need to set totalSales and totalTaxes in that object.

//"FOR every property IN the obj object, assign each property to the PROPT variable in turn".

function calculateSalesTax(salesData, taxRates) {
  for (var i = 0; i < salesData.length; i++) {
    var province = salesData.province;
  }
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/


// var obj = {};

// obj.first = 1;
// obj['second-hyphen'] = 2;

// var key = 'third';

// obj.key = 3;
// obj[key] = 3;


// {
//   first: ['1']
//   second: 2,
//   key: 3,
//   third: 3
// }