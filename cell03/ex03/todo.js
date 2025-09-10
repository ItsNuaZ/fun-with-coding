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
    const element = document.createElement("div");
    element.classList.add("task-div");
    element.addEventListener("click", function(event) {
        deleteTask(element);
    });

    const text = document.createTextNode(userInput);
    element.appendChild(text);

    document.getElementById("ft_list").prepend(element);
}

function deleteTask(element) {
    document.getElementById("ft_list").removeChild(element);
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    const list = document.getElementById("ft_list").children;
    for (let i = 0; i < list.length; i++) {
        tasks.push(list[i].textContent);
    }

    localStorage.setItem("todo_list", JSON.stringify(tasks));
}

function loadTasks() {
    const data = localStorage.getItem("todo_list");
    if (data) {
        const tasks = JSON.parse(data);
        tasks.reverse();
        tasks.forEach(task => {
            createTaskElement(task);
        });
    }
}