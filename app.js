// When user inputs a text and clicks enter/button
// Pass the input value to appropriate task section
// A new li needs to be created

"use strict";

const taskList = document.querySelector("#taskList");
const addTaskBtn = document.querySelector(".add-button");

// new li should be created--
// Function to create new task
function createTask(title, about) {
  const newTask = document.createElement("div");

  newTask.innerHTML = `
    <li class="task-item">

      <div id="checkers" onclick="checkTask(event)">
        <div class="check-button">
          <i class="fa-regular fa-circle icon"></i>
        </div>

        <div class="uncheck-button">
         <i class="fa-solid fa-circle-check"></i>
        </div>
       </div>

        <div class="task-text">
          <h2 class="task-title">${title}</h2>
          <p class="task-about">${about}</p>
        </div>

        <div class="">
          <button class="delete-button" onclick="delTask(event)" type="button"><i class="fa-solid fa-xmark icon"></i></button>
        </div>
      </li>
  `;

  // prepend new li to ul
  taskList.prepend(newTask);
}

// Pass input value from input boxes to newly created task body

const addTask = () => {
  let titleInput = document.querySelector("#titleInput");
  let aboutInput = document.querySelector("#aboutInput");

  const title = titleInput.value;
  const about = aboutInput.value;

  createTask(title, about);
  titleInput.value = "";
  aboutInput.value = "";
};

//Delete button should del its div

const delTask = (event) => {
  let deleteButton = event.target; //Targets the specific div/element

  let taskItem = deleteButton.closest(".task-item");

  taskItem.remove();
};

// Function to mark/unmark completed task

const checkTask = (event) => {
  const clickedButton = event.target;
  let taskItem = clickedButton.closest(".task-item");

  
  const checkButton = taskItem.querySelector(".check-button");
  const uncheckButton = taskItem.querySelector(".uncheck-button");
  let taskText = taskItem.querySelector(".task-text");

  if (checkButton.style.display === "block") {
    checkButton.style.display = "none";
    uncheckButton.style.display = "block";
    taskText.style.textDecoration = "line-through";
    taskText.style.color = "var(--secondary-color)";
    taskItem.style.border = "none";
  } else {
    checkButton.style.display = "block";
    uncheckButton.style.display = "none";
    taskText.style.textDecoration = "none";
    taskItem.style.border = "2px solid var(--primary-color)";
    taskText.style.color = "var(--text-color)";
  }
};

// Event listeners
addTaskBtn.addEventListener("click", addTask);
