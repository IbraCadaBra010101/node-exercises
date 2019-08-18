const url = 'http://localhost:3000/getAnimalNumber/3';

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById("id").innerHTML = data.id;
        document.getElementById("pop").innerHTML = data.population;
        document.getElementById("diet").innerHTML = data.diet;
        document.getElementById("region").innerHTML = data.region;
        document.getElementById("name").innerHTML = data.animalName;
    });

// <ul>
// <li id="name"></li>
//     <li id="id"></li>
//     <li id="pop"></li>
//     <li id="diet"></li>
//     <li id="region"></li>
//     </ul>

// {animalName: "Cow", region: "All over the world", diet: "just diet coke", population: 45000040, id: 3}
// animalName: "Cow"
// diet: "just diet coke"
// id: 3
// population: 45000040
// region: "All over the world"