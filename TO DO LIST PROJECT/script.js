document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    // Clear input field
    taskInput.value = '';
});
