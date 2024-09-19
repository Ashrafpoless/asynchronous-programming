import { BASE_URL } from "../config.js";
import {state} from "../data/state.js"

export const fetchData =async()=>{

    try {
        const filterquery = `q=${state.filter}`;
        const pageQuery = `&limit=${state.page.pageSize}&offset=${state.page.currentPage}`;
        const sortQuery =`&${state.sort.fields}`	
        

        let url = BASE_URL + 'search.json?'+filterquery + pageQuery + sortQuery;

        const encodedURL = encodeURI(url);
        const response = await fetch(encodedURL);
    
        if (!response.ok) {
            console.log(response.statusText);
            throw new Error(response.statusText);
        }

        const parsedResponse = await response.json();
    
      //  console.log('response', parsedResponse);
        return parsedResponse;


    } catch (err) {
        console.error(err);
        
    }
}


//https://openlibrary.org/search.json?q=crime+and+punishment&fields=key,title,author_name,editions