let a = document.createElement("a");
a.href = "http://hackertyper.com/";
a.textContent = "Hack!";

document.body.appendChild(a);

//Append Child Element 
let bookList = document.getElementById("my-favorite-books");
let newBook = document.createElement("li");
newBook.textContent = "The Invention of Morel";
bookList.appendChild(newBook);

//Using insertBefore
const list = document.getElementById("my-closet");
let newCloset = document.createElement("li");
newCloset.innerText = "Shirts";
let second = list.children[1];
console.log(second);
list.insertBefore(newCloset, second);

//Moving Elements
let dinner = document.createElement("h1");
dinner.textContent = "Dinner";
let dinnerList = document.createElement("ul");
dinnerList.id = "dinner-foods";

let lunch = document.querySelector('#lunch-foods');
lunch.parentNode.insertBefore(dinnerList, lunch.nextSibling);
lunch.parentNode.insertBefore(dinner, lunch.nextSibling);

function moveToDinner (e) {
    const lunchList = document.querySelector('#lunch-foods');
    const lunchItems = lunchList.children;

    if (lunchItems.length > 0) {
        let foodToMove = lunchList.removeChild(lunchItems[lunchItems.length - 1]);
        dinnerList.appendChild(foodToMove);
    }
}

let dinnerButton = document.querySelector('#dinner');
dinnerButton.addEventListener('click', moveToDinner);

