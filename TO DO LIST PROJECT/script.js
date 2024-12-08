document.getElementById('add-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        
        // Create a new list item
        const li = document.createElement('li');

        // Add task text
        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        // Add mark as completed button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = '✔️';
        completeBtn.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
        li.appendChild(completeBtn);

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });
        li.appendChild(deleteBtn);

        // Append the new task to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    } else {
        alert('Please enter a task');
    }
});
