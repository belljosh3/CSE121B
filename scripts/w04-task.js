/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : "Joshua Bell",
    photo : "images/self.png", 
    favoritveFoods : [
        "pizza",
        "cookies",
        "burgers",
        "chocolate"
    ],
    hobbies : [
        "Videogames",
        "Building projects",
        "Learning things",
        "Renaissance Faires"
    ],
    placesLived : [],
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place : "Rexburg, Idaho",
        length : "22 years"
    },
    {
        place : "Guthrie, Oklahoma",
        length : "10 years"
    }
);



/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.getElementById("photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoritveFoods.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    document.getElementById("favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    document.getElementById("hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(location => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = location.place;
    dd.textContent = location.length;
    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);
});

