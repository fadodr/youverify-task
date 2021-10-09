function isUnique(str) {
    let arrayOfChar = str.split('')  //split the string into an array of characters
    let setOfChar = new Set(arrayOfChar) //convert the array into a set eliminating duplicate value
    if( setOfChar.size !== arrayOfChar.length){
        return false;
    }
    return true;
}

//Test cases
let strings = ['agboola', 'fuhad', 'lekan', 'apple']
let expectedResults = [ false, true, true, false ]
let results = []

for (let eachString of strings){
    results.push(isUnique(eachString))
}

expectedResults = expectedResults.toString();
results = results.toString();

if( expectedResults === results){
    console.log('Test case passed')
}
else{
    console.log('Test case failed')
}

