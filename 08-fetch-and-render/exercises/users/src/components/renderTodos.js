
export const renderTodos = (todos={})=>{
    const todoCon = document.createElement('div');
    todoCon.id = 'comments'

    const container = document.createElement('div');
    container.id = 'todos-' + todos.id;
    container.className = 'todo';

    const inputEl = document.createElement('input');
    inputEl.type = 'checkbox';
    if(todos.completed === true){
        inputEl.checked = true
    }
    container.appendChild(inputEl);

    const titleEl = document.createElement('code');
    titleEl.innerHTML =todos.title;  
    container.appendChild(titleEl);

    todoCon.appendChild(container)
    

    return todoCon;
};
