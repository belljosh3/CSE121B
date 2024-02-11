//declare variables
const subscriberElement = document.getElementById("subs");
let subList = [];


// async getSubs Function using fetch()
async function getSubs() {
    reset();

    const response = await fetch("https://random-data-api.com/api/v2/users?size=10&response_type=json");
    if (response.ok) {
        subList = await response.json();
        displaySubs(subList);
    }
}

//function to display the subs that have been randomly selected
function displaySubs(subList) {
    subList.forEach(subscriber => {
        let article = document.createElement("article");
        
        let header = document.createElement("h3");
        header.textContent = `${subscriber.id} - ${subscriber.last_name}, ${subscriber.first_name}`;

        let image = document.createElement("img");
        image.setAttribute("src", subscriber.avatar);
        image.setAttribute("alt", subscriber.username);

        let plan = document.createElement("li");
        plan.textContent = `Plan: ${subscriber.subscription.plan}`;
        let planStatus = document.createElement("li");
        planStatus.textContent = `Status: ${subscriber.subscription.status}`;

        let phone = document.createElement("h3");
        phone.textContent = `Phone: ${subscriber.phone_number}`

        article.appendChild(header);
        article.appendChild(image);
        article.appendChild(plan);
        article.appendChild(planStatus);
        article.appendChild(phone);

        subscriberElement.appendChild(article);
    });
}


//make sure old sub pool is cleared
function reset() {
    subscriberElement.innerHTML = "";
}


// function to filter subscribers based on status
function filterSubs(subscriber) {
    reset();
    let filter = document.getElementById("filtered").value;
    switch(filter) {
        case 'active':
            displaySubs(subscriber.filter(subscriber => subscriber.subscription.status.toLowerCase() === "active"));
            break;
        case 'pending':
            displaySubs(subscriber.filter(subscriber => subscriber.subscription.status.toLowerCase() === "pending"));
            break;
        case 'idle':
            displaySubs(subscriber.filter(subscriber => subscriber.subscription.status.toLowerCase() === "idle"));
            break;
        case 'blocked':
            displaySubs(subscriber.filter(subscriber => subscriber.subscription.status.toLowerCase() === "blocked"));
        case 'all':
            displaySubs(subscriber);
            break;
        default:
            break;
    }
}


// Event Listeners for when things get pressed
document.getElementById("newSub").addEventListener("click", () => getSubs())
document.getElementById("filtered").addEventListener("change", () => filterSubs(subList));

getSubs();