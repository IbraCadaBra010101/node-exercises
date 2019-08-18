// 2a Skapa filer med namnen server.js och animals.js. Animals ska exportera en funktion getAnimals,
// som man kan anropa för att få en lista med information om djur. Använd module.exports för att exportera
// funktionen. Server-filen ska starta en webbserver, som har en route för varje funktion.
// Exempel: /api/allAnimalNames, /api/getNumberOfLegs?animal=fox. Användaren ska med hjälp av querystring
// få ut information om djuren i listan.


const fs = require('fs');

let findWhatDoesThisAnimalEat = (animalName, query) => {
    const animals = [{
        animalName: 'Lion',
        region: 'India & Africa',
        diet: 'Meat',
        population: 4030294,
    }, {
        animalName: 'Giraffe',
        region: 'Africa',
        diet: 'fruit based',
        population: 6738485,
    }, {
        animalName: 'Cow',
        region: 'All over the world',
        diet: 'just diet coke',
        population: 45000040,
    }];
    if (query === 'getOneAnimalsDiet') {
        animals.map(animal => {
            if (animal.animalName.toLowerCase() === animalName.toLowerCase()) {
                const thisAnimalEats = `${animal.animalName} eats ${animal.diet} diet`;
                fs.writeFileSync('./data.json', JSON.stringify(thisAnimalEats), (error) => {
                    if (error) throw error;
                    console.log('data written to JSON file: ' + thisAnimalEats);
                });
            }
        });
    }
    if (query === 'getOneAnimalsPopulation') {
        animals.map(animal => {
            if (animal.animalName.toLowerCase() === animalName.toLowerCase()) {
                const thisAnimalsPopulation = `The ${animal.animalName} pop. consists ${animal.population} individuals`;
                fs.writeFileSync('./data.json', JSON.stringify(thisAnimalsPopulation), (error) => {
                    if (error) throw error;
                    console.log('data written to JSON file: ' + thisAnimalsPopulation);
                });
            }
        });
    }
};

// findWhatDoesThisAnimalEat('lion', 'getOneAnimalsDiet');
// get region, diet and legs for each animal.
// querystring diet = lion


module.exports = {
    findWhatDoesThisAnimalEat: findWhatDoesThisAnimalEat
};


// console.log(request.includes(animal.animalName));
// if(request.includes(animal.animalName)){
//     console.log(animal.animalName);
// }

// animals.forEach(animal => {
//     if (request === 'allAnimalObjects') {
//          fs.writeFileSync('./data.json', JSON.stringify(animal), (error) => {
//             if (error) throw error;
//             console.log('data written')
//         });
//     }
//     console.log(animals);
//
//     if (request === 'allAnimalNames') {
//         console.log(animal.animalName, 'returning all names');
//         return animal.animalName;
//     }
//
//     if (request.includes('getNumberOfLegs?animal')) {
//         if (animal.animalName === 'Lion') {
//             fs.writeFile('./data.json', JSON.stringify(animal.legs), (error) => {
//                 if (error) throw error;
//                 console.log('data written')
//             });
//         }
//     }
// })

