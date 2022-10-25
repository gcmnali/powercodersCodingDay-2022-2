/*
Create an array called books in JavaScript. 
It should contain the title and author of each book, 
if the book has been sold out or is in stock, plus the price of the book. Add 3 books to the array.
 Show the elements of this array listed alphabetically in the HTML, and add a way for the user to add books. Style the HTML using CSS flex.

Estimated time: 45 minutes
Total points: 45

*/

const booksContainer = document.getElementById("booksContainer");
const titleTxt = document.getElementById("titleTxt");
const authorTxt = document.getElementById("authorTxt");
let books = [
    {title:"The Secret Network of Nature", author:"Peter Wohlleben",price:20},
    {title:"The Secret Network of Nature", author:"Peter Wohlleben",price:20},
    {title:"The Secret Network of Nature", author:"Peter Wohlleben",price:20}
];

function showBooks(){
    books.sort((a, b) => a.title.localeCompare(b.title));
    booksContainer.innerHTML = "";
    for(let i=0;i<books.length;i++){
        let art = document.createElement("article");
        let spn1 = document.createElement("span");
        let spn2 = document.createElement("span");
        spn1.innerHTML = books[i].title;
        spn2.innerHTML = books[i].author;
        art.appendChild(spn1);
        art.appendChild(spn2);
        booksContainer.appendChild(art);
    }
}
function addBook(){
    books.push({title:titleTxt.value, author:authorTxt.value})
    showBooks();
}
showBooks();