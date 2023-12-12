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
let delTaskBtn = document.querySelector(".delete-button");

// new li should be created
function createTaskBody() {
  const newTask = document.createElement("div");

  newTask.innerHTML = `
      <li class="task-item">
        <div class="check-button" >
          <i class="fa-regular fa-circle icon"></i>
        </div>

        <div class="task-text">
          <h2 class="task-title">Task Title</h2>
          <p class="task-about">Task info</p>
        </div>

        <div class="">
          <button class="delete-button" type="button"><i class="fa-solid fa-xmark icon"></i></button>
        </div>
      </li>
  `;

  // append new li to ul
  taskBody.appendChild(newTask)
}

addTaskBtn.addEventListener("click", createTaskBody)

// Pass input value from input boxes to newly created task body

let addTask = () => {
  
}

// let addTask = () => {
//   titleValue.textContent = titleInput.value;
//   aboutValue.textContent = aboutInput.value;
// };

// addTaskBtn.addEventListener("click", addTask);
