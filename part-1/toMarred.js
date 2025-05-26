//  TO Married 
function toMarred(person1, person2){
    if(person1.gender === person2.gender){
        return false
    }
  
    if(Math.abs(person1.age - person2.age) > 7){
        return false
    }
    return true
}

const married = toMarred({gender : "female", age: 16}, {gender : "male", age: 21})
// console.log(married);



const person = {
    age : 18
}
const person_2 ={
    age: 14
}

// if(person.age >= 18) {
//     console.log("this age in getter then 18")
// }
//  else{
//     console.log("this age is not getter then 18")
// }


