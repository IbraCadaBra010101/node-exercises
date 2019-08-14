// 1a Skriv ett program som läser in
// en textfil och skriver ut innehållet
// på konsolen. Använd funktionen readFile.
// require the filesystem module
//
// const fs = require('fs');
// const readOptions = {
//     encoding: 'utf8'
// };
// fs.readFile('./essay.txt', readOptions, (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(data, 'some data');
//     }
// });


// 1b Skriv ett program som sparar texten
// "filhantering visar hur vi använder strömmar i Node" i en fil.
// Använd writeFile.
// const saveThisText = `filhantering visar hur vi använder strömmar i Node`;
// const exercisesFile = `./ovningar.txt`;
// const writeOptions = {
//     flag: 'a',
//     encoding: 'utf8'
// };
// fs.writeFile(exercisesFile, saveThisText, writeOptions
//     ,
//     (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('text was save to file ovningar.txt');
//         }
//     });
// 2. Skriv ett program som läser in innehållet i en
// textfil och skriver ut det på konsolen. Men den
// ska läsa filen som en ström.

// const readOptions = {encoding: 'utf8'};
// const exercises = './ovningar.txt';
//
// const streamReader = fs.createReadStream(exercises, readOptions);
//
// streamReader.on('data', (chunk) => {
//     console.log(chunk);
// });
// streamReader.on('end', () => {
//     console.log('Streaming finished')
// });

// 3 Skriv ett program som tar emot input från användaren
// och skriver ut det på konsolen, fast med bara stora bokstäver.
// let stdin = process.openStdin();
//
// stdin.on('data', data  => {
//     let input = data.toString().toUpperCase();
//     if(input){
//         console.log(input)
//     } else{
//         console.log('error')
//     }
// });


// let stdin = process.openStdin();
//
// stdin.on('data', data => {
//     let input = data.toString().trim();
//     console.log(`Data från standard input: "${input}"`);
//     if( input === 'hello, how are you?' ) {
//         console.log("I'm fine thanks");
//     }
// });
//
// console.log('Välkommen!');
// console.log('1. Alternativ 1');
// console.log('2. Alternativ 2');


// 4 Vad är skillnaden mellan import/export och require?
// I princip samma funktionalitet för att kunna importera och
// exportera moduler.
// require() och export.module tillhör commonJS. Den JS version
// som google v8 engine stödjer och kallas för statisk dvs synkron. Medan import och export tillhör E6 och är dynamisk.
// import och export omvandlas till commonJS i slutändan ändå då all
// ES6, ES7 kod blir commonJS dvs kommunicera med v8 i chrome.
// En skillnad är att require är synkront. Allting importeras
// exporteras steg för steg utan hänsyn till andra processer som
// drar ut på tiden. Medan es6 tillåter dynamic imports dvs
// asynkront importera vissa moduler när dem väl krävs i runtime via async await
// som returenerar ett promise.
// Viktigt att komma ihåg: att importera en modul via promise async innebär att vi också måste
// exportera den asynkront.
// exempel "import * './clickmeddelande' endast om meddelande är true och
// användaren clickat på knappen meddelande.
// kodexempel:
// const click =  (valid) =>{
//     if(valid){
//         import('./clickmeddelande'){
//
//         }
//     }
// };
// for (let beer in bar) {
//     if (bar.hasOwnProperty(beer)) {
//     import ölglas from `./${glasOchBestick}`;
//     }
// }

// 5 Skriv ett program som består av main.js och data.js.
// Programmet ska startas med main.js.
// När man startar det så ska programmet hämta data från data.js
// och skriva ut den. Använd require och module.exports.

/***main.js
 * data.js
 * */
//


// 6 Skriv ett program som frågar användaren efter ett filnamn.
//Om filen finns så ska innehållet skrivas ut,
//annars ska programmet säga att filen inte existerar och avslutas. Utan felmeddelanden!
//
// const port = 3000;
// const express = require('express');
// const fs = require('fs');
// const app = express();
// const path = require('path');
// const index = '/index.html';
// const readOptions = {
//     encoding: 'utf8'
// };
//
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + index))
// });
// app.post('/', (req, res) => {
//     let filePath = '';
//
//         req.on('data', chunk => {
//             filePath += chunk.toString().slice(8);
//             res.sendFile(path.join(__dirname + '/' + filePath));
//         });
//     });
//
//
// app.listen(port || process.env.port);

// 6 Skriv ett program som frågar användaren
// efter ett filnamn. Om filen finns så ska innehållet
// skrivas ut, annars ska programmet säga att filen inte
// existerar och avslutas. Utan felmeddelanden! Tips: använd
// flaggor till readFile och ett try/catch-block.

// let stdin = process.openStdin();
// const fs = require('fs');
//
// stdin.on('data', (input) => {
//     console.log(`${input}`, 'input');
//     try {
//         let data = fs.readFileSync('./index.html', 'utf8');
//         console.log(data);
//     } catch (e) {
//         console.log('Error:', e);
//     }
// });

let fs = require('fs');
let stdin = process.openStdin();
stdin.on('data', input => {
    let file = input.toString().trim();

    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) throw 'No such file';
        else {
            console.log(data.toString())
        }
    });
});
