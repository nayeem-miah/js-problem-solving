// const Math = {
//     min : function min(num1, num2){
//         return num2 ;
//     }
// }
// console.log(Math.min);

const min = Math.min(2, 34, 45, 56, 6, -11)
const max = Math.max(2, 34, 45, 56, 6)
console.log("min :", min, "max:", max);

console.log(Math.PI)
console.log(Math.abs(-44));  // + , - remove kore deba
console.log(Math.abs(5-10))

const number = 2.3434545
const number2 = 4.679
console.log(Math.round(number));   // round er kaj holo kachakachi man deba
console.log(Math.round(number2))

console.log(Math.floor(2.9999))  // floor er kaj holo nicher man debo
console.log(Math.ceil(3.2323))    // ceil er kaj holo purno sonka debo uporat ta ..
console.log(Math.random()*10)  // 0-9 pojonto random number generate kore debo


const randomNumber = Math.round(Math.random()*10);
// console.log("random numbers is : ", randomNumber)


//  js lottery ;
const names = ["habib", "rahim", "karim", "abul", "nayeem"];
console.log(names.length,  "length");
const selectedNumber = Math.round(Math.random()*names.length);
console.log("selectedNumber", selectedNumber);
if(selectedNumber ==0){
    console.log("no found name");
}
if(selectedNumber){
    const name = names[selectedNumber-1]
    console.log(name);

}


