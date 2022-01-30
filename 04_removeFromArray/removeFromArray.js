const removeFromArray = function(myArray, ...args) {
    let loopMax = myArray.length;

    for(let i=0;i<args.length;i++){
        for(let j=0;j<loopMax;j++){
            if (myArray[j]===args[i]){
                myArray.splice(j,1);
                loopMax = loopMax - 1;
                j = j - 1;
            }
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
