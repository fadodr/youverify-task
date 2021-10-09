let count = 1;
function compressString(str) {
    let newString = '';   //new string variable storing the compressed string
    for (let i = 0; i < str.length; i++){
        let currentChar = str[i] 
        let nextChar = str[i + 1]

        if( currentChar === nextChar){
            count +=1;
        }
        else{
            newString += currentChar + String(count);
            count = 1;
        }
    }
    return newString.length < str.length ? newString : str
}

//Test case
let strings = ["aaaahhsssseewrvvv", '', 'bcjuxusbvbn', 'ab',]
let expectedResults = ['a4h2s4e2w1r1v3','', 'bcjuxusbvbn', 'ab']
let results = []

for (let eachString of strings){
    results.push(compressString(eachString))
}

expectedResults = expectedResults.toString();
results = results.toString();

if( expectedResults === results){
    console.log('Test case passed')
}
else{
    console.log('Test case failed')
}

