

const friendsNames = ["babul", "abul", 'habul'];
console.log(friendsNames)
friendsNames[0]= 'bulbul';
console.log(friendsNames);


const numbers = [23, 45, 45, 56 ];
console.log(numbers)
// add last items
numbers.push(34);
console.log(numbers)
numbers.push("number naui");
console.log(numbers)
// pop remove last item
numbers.pop()
console.log(numbers)
numbers.pop()
console.log(numbers)

//  shift ---> first item ta remove korbe
numbers.shift()
console.log(numbers)
// unshift  ---> first item add korbe
numbers.unshift("this is unshift numbers")
console.log(numbers)


//  length
const arrayLength = numbers.length;
console.log(typeof numbers)
