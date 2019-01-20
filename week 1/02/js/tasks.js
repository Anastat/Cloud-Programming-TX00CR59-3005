// tasks.js
// This script manages a to-do list.

// Need a global variable:
let tasks = [];

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');

    // For the output:
    var message = '';

    if (task.value) {

        // Add the item to the array:
        tasks.push(task.value);

        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;

    } // End of task.value IF.

    // Return false to prevent submission:
    return false;

} // End of addTask() function.

//Remove dublicates from task list
function removeDuplicates () {
    let newTasks = [...new Set(tasks)];//create new array without dublicates
    //console.table(newTasks);
    let output = document.getElementById('output');
    output.innerHTML= "";
    message = '<h2>To-Do</h2><ol>';
    newTasks.forEach(function (item, index) {
        message += '<li>' + item + '</li>';
    })
    message += '</ol>';
    output.innerHTML = message;
    tasks = newTasks;
}

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
    document.getElementById("remove").addEventListener("click", (event) => {
        event.preventDefault();
        removeDuplicates();
    })
} // End of init() function.
window.onload = init;