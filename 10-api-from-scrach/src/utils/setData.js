import { fetchData } from "../api-calls/apiCall.js";
import { renderPageBase } from "../components/renderPageBase.js";
import { state } from "../data/state.js";

export const setData = async() =>{
    try {
        const response = await fetchData();
        document.body.innerHTML = '';
        state.itemsToDisplay = [];
        response.docs.map((doc) => state.itemsToDisplay.push({name: doc.title}));

        state.page.totalItems = response.num_found;
        state.page.totalPages = Math.ceil(
            state.page.totalItems / state.page.pageSize,
        );

        console.log(response, state.itemsToDisplay);
        renderPageBase();

    } catch (error) {
        console.error(error)
        
    }
}