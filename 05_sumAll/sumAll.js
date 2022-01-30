const sumAll = function(number1,number2) {
    if(Number.isInteger(number1)&&Number.isInteger(number2)&&number1>=0&&number2>=0){
        let min = Math.min(number1,number2);
        let max = Math.max(number1,number2);
        let sum = 0;
        for(min;min<=max;min++){
            sum = sum+min;
        }
        return sum;
    }
    else {return "ERROR"};
    
};

// Do not edit below this line
module.exports = sumAll;
