function permutationPalindrome(str) {
    let numberOfCharacter = 128;
    str = str.toLowerCase()  //convert the input string all to lower cases
    let counts = Array(numberOfCharacter).fill(0)

    for(let char of str){ //iterating through each character in the string
        counts[char.charCodeAt()] += 1
    }

    let odd = 0;
    for(let i = 0; i < numberOfCharacter; i++){
        odd += counts[i] % 2
    }
    return odd <= 1
}


//Test cases
let strings = ['Tactcoa', 'raacecr','daddy', 'mamda'];
let expectedResults = [true, true, false, true];
let results = [];

for(let eachString of strings){
    results.push(permutationPalindrome(eachString));
}

expectedResults = expectedResults.toString();
results = results.toString();

if( expectedResults === results){
    console.log('Test case passed')
}
else{
    console.log('Test case failed')
}