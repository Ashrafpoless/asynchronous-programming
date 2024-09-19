import { state } from "../data/state.js";
import { apiService } from "../Api/apiService.js";
import {renderusers} from "../components/renderusers.js"
import {fourOhFour} from "../components/four-oh-four.js"
import { otherError } from "../components/other-error.js";

export const usersHandler = async (event) => {
    const theUserId = event.target.form.userId.value;
    console.log(theUserId);
    const root = document.getElementById('root');
    root.innerHTML = '';

    try {
        const userPromise = apiService('users', theUserId);
        const todosPromise = apiService('users', theUserId, 'todos');

        const [user, todos] = await Promise.all([
            userPromise,
            todosPromise,
        ]);

        state.user = user;
        state.todos = todos;
        console.log(state);

        const userElement = renderusers(user, todos);

        root.appendChild(userElement);
    } catch (err) {
        console.error(err);

        const errorElement = err.message.includes('HTTP error! status: 404')
            ? fourOhFour(theUserId)
            : otherError(theUserId);

        root.appendChild(errorElement);
    }

};