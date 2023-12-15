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

      <div id="checkers" onclick="checkUncheckTask(event)">
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

        <div class="task-buttons">
          <button class="edit-button" onclick="editTask(event)" type="button"><i class="fa-solid fa-pen icon"></i></button>
          <button class="delete-button" onclick="deleteTask(event)" type="button"><i class="fa-solid fa-xmark icon"></i></button>
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

function deleteTask(event) {
  const taskItem = event.target.closest(".task-item"); //Targets the specific div/element

  if (taskItem) {
    taskItem.remove();
  }
}

// Function to mark/unmark completed task

function checkUncheckTask(event) {
  let taskItem = event.target.closest(".task-item");

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
}

// Edit task
function editTask(event) {
  let editButton = event.target.closest(".task-item");

  let titleValue = editButton.querySelector(".task-title");
  let aboutValue = editButton.querySelector(".task-about");

  // Turn title to an input box for edit
  let editTitle = document.createElement("input");

  editTitle.type = "text";
  editTitle.value = titleValue.textContent;
  titleValue.replaceWith(editTitle);
  editTitle.style.backgroundColor = "var(--primary-color)";
  editTitle.style.color = "#1b1a17";

  // Edit about
  let editAbout = document.createElement("input");
  editAbout.type = "text";
  editAbout.value = aboutValue.textContent;
  aboutValue.replaceWith(editAbout);
  editAbout.style.backgroundColor = "var(--primary-color)";
  editAbout.style.color = "#1b1a17";

  // Save new value
  editTitle.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      let newTitle = editTitle.value;
      let newTitleElement = document.createElement("h2");
      newTitleElement.classList.add("task-title");
      newTitleElement.textContent = newTitle;
      editTitle.replaceWith(newTitleElement);
    }
  });

  editAbout.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      let newAbout = editAbout.value;
      let newAboutElement = document.createElement("p");
      newAboutElement.classList.add("task-about");
      newAboutElement.textContent = newAbout;
      editAbout.replaceWith(newAboutElement);
    }
  });
}

// Event listeners
addTaskBtn.addEventListener("click", addTask);
