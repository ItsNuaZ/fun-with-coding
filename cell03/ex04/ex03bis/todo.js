function newTask() {
    let userInput = prompt("Please enter a new TO DO", "");
    if (userInput === null) return;

    if (userInput === "") {
        return alert("Task cannot be left empty!");
    }

    createTaskElement(userInput);
    saveTasks();
}

function createTaskElement(userInput) {
    const $element = $("<div></div>")
        .addClass("task-div")
        .text(userInput)
        .on("click", function() {
            deleteTask($(this));
        });

    $("#ft_list").prepend($element);
}

function deleteTask($element) {
    $element.remove();
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    $("#ft_list").children().each(function() {
        tasks.push($(this).text());
    });

    localStorage.setItem("todo_list", JSON.stringify(tasks));
}

function loadTasks() {
    console.log("1");
    const data = localStorage.getItem("todo_list");
    if (data) {
        const tasks = JSON.parse(data);
        tasks.reverse();
        tasks.forEach(task => {
            createTaskElement(task);
        });
        console.log("2");
    }
    console.log("3");
}

$(document).ready(function() {
    loadTasks();

    $("#new-task-btn").click(function() {
        newTask();
    });
});