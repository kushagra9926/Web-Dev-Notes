// DOM Events
/*
DOM Events (Document Object Model Events) are actions or occurrences that happen in the browser, which JavaScript can detect and respond to.

</> HTML
<button onclick = "console.log("button was click")">click me</button>  
*/

// onclick Event in JavaScript
/*
The onclick event is triggered when a user clicks on an HTML element.
*/
// onmouseenter Event
/*
onmouseenter is triggered when the mouse pointer enters an element.
*/
let btns = document.querySelectorAll("button");
for(btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = function(){
        console.log("you entered a button");
    }
}

// btn.onclick = function (){
//     console.log("button was clicked");
//     alert("button was clicked");
// };

function sayHello(){
    alert("Hello!");
} 


