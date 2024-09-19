import { renderTodos } from "./renderTodos.js";

export const renderusers = (user= {}, todos =[])=>{
    const container = document.createElement('div');
    container.id = `user-${user.id}`;

    const titleEl = document.createElement('h1');
    titleEl.innerHTML = user.username;
    container.appendChild(titleEl);

    const nameEl = document.createElement('p');
    nameEl.innerHTML = 'name: ' +user.name;
    container.appendChild(nameEl);

    const emailEl = document.createElement('p');
    emailEl.innerHTML = 'Email: '+user.email;
    container.appendChild(emailEl);

    const websiteEl = document.createElement('p');
    websiteEl.innerHTML = 'website: ';
    const aEl = document.createElement('a');
    aEl.href = 'http://' + user.website;
    aEl.target = '_blank';
    aEl.innerText = user.website;
    websiteEl.appendChild(aEl)
    container.appendChild(websiteEl);


    const renderedTodos = todos.map(renderTodos).reduce((all, next) => {
        all.appendChild(next);
        return all;
    }, document.createElement('div'));
    container.appendChild(renderedTodos);

    return container;
};