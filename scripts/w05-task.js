/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {

    temples.forEach(temple => {

    let article = document.createElement("article");

    let header = document.createElement("h3");
    header.textContent = temple.templeName;

    let image = document.createElement("img");
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", temple.location);

    article.appendChild(header);
    article.appendChild(image);

    templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
}

/* filterTemples Function */
const filterTemples = temples => {
    reset();
    let filter = document.getElementById("filtered").value;
    switch(filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.toLowerCase().includes('utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes('utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            break;
    }
}

/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => filterTemples(templeList));

getTemples();