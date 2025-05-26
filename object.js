EventTarget//  what is object || how to declare a object


// const person = {
//     name: "Aber hossien",
//     age :19,
//     profession : "student", 
//     books: {
//         "boi-name" :"islamic study",
//         "publisher date" : "12 dec 2025"
//     }
// }

// console.log(person)

// console.log(person.profession)  // prai somoi (.) notation use korbo
// console.log(person['name']);   // spacial use case a use hobe powerful

// const boosName = person.books
// console.log(boosName['boi-name']);
// console.log(person['books']['publisher date'])

//  looping object   ----> for in loop use kore hoi 
const studentInfo  = {
    student_name : "Abdullah",
    student_age:23,
    student_email : "abdullah@gmail.com",
    student_school_name : "ABG high school",
    student_class : "nine",
    books_types: ["funny books", "joks books", "Islamic Books"]
}

// for(const studentData in studentInfo){
//     console.log(studentData);
// }

//  how to find property and values 
// const keys = Object.keys(studentInfo)
// const values = Object.values(studentInfo)


// for( const key of keys ){
//     // console.log(key)
//     for(const value of values){
//         console.log(key , ":", value)
//     }
// }
// console.log(keys, values);


//  Array of object
const products = [
    {name : "Mobile", price : 4555, brand: "sumsung"},
    {name : "Laptop", price : 45000, brand: "lenovo"},
    {name : "headPhone", price : 455, brand: "N/A"},
    {name : "T-shart", price : 456, brand: "easy"},
    {name : "Mobile", price : 4555, brand: "nokia"},
]

// console.log(products);

// for(let i =0; i<products.length ; i++){
//     console.log(products[i]);
// }

// for(const product of products){
//     console.log(product.price);
// }


//  map korle array return korbe
const productPrice = products.map(prod => prod.price)
// console.log(productPrice.reverse());
// console.log(productPrice.sort());
// const product = products.filter(prod=> prod.name ==='Mobile')
// console.log(product);
const product = products.find(prod=> prod.name ==='Mobile')
console.log(product);
