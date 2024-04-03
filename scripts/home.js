document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.getElementById("content");
    const pomodoroBtn = document.getElementById("pomodoro");
    const calendarBtn = document.getElementById("calendar");
    const todoBtn = document.getElementById("todo");
    const taskManagerBtn = document.getElementById("taskManager");

    pomodoroBtn.addEventListener("click", function (event) {
        event.preventDefault();
        loadPageContent("pomodoro.html");
    });

    calendarBtn.addEventListener("click", function (event) {
        event.preventDefault();
        loadPageContent("calendar.html");
    });

    todoBtn.addEventListener("click", function (event) {
        event.preventDefault();
        loadPageContent("todo.html");
    });

    taskManagerBtn.addEventListener("click", function (event) {
        event.preventDefault();
        loadPageContent("taskManager.html");
    });

    function loadPageContent(pageUrl) {
        fetch(pageUrl)
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
            })
            .catch(error => console.error('Error loading page:', error));
    }
});
