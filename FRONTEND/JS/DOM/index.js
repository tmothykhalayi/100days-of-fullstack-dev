// Wait for DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // DOM Element References
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    
    // Array to store todos (in a real app, you might use a database)
    let todos = [];
    
    // Load todos from localStorage if available
    
    
    // Form submission handler
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload
        
        const todoText = input.value.trim();
        if (todoText) {
            // Create new todo object
            const newTodo = {
                id: Date.now(), // Unique ID using timestamp
                text: todoText,
                completed: false
            };
            
            // Add to array
            todos.push(newTodo);
            
            // Save to localStorage
            saveTodos();
            
            // Render the new todo
            renderTodos();
            
            // Clear input
            input.value = '';
            input.focus();
        }
    });
    
    // Function to render all todos
    function renderTodos() {
        // Clear the list first
        todoList.innerHTML = '';
        
        // Create DOM elements for each todo
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = 'todo-item';
            li.dataset.id = todo.id; // Store ID as data attribute
            
            if (todo.completed) {
                li.classList.add('completed');
            }
            
            // Create checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.addEventListener('change', function() {
                todo.completed = this.checked;
                li.classList.toggle('completed', this.checked);
                saveTodos();
            });
            
            // Create span for todo text
            const span = document.createElement('span');
            span.textContent = todo.text;
            
            // Create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function() {
                // Remove todo from array
                todos = todos.filter(item => item.id !== todo.id);
                saveTodos();
                renderTodos();
            });
            
            // Append elements to li
            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteBtn);
            
            // Append li to ul
            todoList.appendChild(li);
        });
    }
    
    // Function to save todos to localStorage
    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
});