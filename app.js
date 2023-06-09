function commafy( num )
{
    var str = num.toString().split('.');
    if (str[0].length >= 4) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 4) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}

// function earningsUK(hourlyPay, hourlyPay2, hourlyPay3)
// {
//     // CALCULATION FOR PERSON 1
//     if(hourlyPay != null)
//     {
//         monthlyPay = hourlyPay * 8 * 20
//         yearlyPay = monthlyPay * 12

//         console.log("PERSON 1")
//         console.log(`Hourly Rate: ${hourlyPay} £`)
//         console.log("Monthly Earings: " + commafy(monthlyPay) + " £ | " + commafy(Math.round(monthlyPay* 133.73)) + " ৳")
//         console.log("Yearly Earings: " + commafy(yearlyPay) + " £ | " + commafy(Math.round(yearlyPay* 133.73)) + " ৳")  
//     }  

//     else {return}

//     // CALCULATION FOR PERSON 2
//     if (hourlyPay2 != null)
//     {
//         console.log("                                           ")
//         monthlyPay2 = hourlyPay2 * 8 * 20
//         yearlyPay2 = monthlyPay2 * 12

//         console.log("PERSON 2")
//         console.log(`Hourly Rate: ${hourlyPay2} £`)
//         console.log("Monthly Earings: " + commafy(monthlyPay2) + " £ | " + commafy(Math.round(monthlyPay2 * 133.73)) + " ৳")
//         console.log("Yearly Earings: " + commafy(yearlyPay2) + " £ | " + commafy(Math.round(yearlyPay2 * 133.73)) + " ৳")  
//     }

//     else {return}

//     // CALCULATION FOR PERSON 3
//     if(hourlyPay3 != null)
//     {
//         console.log("                                           ")
//         monthlyPay3 = hourlyPay3 * 8 * 20
//         yearlyPay3 = monthlyPay3 * 12

//         console.log("PERSON 3")
//         console.log(`Hourly Rate: ${hourlyPay3} £`)
//         console.log("Monthly Earings: " + commafy(monthlyPay3) + " £ | " + commafy(Math.round(monthlyPay3 * 133.73)) + " ৳")
//         console.log("Yearly Earings: " + commafy(yearlyPay3) + " £ | " + commafy(Math.round(yearlyPay3 * 133.73)) + " ৳")  
//     }

//     else {return}

//     console.log("                                           ")

//     // CALCULATION FOR TOTAL EARNINGS
//     subTotalMonth = monthlyPay + monthlyPay2 + monthlyPay3
//     subTotalYear = yearlyPay + yearlyPay2 + yearlyPay3

//     console.log("Subtotal Per Month: " + commafy(subTotalMonth) + " £ | " + commafy(Math.round(subTotalMonth * 133.73)) + " ৳")  
//     console.log("Subtotal Per Year: " + commafy(subTotalYear) + " £ | " + commafy(Math.round(subTotalYear * 133.73)) + " ৳")  
// }


// console.log(earningsUK(10, 10.5, 0))

// console.log("Maximum Cost")
// totalPounds = commafy(1000)
// totalTaka = commafy(Math.round(totalPounds * 133.76))

// console.log(totalPounds + " Pounds")
// console.log(totalTaka + " Taka")

// console.log("Calculated Cost")
// totalPounds = commafy(1270 + 479 + 285 + 315 + 479 + 479 + 250)
// totalTaka = commafy(Math.round(totalPounds * 133.76))

// console.log(totalPounds + " Pounds")
// console.log(totalTaka + " Taka")

let toTaka = 80.20
//133.71 £, 80.20  $, 106.75 $
let currencySymbol = "$"
//£, ৳, $

let hourlyInput = document.getElementById("pay")
let hourlyPay = document.getElementById("hp1")
let monthlyPay = document.getElementById("mp1")
let yearlyPay = document.getElementById("yp1")

let taxInput = document.getElementById("tax")
let rentInput = document.getElementById("rent")
let foodInput = document.getElementById("food")
let miscInput = document.getElementById("misc")
let monthlySavings = document.getElementById("ms1")
let yearlySavings = document.getElementById("ys1")


hourlyInput.addEventListener("change", function (e) {
    earningsCA(hourlyInput.value);
    expensesCA(taxInput.value, rentInput.value, foodInput.value, miscInput.value);
});

taxInput.addEventListener("change", function (e) {
    expensesCA(taxInput.value, rentInput.value, foodInput.value, miscInput.value);
});
rentInput.addEventListener("change", function (e) {
    expensesCA(taxInput.value, rentInput.value, foodInput.value, miscInput.value);
});
foodInput.addEventListener("change", function (e) {
    expensesCA(taxInput.value, rentInput.value, foodInput.value, miscInput.value);
});
miscInput.addEventListener("change", function (e) {
    expensesCA(taxInput.value, rentInput.value, foodInput.value, miscInput.value);
});


function earningsCA(hp1, hp2, hp3)
{
    mp1 = hp1 *  8 * 5 * 4
    yp1 = mp1 * 12

    hourlyPay.innerText = `Hourly Pay: ${commafy(hp1)} ${currencySymbol} | ${commafy(Math.round(hp1 * toTaka))} ৳`

    monthlyPay.innerText = `Monthly Pay: ${commafy(mp1)} ${currencySymbol} | ${commafy(Math.round(mp1 * toTaka))} ৳`

    yearlyPay.innerText = `Yearly Pay: ${commafy(yp1)} ${currencySymbol} | ${commafy(Math.round(yp1 * toTaka))} ৳`
}

function expensesCA(tax, rent, food, misc)
{
//     taxToMoney = (mp1 * tax)/100

//     ms1 = mp1 - taxToMoney - rent - food - misc
//     ys1 = ms1 * 12

//     monthlySavings.innerText = `Monthly Savings: ${commafy(Math.round(ms1))} ${currencySymbol} | ${commafy(Math.round(ms1 * toTaka))} ৳`
//     yearlySavings.innerText = `Yearly Savings: ${commafy(Math.round(ys1))} ${currencySymbol} | ${commafy(Math.round(ys1 * toTaka))} ৳`
    
    yt = (yp1 * tax)/100
    mt = yt/12

    ms1 = mp1 - mt - rent - food - misc
    ys1 = ms1 * 12

    monthlySavings.innerText = `Monthly Savings: ${commafy(Math.round(ms1))} ${currencySymbol} | ${commafy(Math.round(ms1 * toTaka))} ৳`
    yearlySavings.innerText = `Yearly Savings: ${commafy(Math.round(ys1))} ${currencySymbol} | ${commafy(Math.round(ys1 * toTaka))} ৳`
}
