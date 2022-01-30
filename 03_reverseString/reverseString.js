const reverseString = function(myString) {
    let stringReversed = "";
    for (let i = myString.length-1; i >=0; i--){
        stringReversed = stringReversed + myString[i].toString();
    }
    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
