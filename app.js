// When user inputs a text and clicks enter/button
// Pass the input value to appropriate task section
// A new li needs to be created

let taskBody = document.querySelector("#task");
let taskItem = document.querySelector(".task-item");
let titleInput = document.querySelector("#titleInput");
let aboutInput = document.querySelector("#aboutInput");
let titleValue = document.querySelector(".task-title");
let aboutValue = document.querySelector(".task-about");
let addTaskBtn = document.querySelector(".add-button");

let addTask = () => {
  titleValue.textContent = titleInput.value;
  aboutValue.textContent = aboutInput.value;
};

addTaskBtn.addEventListener("click", addTask);
