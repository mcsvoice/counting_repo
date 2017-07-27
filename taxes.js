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

//I need to get all the sales #s together somehow
//I need the sales total to be separated by name and province
//I need the sales total to be multiplied by the tax rate and the tax rate to be stored
//I need to create an object with the NAME from the first object in a new object
//I need to set totalSales and totalTaxes in that object.

//"FOR every property IN the obj object, assign each property to the PROPT variable in turn".

function calculateSalesTax(salesData, taxRates) {

 results = {};

// omg just use this i a million times sure why not it all happens on the same step jesus no
for (var i in salesData) {
  var sumThing = salesData[i].sales.reduce(function(a, b) {

    //thank u sum.js im glad I cut corners in you
    return a + b;

  }, 0); //this is exactly from MDN because I don't understand
  //THIS "ADDS" BY REDUCING I HATE IT


  if (!(salesData[i].name in results)) {
    results[salesData[i]['name']] = {};
  }
  //Don said to use ! (no's) instead of the opposite today so it's smaller?

  if (!('totalSales' in results[salesData[i]['name']])) {
    results[salesData[i]['name']]['totalSales'] = 0;
    //^ DO   ^ FROM  ^LOOP ^ADULT    ^BABY       ^ DAVID SAYS INITIALIZE
  }
  results[salesData[i]['name']]['totalSales'] += sumThing;
  //console.log(results[salesData[i]['name']]['totalSales']);
  //

  if (!('totalTaxes' in results[salesData[i]['name']])) {
    results[salesData[i]['name']]['totalTaxes'] = 0;
  }
  //
  results[salesData[i]['name']]['totalTaxes'] += sumThing * taxRates[salesData[i].province];
}
console.log(results);
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

//use reduce?

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