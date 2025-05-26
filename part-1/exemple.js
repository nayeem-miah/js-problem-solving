
//  creating a array of object and find out simler book name

const bookCollection = [
    {
        book_no :1,
        book_Name : "chemistry"
    },
    {
        book_no : 2,
        book_Name : "Math"
    },
    {
        book_no : 3,
        book_Name : "Math"
    },
    {
        book_no : 4,
        book_Name : "Biology"
    },

]
const simlerBook = bookCollection.filter(book=> book.book_Name === "Math");
console.log(simlerBook);