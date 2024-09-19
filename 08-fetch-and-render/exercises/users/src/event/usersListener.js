import {usersHandler} from "../handler/usersHandler.js"

export const usersListener = ()=>{
    document.getElementById('choose-user-button').addEventListener('click', usersHandler);
};