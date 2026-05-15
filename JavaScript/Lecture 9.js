// DOM (Document Object Model)
/*
It is basically a way for JavaScript to access and change HTML and CSS on a webpage.
When a browser loads an HTML page, it converts the page into a tree-like structure called the DOM.

JavaScript can use the DOM to:

---> Change text
---> Change styles
---> Add/remove elements
---> Handle button clicks
---> Create animations
*/


// Selecting Elements

// getElementById
/*
To select an element by ID in JavaScript, we use:   
document.getElementById("idName")

Example:
</> HTML
<h1 id="title">Hello</h1>

</> JavaScript
const heading = document.getElementById("title");
console.log(heading);

Output: 
<h1 id="title">Hello</h1>

Changing text using ID:
</> JavaScript
heading.innerText = "Welcome";

Now the page becomes:
</> HTML
<h1 id="title">Welcome</h1>
*/

// getElementByClassName
/*
getElementsByClassName() is used to select elements using a class name.

SYNTAX:
</> JavaScript
document.getElementsByClassName("className")

Example: 
</> HTML
<p class="text">Hello</p>
<p class="text">World</p>

</> JavaScript
const items = document.getElementsByClassName("text");
console.log(items);

Output:
HTMLCollection(2)
Because multiple elements can have the same class, it returns a collection (array-like object).

Access elements using index:
</> JavaScript
console.log(items[0]);
console.log(items[1]);

Change text:
</> JavaScript
items[0].innerText = "Hi";
*/

// let smallImages = document.getElementsByClassName("oldImg");
// for(let i = 0; i < smallImages.length; i++){
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no ${i} is changed.`);
// }

// getElementByTagName
/*
</> JavaScript
document.getElementsByTagName("tagName")
It selects elements using their HTML tag name.

Example:
</> HTML
<p>Hello</p>
<p>World</p>

</> JavaScript 
const paras = document.getElementsByTagName("p");
console.log(paras);

Output:
HTMLCollection(2)

Access elements:
</> JavaScript
console.log(paras[0]);
console.log(paras[1]);

Change content:
</> JavaScript
paras[0].innerText = "Hi";
*/

// Query Selectors
/*
querySelector() and querySelectorAll() are modern DOM methods used to select elements using CSS selectors.

1. querySelector()
Selects the first matching element.

SYNTAX:
</> JavaScript
document.querySelector("selector")

Example:
</> HTML
<h1 class="title">Hello</h1>    

</> JavaScript
const heading = document.querySelector(".title");
console.log(heading);

Select by ID
</> JavaScript
document.querySelector("#title")

Select by Class
</> JavaScript
document.querySelector(".box")

Select by Tag
</> JavaScript
document.querySelector("p")

2. querySelectorAll()
Selects all matching elements.

SYNTAX:
</> JavaScript
document.querySelectorAll("selector")

Example:
</> HTML
<p class="text">One</p>
<p class="text">Two</p>

</> JavaScript
const items = document.querySelectorAll(".text");
console.log(items);

Output:
NodeList(2)

Access elements:
</> JavaSript
console.log(items[0]);
console.log(items[1]);

Important
querySelector uses CSS selector symbols:

| Selector | Meaning  |
| -------- | -------- |
| `#id`    | ID       |
| `.class` | Class    |
| `tag`    | Tag name |

*/