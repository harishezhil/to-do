const addButton = document.getElementById('addButton');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const toggleMode = document.getElementById('toggleMode');

addButton.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = todoText;
        span.addEventListener('click', () => {
            span.classList.toggle('completed');
        });
        li.appendChild(span);

        const trashIcon = document.createElement('i');
        trashIcon.className = 'fas fa-trash';
        trashIcon.addEventListener('click', () => {
            li.remove();
        });
        li.appendChild(trashIcon);

        todoList.appendChild(li);
        todoInput.value = '';
    }
});

toggleMode.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggleMode.checked);
});
