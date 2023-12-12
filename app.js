// When user inputs a text and clicks enter/button
// Pass the input value to appropriate task section
// A new li needs to be created

const taskList = document.querySelector("#taskList");
// let taskItem = document.querySelector(".task-item");
let addTaskBtn = document.querySelector(".add-button");
let delTaskBtn = document.querySelector(".delete-button");

// new li should be created--
// Function to create new task
function createTask(title, about) {
  const newTask = document.createElement("div");

  newTask.innerHTML = `
      <li class="task-item">
        <div class="check-button" >
          <i class="fa-regular fa-circle icon"></i>
        </div>

        <div class="task-text">
          <h2 class="task-title">${title}</h2>
          <p class="task-about">${about}</p>
        </div>

        <div class="">
          <button class="delete-button" onclick="delTask()" type="button"><i class="fa-solid fa-xmark icon"></i></button>
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

  title = titleInput.value;
  about = aboutInput.value;

  createTask(title, about);
  titleInput.value = "";
  aboutInput.value = "";
};

addTaskBtn.addEventListener("click", addTask);

//Delete button should del it's div

const delTask = () => {
  let taskItem = document.querySelector(".task-item");

  taskItem.remove();
};
