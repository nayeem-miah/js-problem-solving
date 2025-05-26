/**
 * function takes a array as parameter 
 * give me the average of the odd numbers in this array
 * 
*/

const  oddArray = []
let sum = 0 ;
function oddAverage(array){
   for (const num of array) {
       if(num % 2 !== 0) {
        oddArray.push(num)
    }  
}
// console.log(oddArray);
for(const num of oddArray){
    sum = sum + num
}
       const average = sum / oddArray.length   
       return average       
}


const array = [44, 54, 34, 3, 56, 5]
const average = oddAverage(array)
// console.log('average', average);

// console.log("oddArray", oddArray);

//  even number average
const evenArray = []
let total = 0
function evenNumbers (numbers){
    for(const number of numbers){
        if (number % 2 === 0 ) {
           evenArray.push(number)
        }
    }
    for (const num of evenArray) {
        total = total + num; 
    }
    const average = total / evenArray.length;
    return average

}

const numbers = [12, 34, 45,6];
const evenNumbersOfAverage = evenNumbers(numbers)
console.log("even average numbers in this array =", evenNumbersOfAverage);