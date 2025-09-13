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

    setCookie("todo_list", JSON.stringify(tasks), 365);
}

function loadTasks() {
    const data = getCookie("todo_list");
    if (data !== "") {
        const tasks = JSON.parse(data);
        tasks.reverse();
        tasks.forEach(task => {
            createTaskElement(task);
        });
    }
}

function setCookie(cname, cvalue, exdays) {
    const expireDate = new Date();
    expireDate.setTime(expireDate.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + expireDate.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}