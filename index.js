let addToDoButton = document.querySelector("#addToDo");
let toDoContainer = document.querySelector("#toDoContainer");
let inputField = document.querySelector("#inputField");

addToDoButton.addEventListener("click", (ev) => {
  // creates a new p element held in "paragraph" variable
  let paragraph = document.createElement("p");

  // adds "paragraph-styling" class to the newly created paragraph
  paragraph.classList.add("paragraph-styling");

  // applies the value of the <input> element to the newly created paragraph
  paragraph.innerText = inputField.value;

  // appends (or adds) the filled in paragraph element to the toDoContainer
  toDoContainer.appendChild(paragraph);

  // resets the value of the input field to empty so you can type more to-dos
  inputField.value = "";

  // creates an event listener so that when the paragraph is clicked, its style (text-decoration) changes so that it appears striked through
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  // creates another event listener so that when a paragraph is clicked a second time, it is removed from the page
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});
