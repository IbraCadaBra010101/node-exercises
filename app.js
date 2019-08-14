// 1a Skriv ett program som läser in
// en textfil och skriver ut innehållet
// på konsolen. Använd funktionen readFile.
// require the filesystem module
//
const fs = require('fs');
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
const saveThisText = `filhantering visar hur vi använder strömmar i Node`;
const exercisesFile = `./ovningar.txt`;
const writeOptions = {
    flag: 'a',
    encoding: 'utf8'
};
// fs.writeFile(exercisesFile, saveThisText, writeOptions
//     ,
//     (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('text was save to file ovningar.txt');
//         }
//     });
// 2 Skriv ett program som läser in innehållet i en textfil och skriver ut det på konsolen. Men den ska läsa filen som en ström.
// const readStream = fs.createReadStream('./ovningar.txt');
// readStream.on('data', (chunk) => {
//     console.log(chunk.toString());
// });

// 3 Skriv ett program som tar emot input från användaren och skriver ut det på konsolen, fast med bara stora bokstäver.

// const fs = require('fs');
// const http = require('http');
// const express = require('express');
// const app = express();
// const path = require('path');
//
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });
//
// app.post('/', (req, res) => {
//     const body = [];
//     return req.on('data', chunk => {
//         body.push(chunk.toString().split('=')[1]);
//         console.log(body);
//     });
// });
// app.listen(3000 || process.env.port);
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

// const port = 3000;
// const fs = require('fs');
// const express = require('express');
// const app = express();
// const path = require('path');
//
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + '/index.html'))
// });
// app.post('/', (req, res) => {
//     const fileName = [];
//     req.on('data', chunk => {
//         fileName.push(chunk.toString().split('=')[1]);
//         res.sendFile(path.join(__dirname + '/' + fileName[0]));
//         // console.log(path.join(__dirname + '/' + fileName[0]));
//     });
//     // res.sendFile()
//  });
// app.get('/showfile', () => {
//
// });
// app.listen(port || process.env.port);


// 7* Skapa en texteditor! Allt eftersom användaren skriver så ska det sparas i en textfil.

// const port = 3000;
// const fs = require('fs');
// const express = require('express');
// const app = express();
// const path = require('path');
// const writeStream = fs.createWriteStream('essay.txt');
//
// var fs = require('fs');
// var wstream = fs.createWriteStream('myOutput.txt');
// wstream.write('Hello world!\n');
// wstream.write('Another line\n');
// wstream.end();

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + '/index.html'));
//     writeStream.write('Hello');
// });
// app.post('/', (req, res) => {
//     // const text = [];
//     req.on('data', chunk => {
//         console.log(chunk);
//     });
// });

// app.post('/', (req, res) => {
//     const fileName = [];
//     req.on('data', chunk => {
//         fileName.push(chunk.toString().split('=')[1]);
//         res.sendFile(path.join(__dirname + '/' + fileName[0]));
//         // console.log(path.join(__dirname + '/' + fileName[0]));
//     });
//     // res.sendFile()
//  });


// app.listen(port);






