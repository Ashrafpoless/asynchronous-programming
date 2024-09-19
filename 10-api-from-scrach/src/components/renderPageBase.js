import { state } from "../data/state.js";
import { filterHandler } from "../handlers/filterHandler.js";


export const renderPageBase = ()=>{
    const container = document.createElement('div');

    const filterInput =document.createElement('input');
    filterInput.id= 'filter-input';

    const filterButton = document.createElement('button');
    filterButton.type = 'button';
    filterButton.id ='filter-button'
    filterButton.innerHTML = 'Filter'

    filterButton.addEventListener('click', filterHandler)

    container.append(filterInput, filterButton);

    const displaySection = document.createElement('div');

    const ulEl = document.createElement('ul');

    state.itemsToDisplay.map((item)=> {
        const liEl = document.createElement('li');
        liEl.innerHTML = item.name;
        ulEl.appendChild(liEl);
    })

    displaySection.append(ulEl)
    container.append(displaySection)
    document.body.appendChild(container)
}