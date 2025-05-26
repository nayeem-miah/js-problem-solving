// function : function hole ekte block of code . 

//  function er syntax
function firstFunction(){
    console.log("this is function code ");
    console.log(12+45);
}

// firstFunction()

// different numbers sum of a function

function sum(num1, num2, num3){
   const total = num1+num2+num3;
//    console.log(total);
return total;
}
// sum(23, 43)
// sum(45, 56)
// console.log(sum(4,34));
// const sumOfNumbers = sum(5, 4, 56);
// console.log(sumOfNumbers);

function square (num){
        const totlaNumbers = num*num;
        console.log(totlaNumbers);
}
// square(4)
// square(5)

//  function loopingNumbers
function loopingNumbers (){{
    for (let i = 1; i < 100; i++) {
       if(i%2 ===0){
        console.log(i);
       }
    }
}}
// loopingNumbers()


//  different of return and call function
// function qbeNumbers (num){
//         number = num * num * num ;
//         return number;
// }
// console.log(qbeNumbers(2));

function qbeNumbers (num){
    const number = num * num * num ;
    console.log(num,number);  
}

// console.log("call this function");
// qbeNumbers(4)
// console.log("again call this function ---------------");
// qbeNumbers(3)
// console.log("end this function .................");
//arraw function ---> how to dealer array function 

// const variableName = () =>{

// }

//  different two numbers 

function differentTwoNumbers (num1, num2){
    if(num1 > num2){
        // console.log("number 1 jodi boro hoi tahole");
        const  different = num1 - num2
        console.log(`different number is ${num1} - ${num2}`,"=",different);
      }
      else{
        // console.log("number 2 jodi boro hoi tahole");
        const different = num2 - num1;
        console.log(`different number is ${num2} - ${num1}` ,"=",different);
      }
}

// differentTwoNumbers(452, 54)
// differentTwoNumbers(45, 55)



//  return function -----------------
// return ---> return hole kuno ekta value input a dewer por output er jonno wati kora

function returnValue (num){
    //  tumii ai number ke neya kisu neya aso

    if(num> 100){
        const product = `${num} ===> jaw geya birany neya aso` ;
        return product
    }
    else if (num > 50){
        const product = `${num} ===> jaw geya kisu singra neya aso`;
        return product ;
    }
    else if(num >1){
        const product = `${num} ===> jaw geya pen neya aso`;
        return product ;    }
    else{
        const product = `${num} ===> hudai tumake dakse moja newar jonno`;
        // console.log(typeof product);
        return product ;   
        // console.log("return er por ar kuno kaj hobe na ");
    }

}

// const output = returnValue(123)
// console.log(output);
const output = returnValue(0);
console.log(output);