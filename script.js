const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const emptyMessage = document.querySelector('.empty-message');

addTaskBtn.addEventListener('click', function() {
    const taskValue = taskInput.value.trim();
    if (taskValue) {
        addTask(taskValue);
        taskInput.value = '';
        emptyMessage.style.display = 'none'; // Hide empty message
    }
});

function addTask(taskValue) {
    const listItem = document.createElement('li');
    listItem.classList.add('task');

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('change', function() {
        listItem.classList.toggle('completed', checkbox.checked);
    });

    // Task text
    const taskText = document.createElement('span');
    taskText.textContent = taskValue;

    // Edit button creation
    const editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.classList.add('editBtn'); // Class for styling
    editBtn.addEventListener('click', function() {
    const newTask = prompt('Edit your task:', taskText.textContent);
    if (newTask) {
        taskText.textContent = newTask;
      }
   });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(listItem);
        if (taskList.children.length === 0) {
            emptyMessage.style.display = 'block'; // Show empty message
        }
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
}

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTaskBtn.click();
    }
});