


export const renderComments = (comment = {}) => {
    const container = document.createElement('div');
    container.id = 'comment-' + comment.id;
    container.className = 'comment';

    const titleEl = document.createElement('h2');
    titleEl.innerHTML = comment.name;
    container.appendChild(titleEl);

    const emailEl = document.createElement('code');
    emailEl.innerHTML =`comment by: ${comment.email}`;  
    container.appendChild(emailEl);

   const pEl = document.createElement('p');
    pEl.innerHTML = comment.body;
    container.appendChild(pEl);

    return container;
};
