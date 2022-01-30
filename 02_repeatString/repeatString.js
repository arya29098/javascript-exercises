const repeatString = function(phrase,numRepeat) {
    if (numRepeat < 0){
        return "ERROR";
    }
    let phraseHolder = "";
    for (let i = 1; i<=numRepeat; i++){
        phraseHolder = phraseHolder + phrase;
    }
    return phraseHolder;
};

// Do not edit below this line
module.exports = repeatString;
