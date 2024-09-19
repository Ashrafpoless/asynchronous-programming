import {renderComments} from "../components/renderComments.js"

export const renderPosts = (post = {}, comments = []) => {
    const container = document.createElement('div');
    container.id = `post-${post.id}`; //-${comment.title.split(' ').join('-')}

    const titleEl = document.createElement('h1');
    titleEl.innerHTML = post.title;
    container.appendChild(titleEl);

    const idEl = document.createElement('code');
    idEl.innerHTML = 'posted by user: ' +post.id;
    container.appendChild(idEl);

    const userEl = document.createElement('p');
    userEl.innerHTML = post.body;
    container.appendChild(userEl);

   

    const renderedComments = comments.map(renderComments).reduce((all, next) => {
        all.appendChild(next);
        return all;
    }, document.createElement('div'));
    container.appendChild(renderedComments);

    return container;
};
