import { ORIGIN } from '../config.js';

export const apiService = async (...params) => {
    const paramsPath = params.join('/');

    const URL = `${ORIGIN}/${paramsPath}`;

    // https://jsonplaceholder.typicode.com/users

    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
    }

    return await response.json();
};