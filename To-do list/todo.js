// Select elements
const input = document.querySelector('.input'); // Input box
const button = document.querySelector('.button'); // Add task button
const taskList = document.querySelector('.bullets ul'); // The task list in container1

// Event listener for the Add task button
button.addEventListener('click', function() {
    const taskText = input.value.trim(); // Get the task text from the input

    // If there's text in the input
    if (taskText !== '') {
        // Create a new list item for the task
        const newTask = document.createElement('li');

        // Add task text and checkbox to the list item
        newTask.innerHTML = `${taskText} <input type="checkbox">`;

        // Append the new task to the task list in container1
        taskList.appendChild(newTask);

        // Clear the input field after adding the task
        input.value = '';

        window.location.href = "todo.html";
    } else {
        alert('Please enter a task!');
    }
});
