// 2a Skapa filer med namnen server.js och animals.js. Animals ska exportera en funktion getAnimals,
// som man kan anropa för att få en lista med information om djur. Använd module.exports för att exportera
// funktionen. Server-filen ska starta en webbserver, som har en route för varje funktion.
// Exempel: /api/allAnimalNames, /api/getNumberOfLegs?animal=fox. Användaren ska med hjälp av querystring
// få ut information om djuren i listan.

const animalsJS = require('./animals.js');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');
app.get('/', (req, res) => {
    res.send('root path')
});
app.get('/getOneAnimalsDiet', (req, res) => {
    const animalName = (req.query.name);
    animalsJS.findWhatDoesThisAnimalEat(animalName, 'getOneAnimalsDiet');
    res.sendFile(path.join(__dirname + '/data.json'), 'utf-8');
});


app.get('/getOneAnimalsPopulation', (req, res) => {
    console.log(req.params);
    const animalName = (req.query.name);
    animalsJS.findWhatDoesThisAnimalEat(animalName, 'getOneAnimalsPopulation');
    res.sendFile(path.join(__dirname + '/data.json'), 'utf-8');
});

app.get('/getAnimalNumber/:id', (req, res) => {
    const animalID = Number(req.params.id);
    console.log(animalID);
    animalsJS.findWhatDoesThisAnimalEat(animalID, 'getAnimalNumber');
    res.sendFile(path.join(__dirname + '/data.json'), 'utf-8');
});


app.listen(port, () => {
    console.log(`Listening to port ${port}!`)
});
