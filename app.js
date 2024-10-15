// assignment qs1

let button = document.createElement("button");
let input = document.createElement("input");

button.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

// assignment qs2

input.setAttribute("placeholder","username");
button.setAttribute("id","btn");

// assignment qs3

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

// assignment qs4

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";

document.querySelector("body").prepend(h1);

h1.style.color = "purple";

// assignment qs5

let p = document.createElement('p');
p.innerHTML = "Apna College <b>Delta</b> Practice";

document.querySelector("body").append(p);