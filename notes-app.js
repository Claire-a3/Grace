//console.log("javascript notes-app.js");
//DOM-Document object model

var ps = document.querySelectorAll("p");
//ps.textContent ='Nairobi'
ps.forEach(function (p) {
  p.textContent = "#####";
});
var notes = [
  {
    title: "my next trip",
    body: "exercise and read books",
  },
  {
    title: "design a new cloth",
    body: "visit grandma",
  },
  {
    title: "learn spanish",
    body: "go for car race",
  },
];

//Add a new element to the DOM

let newParagraph = document.createElement("p");
newParagraph.textContent = "javascript project";
document.querySelector("body").appendChild(newParagraph);
document.querySelector("button").addEventListener("click");
console.log(evt);
