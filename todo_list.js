<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>

    <script type="application/javascript">

function addTask(){

    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

if(taskText !== ""){

    const ul = document.getElementById("todoList");

    //crear el nuevo tem de la lista

const li = document.createElement("li");

//Crear una nueva tarea

const span = document.createElement("span");
span.textContent = taskText;

//boton que edita la lista 

const editButton = document.createElement("button");
editButton.textContent = "edit";
editButton.onclick = () => editTask(span);

//boton que elimina en la lista

const removeButton = document.createElement("button");
removeButton.textContent = "Delete";
removeButton.onclick = () => removeTask(li);

//append buttons and text to the list item

li.appendChild(span);
li.appendChild(editButton);
li.appendChild(removeButton);

//append list item to the list 
ul.appendChild(li);

//clear input

input.value = "";

}
else{
    alert("por favor ingresa un valor");
}

function editTask(span) {
    // Prompt the user to enter a new task description
    const newTask = prompt("Edit your task:", span.textContent);
    
    // Update the task only if the input is not null or empty
    if (newTask !== null && newTask.trim() !== "") {
        span.textContent = newTask.trim(); // Set the new task text
    }
}

function removeTask(task){
    const ul = document.getElementById("todoList"); // Get the list container
    ul.removeChild(task); // Remove the specified task element
}

}


</script>

    <style>
        /* Styles the main container of the to-do list */
        .todo-container {
            width: 300px;
            margin: 50px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        
        /* Removes default list styling for the to-do list */
        .todo-list {
            list-style-type: none;
            padding: 0;
        }

        /* Styles each list item in the to-do list */
        li {
            margin: 10px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        /* Adds spacing for buttons in list items */
        button {
            margin-left: 10px;
        }
    </style>
</head>
<body>

<div class="todo-container">
    <h1>To-Do List</h1>

    <!-- Input field to add new tasks -->
    <input type="text" id="taskInput" placeholder="Add a new task">
    
    <!-- Button to add a new task to the list -->
    <button class="add-btn" onclick="addTask()">Add Task</button>
    
    <!-- Unordered list to display the tasks -->
    <ul class="todo-list" id="todoList"></ul>
</div>

<script>
    // Placeholder for functionality to be added in future exercises
</script>

</body>
</html>
