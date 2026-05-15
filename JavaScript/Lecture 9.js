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
// getElementById: 
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

