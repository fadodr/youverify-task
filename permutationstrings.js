function stringsArePermutation(str1, str2) {
    let lengthOfStr1 = str1.length;
    let lengthOfStr2  = str2.length;

    if( lengthOfStr1 !== lengthOfStr2){
        return false;
    }

    let arrayCharOfStr1 = str1.split('');
    let arrayCharOfStr2 = str2.split('');

    arrayCharOfStr1.sort();
    arrayCharOfStr2.sort();

    for( let i = 0; i < lengthOfStr1; i++){
        if( arrayCharOfStr1[i] !== arrayCharOfStr2[i]){
            return false;
        }
    }
    return true;
}

//Test case
 let pairOfStrings = [['wrqy', 'nmxh'], ['racet','arcte'], ['react','tecarse'], ['test','stte']]
 let expectedResults = [false, true, false, true]
 let results =[]

 for (let eachString of pairOfStrings){
    results.push(stringsArePermutation(eachString.toString().split(',')[0], eachString.toString().split(',')[1]))
}

expectedResults = expectedResults.toString();
results = results.toString();

if( expectedResults === results){
    console.log('Test case passed')
}
else{
    console.log('Test case failed')
}