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


