// 2a Skapa filer med namnen server.js och animals.js. Animals ska exportera en funktion getAnimals,
// som man kan anropa för att få en lista med information om djur. Använd module.exports för att exportera
// funktionen. Server-filen ska starta en webbserver, som har en route för varje funktion.
// Exempel: /api/allAnimalNames, /api/getNumberOfLegs?animal=fox. Användaren ska med hjälp av querystring
// få ut information om djuren i listan.


const fs = require('fs');

let findWhatDoesThisAnimalEat = (animalInfo, query) => {
    const animals = [{
        animalName: 'Lion',
        region: 'India & Africa',
        diet: 'Meat',
        population: 4030294,
        id: 1,
    }, {
        animalName: 'Giraffe',
        region: 'Africa',
        diet: 'fruit based',
        population: 6738485,
        id: 2,
    }, {
        animalName: 'Cow',
        region: 'All over the world',
        diet: 'just diet coke',
        population: 45000040,
        id: 3,
    }];
    if (query === 'getOneAnimalsDiet') {
        animals.map(animal => {
            if (animal.animalName.toLowerCase() === animalInfo.toLowerCase()) {
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
            if (animal.animalName.toLowerCase() === animalInfo.toLowerCase()) {
                const thisAnimalsPopulation = `The ${animal.animalName} pop. consists ${animal.population} individuals`;
                fs.writeFileSync('./data.json', JSON.stringify(thisAnimalsPopulation), (error) => {
                    if (error) throw error;
                    console.log('data written to JSON file: ' + thisAnimalsPopulation);
                });
            }
        });
    }
    if (query === 'getAnimalNumber') {
        animals.map(animal => {
            if (animal.id === animalInfo) {
                fs.writeFileSync('./data.json', JSON.stringify(animal), (error) => {
                    if (error) throw error;
                    console.log('data written to JSON file: ');
                });
            }
        });
    }
};


module.exports = {
    findWhatDoesThisAnimalEat: findWhatDoesThisAnimalEat
};
