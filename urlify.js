function urliFy(str){
      str = str.replace(/ /g, '%20')
      return str
}

//Test case
let strings = ["Mr John Smith", ' ', 'my name is agboola fuhad']
let expectedResults = ["Mr%20John%20Smith",'%20', 'my%20name%20is%20agboola%20fuhad']
let results = []

for (let eachString of strings){
    results.push(urliFy(eachString))
}

expectedResults = expectedResults.toString();
results = results.toString();

if( expectedResults === results){
    console.log('Test case passed')
}
else{
    console.log('Test case failed')
}