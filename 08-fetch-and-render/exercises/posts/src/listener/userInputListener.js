import { userInputHandler } from '../handlers/userInputHandler.js';

export const userInputListener = () => {
    document.getElementById('choose-post-button').addEventListener('click', userInputHandler);
};