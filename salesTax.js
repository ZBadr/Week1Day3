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


function calculateSalesTax(salesData, taxRates) {
  var finalCompanyData = {};
  for (var z of salesData) {
    //console.log(z);
    if (finalCompanyData.hasOwnProperty(z.name)) {
      var totalSales = totalCompanySales(z.sales);
      finalCompanyData[z.name].ts += totalSales;
      finalCompanyData[z.name].tt += totalTax(totalSales, taxRates[z.province]);

    } else {
      var totalSales = totalCompanySales(z.sales);
      finalCompanyData[z.name] = {
          ts: totalSales,
          tt: totalTax(totalSales, taxRates[z.province])
        };

    }
    // console.log(finalCompanyData);
  }
  return finalCompanyData;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

//console.log(totalCompanySales([1,2,3]));

function totalCompanySales(salesArray) {
  var total = 0;
  for(var i in salesArray) {
    total += salesArray[i];
  }
  return total;
}


//console.log(totalTax(100, 0.10));
function totalTax(sales, tax) {
  var totalTax = sales * tax;
  return totalTax;
}






// function str(companySalesData[].province) {
//   var x = "";
//   if (companySalesData[z].province === 'BC') {
//     x = 0.12;
//   } else if (companySalesData[z].province === 'AB') {
//     x = 0.05;
//   } else if (companySalesData[z].province === 'SK') {
//     x = 0.10;
//   }
// return x;
// }
// console.log(str(companySalesData[0].province));






// var temp = {};
// for (var i in companySalesData) {
//   console.log(companySalesData[i].sales.length);
//   temp[i.name] = {}
//   for (var j=0; j < companySalesData[i].sales.length; j++) {
//   temp[i] += companySalesData[i].sales[j];
// }

//   console.log(temp);
// // }
// //console.log(temp);