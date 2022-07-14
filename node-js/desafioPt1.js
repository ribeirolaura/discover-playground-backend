module.exports = function getFlag(argumentString) {
    const index = process.argv.indexOf(argumentString) + 1; 
    return process.argv[index];
}

/*

//uma abordagem melhor pode ser 

function getFlagValue(flag) {
    const index = process.argv.indexOf(flag) + 1; 
    return process.argv[index];
}

module.exports = getFlagValue;
*/