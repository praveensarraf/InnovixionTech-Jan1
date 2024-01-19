document.getElementById("new-task").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Function to add a new task
function addTask() {
    const newTaskInput = document.getElementById("new-task");
    const taskText = newTaskInput.value.trim();

    if (taskText !== "") {
        const tasksContainer = document.getElementById("tasks-container");

        // Create task element
        const taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.innerHTML = `
            <span>${taskText}</span>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;

        // Insert task just below the input and add button
        tasksContainer.insertBefore(taskElement, tasksContainer.firstChild);

        // Clear the input field
        newTaskInput.value = "";
    }
}

// Function to delete a task
function deleteTask(button) {
    const taskElement = button.parentElement;
    taskElement.remove();
}

// Function to edit a task
function editTask(button) {
    const taskElement = button.parentElement;
    const taskTextElement = taskElement.querySelector("span");
    const currentText = taskTextElement.innerText;

    // Prompt the user for a new task text
    const newText = prompt("Edit task:", currentText);

    // Update the task text if the user entered a new text
    if (newText !== null && newText.trim() !== "") {
        taskTextElement.innerText = newText;
    }
}