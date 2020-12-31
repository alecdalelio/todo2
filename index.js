let addToDoButton = document.querySelector("#addToDo");
let toDoContainer = document.querySelector("#toDoContainer");
let inputField = document.querySelector("#inputField");

addToDoButton.addEventListener("click", (ev) => {
  // creates a new li element held in "toDoItem" variable
  let toDoItem = document.createElement("li");

  // adds "toDo-styling" class to the newly created list item
  toDoItem.classList.add("toDo-styling");

  // applies the value of the <input> element to the newly created list item
  toDoItem.innerText = inputField.value;

  // appends (or adds) the filled in list item element to the toDoContainer
  toDoContainer.appendChild(toDoItem);

  // resets the value of the input field to empty so you can type more to-dos
  inputField.value = "";

  // creates another event listener so that when a paragraph is clicked, it is removed from the page
  toDoItem.addEventListener("click", function () {
    toDoContainer.removeChild(toDoItem);
  });
});
