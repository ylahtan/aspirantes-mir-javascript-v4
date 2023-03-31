let todoList = [];

const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoListContainer = document.querySelector('#todo-list');
const deleteAllDoneButton = document.querySelector('#delete-all-done');

const filterCompletedCheckbox = document.getElementById('filter-completed');
const filterUncompletedCheckbox = document.getElementById('filter-uncompleted');

todoForm.addEventListener('submit', handleSubmit);
deleteAllDoneButton.addEventListener('click', handleDeleteAllDone);
filterCompletedCheckbox.addEventListener('change', renderTodoList);
filterUncompletedCheckbox.addEventListener('change', renderTodoList);

function handleSubmit(event) {
    event.preventDefault();
    const title = todoInput.value.trim();
    if (title) {
        const newTask = {
            id: todoList.length + 1,
            title,
            completed: false,
        };
        todoList.push(newTask);
        renderTodoList();
        todoInput.value = '';
    } else {
        alert("agregar una tarea");
    }
}

function handleCheckTask(event) {
    const taskId = parseInt(event.target.dataset.id);
    const task = todoList.find(task => task.id === taskId);
    task.completed = event.target.checked;
    renderTodoList();
}

function handleDelete(event) {
    const taskId = parseInt(event.target.dataset.id);
    todoList = todoList.filter(task => task.id !== taskId);
    renderTodoList();
}

function handleDeleteAllDone(event) {
    todoList = todoList.filter(task => !task.completed);
    renderTodoList();
}

function renderTodoList() {
    todoListContainer.innerHTML = '';
    const showCompleted = document.getElementById('filter-completed').checked;
    const showUncompleted = document.getElementById('filter-uncompleted').checked;
    if (!showCompleted && !showUncompleted) {
        todoList.forEach((task) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
        <input type="checkbox" class="checkbox" data-id="${task.id}" ${task.completed ? 'checked' : ''}>
        <span class="${task.completed ? 'completed' : ''}">${task.title}</span>`;
            listItem.querySelector('.checkbox').addEventListener('click', handleCheckTask);
            todoListContainer.appendChild(listItem);
        });
    } else {
        filteringTasks(todoList, showCompleted, showUncompleted);
    }
}


function filteringTasks(todoList, showCompleted, showUncompleted) {
    const filteredTasks = todoList.filter((task) => {
        if (showCompleted && showUncompleted) {
            return true;
        } else if (showCompleted && task.completed) {
            return true;
        } else if (showUncompleted && !task.completed) {
            return true;
        } else {
            return false;
        }
    });

    filteredTasks.forEach((task) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <input type="checkbox" class="checkbox" data-id="${task.id}" ${task.completed ? 'checked' : ''}>
        <span class="${task.completed ? 'completed' : ''}">${task.title}</span>`;
        listItem.querySelector('.checkbox').addEventListener('click', handleCheckTask);
        todoListContainer.appendChild(listItem);
    });
}