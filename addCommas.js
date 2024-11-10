function addCommas(num) {
    // Covert the number to a string//
    let str = String(num);

    //Splitting the string into integer and decimals//
    let parts = str.split('.');
    let integerPart = parts[0];
    let decimalPart = parts[1] || '';


  // Add commas to the integer part
  let formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Combine new integer with decimal part
  let result = formattedInteger + (decimalPart ? '.' + decimalPart : '');


}

module.exports = addCommas;