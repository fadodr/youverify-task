function isOneAway(str1, str2){
   let lengthOfStr1 = str1.length
   let lengthOfStr2 = str2.length
   if( Math.abs( lengthOfStr1 - lengthOfStr2 ) > 1){
       return false
   }

   let count = 0;
   let i = 0;
   let j = 0;
   while(i < lengthOfStr1 && j < lengthOfStr2){
       if(str1[i] !== str2[j]){

            if(count === 1){
                return false
            }

            if(lengthOfStr1 > lengthOfStr2){
                i++
            }
            else if(lengthOfStr2 > lengthOfStr1){
                j++
            }
            else{
                i++;
                j++
            }

            count++
       }
       else{
           i++
           j++
       }
   }
   if( i < lengthOfStr1 || j < lengthOfStr2){
       count++
   }
   return count <= 1
}

//Test case
let pairOfStrings = [['pale', 'ple'], ['pales','pale'], ['pale','bale'], ['pale','bake']]
let expectedResults = [true, true, true, false]
let results =[]

for (let eachString of pairOfStrings){
   results.push(isOneAway(eachString.toString().split(',')[0], eachString.toString().split(',')[1]))
}

expectedResults = expectedResults.toString();
results = results.toString();
console.log(results)

if( expectedResults === results){
   console.log('Test case passed')
}
else{
   console.log('Test case failed')
}