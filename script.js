document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('deleteOneBtn').addEventListener('click', deleteOneTask);
document.getElementById('deleteAllBtn').addEventListener('click', deleteAllTasks);

function addTask() {
    const taskName = document.getElementById('taskNameInput').value.trim();
    const taskDesc = document.getElementById('taskDescInput').value.trim();

    if (taskName === '') {
        alert('Please enter a task name.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskHeader = document.createElement('div');
    taskHeader.classList.add('task-header');

    const taskTitle = document.createElement('span');
    taskTitle.textContent = taskName;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'task-btn';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskHeader.appendChild(taskTitle);
    taskHeader.appendChild(deleteBtn);

    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');
    taskDetails.textContent = taskDesc;

    taskItem.appendChild(taskHeader);
    taskItem.appendChild(taskDetails);
    taskList.appendChild(taskItem);

    // Clear input fields
    document.getElementById('taskNameInput').value = '';
    document.getElementById('taskDescInput').value = '';
}

function deleteOneTask() {
    const taskList = document.getElementById('taskList');
    if (taskList.lastChild) {
        taskList.removeChild(taskList.lastChild);
    }
}

function deleteAllTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
}