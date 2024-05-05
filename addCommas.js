function addCommas(num) {
    // Covert the number to a string//
    let str = String(num);

    //Splitting the string into integer and decimals//
    let parts = str.split('.');
    let integerPart = parts[0];
    let decimalPart = parts[1] || '';

    // Add commas to the integer//
    let newInteger = integerPart.replace(',');

    //Combine new integer with decimal part//
    let result = formattedInteger + (decimalPart ? '.' + decimalPart : '');

    return result


}

module.exports = addCommas;