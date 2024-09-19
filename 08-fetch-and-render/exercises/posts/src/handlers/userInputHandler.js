import { apiService } from '../Api/apiService.js';
import { renderPosts } from '../components/renderPosts.js';
import {fourOhFour} from "../components/four-oh-four.js"
import { otherError } from "../components/other-error.js";
import {state} from "../data/state.js"

export const userInputHandler = async (event) => {
    const postId = event.target.form.postId.value;
   // console.log(postId);

    const root = document.getElementById('root');
    root.innerHTML = '';

    try {
        const postPromise = apiService('posts', postId);
        const commentsPromise = apiService('posts', postId, 'comments');

        const [post, comments] = await Promise.all([
            postPromise,
            commentsPromise,
        ]);

        state.post = post;
        state.comments = comments;
        console.log(state);

        const postElement = renderPosts(post, comments);

        root.appendChild(postElement);
    } catch (err) {
        console.error(err);

        const errorElement = err.message.includes('HTTP error! status: 404')
            ? fourOhFour(albumId)
            : otherError(albumId);

        root.appendChild(errorElement);
    }
};