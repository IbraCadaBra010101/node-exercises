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

// let fs = require('fs');
// let stdin = process.openStdin();
// stdin.on('data', input => {
//     let file = input.toString().trim();
//
//     fs.readFile(file, 'utf-8', (err, data) => {
//         if (err) throw 'No such file';
//         else {
//             console.log(data.toString())
//         }
//     });
// });

//7* Skapa en texteditor!
// Allt eftersom användaren
// skriver så ska det sparas i en textfil.

// let stdin = process.openStdin();
// const fs = require('fs');
//
// stdin.on('data', (input) => {
//      let text = input.toString().trim() + '\n';
//     fs.appendFile('text.txt', text, (error) => {
//         if (error) throw error;
//         else{
//             console.log('Saved: ' + text)
//         }
//     })
// });
//
//


// 8** Skriv ett interaktivt program som frågar användaren efter
// ett filnamn. Programmet ska skapa en fil med det namnet och
// fylla den med 2MB text. Använd funktionen Math.random()
// för att skapa slumpvis bokstäver och mellanslag.
// (Kan du göra så funktionen slumpar "ord" som är
// lättare att läsa? I stället för t.ex. "srtghaua" ska
// funktionen slumpa "sopati", dvs slumpa varannan
// konsonant och varannan vokal.) Använd streams för
// att skriva till filen och console.time()
// och console.timeEnd() för att ta tiden
// på hur lång tid det tar att skapa filen.
// Komplettera med en funktion
// som läser igenom en fil och skriver ut på konsolen hur lång tid det tog.
//

// const randomWords = () => {
// const lettersCon = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
//     "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//
// const lettersVoc = ['a', 'e', 'i', 'u', 'y', 'o',];
//
//     let wordLength = Math.floor(Math.random() * 2 + 1);
//     const words = [];
//     for (let i = 0; i <= wordLength; i++) {
//         let randomNumLettersCon = Math.floor(Math.random() * lettersCon.length);
//         let randomNumLettersVoc = Math.floor(Math.random() * lettersVoc.length);
//         words.push(lettersCon[randomNumLettersCon]);
//         words.push(lettersVoc[randomNumLettersVoc]);
//     }
//     return words.join('') + ' ';
// };
// // skriv massa "ord" till filen
// let stdin = process.openStdin();
// const fs = require('fs');
// stdin.on('data', (input) => {
//      const fileName = input.toString().trim();
//     let writeStreamFile = fs.createWriteStream(fileName);
//     console.time("Time this");
//
//     for (let i = 0; i < 400000; i++) {
//         writeStreamFile.write(randomWords());
//     }
//     console.timeEnd("Time this");
// });
// // läs orden.
// let stdinReadFile = process.openStdin();
// const readAsStream = (file) => {
//     let readStreamFile = fs.createReadStream(file);
//     readStreamFile.on('data', (data) => {
//        console.log(data.toString());
//     });
// };
//
// stdinReadFile.on('data', (input) => {
//     const fileName = input.toString().trim();
//     console.time('Time reading stream file');
//     readAsStream(fileName);
//     console.timeEnd('Time reading stream file');
// });
//
// // take in input for a file
// // readfile as stream and use time and timeEnd.
//
//

// 1a Vad är ett protokoll och vad använder man det till?
// protokoll används som ett sorts kontrakt mellan parter som vill överföra
// information. Ett protokoll kan bestå av regler om vilket format informationen
// ska överföras. Man använder protokoll för att skapa ett förutsägbart
// sätt för parter att kommunicera information.

// 1b 1b Varför ska man ange statuskod?
// Som del av HTTP- protokollet måste en web server svara på ett request med
// en statuskod som består av 3 siffror. Statuskoden används för att kommunicera
// med användaren över resultet/ res. 200 innebär success. 404 betyder not found
// etc.

//2xx Success
// 2. Vad betyder statuskoderna:200 OK
// Standard response for successful HTTP requests.
//4xx Client errors
//404 Not Found
// The requested resource could not be found but may be
// available in the future. Subsequent requests by the
// client are permissible.
//5xx Server errors
// 500 Internal Server Error
// A generic error message, given when an unexpected
// condition was encountered and no more specific message is suitable

// 3a Skapa ett nytt projekt (npm init).
// Skriv en webbserver (den inbyggda HTTP-modulen i Node)
// som skickar strängen "hello world" när en klient ansluter till den.
// Öppna en ny terminal och kör webbservern på localhost.

// const port = 3000;
// const greeting = 'Hello World';
// const http = require('http');
// http.createServer((req, res) => {
//     res.write(greeting);
//     res.end();
//
// }).listen(port);

// 3b Skapa en enkel textfil som innehåller HTML.
// Uppdatera webbservern så att den i stället för en sträng
// skickar HTML-filen som en ström.

// const port = 3000;
// const fs = require('fs');
// const http = require('http');
// const readFile = fs.createReadStream('./html.txt');
// http.createServer((req, res) => {
//     readFile.on('data', (data) => {
//         const html = data.toString();
//         res.write(html);
//         res.end();
//     });
//
// }).listen(port);

// 4* Uppdatera webbserven så att den kan göra olika
// saker beroende på vilken URL som efterfrågas.
//a. Om URL är '/' så ska startsidan skickas.

// b. Om URL är '/upper/' så ska startsidan skickas, men
// alla bokstäver ska vara stora. (Tips: toUpperCase()
// och duplex-ström.)
// c. Om URL är något annat så ska du
// skicka en annan sida, som visar felmeddelandet 404.
//
// const port = 3000;
// const fs = require('fs');
// const http = require('http');
// const url = require('url');
//
// const server = http.createServer((req, res) => {
//     let readingStream = fs.createReadStream('./html.txt');
//     let writingStream = fs.createWriteStream('./shit.txt');
//     let readStream = fs.createReadStream('./error.html');
//     const urlDetails = url.parse(req.url);
//     const {Transform} = require('stream');
//
//     const capitalize = new Transform({
//         transform(chunk, encoding, callback) {
//             let transformedChunk = chunk.toString().toUpperCase();
//             this.push(transformedChunk);
//             callback();
//         }
//     });
//     readingStream.pipe(capitalize).pipe(writingStream);
//     switch (urlDetails.pathname) {
//         case '/':
//             readingStream.pipe(res);
//             break;
//         case '/upper':
//             fs.createReadStream('./upper Case html.txt').pipe(res);
//             break;
//         default:
//             readStream.pipe(res);
//
//     }
// });
// server.listen(port);
//
//
//

// 5 Lägg till en route till webbservern. Om man skriver /counter
// ska servern svara med en sträng som talar om hur många gånger
// sidan har laddats.

// const port = 3000;
// const fs = require('fs');
// const http = require('http');
// const url = require('url');
// let counter = 1;
//
// const server = http.createServer((req, res) => {
//     console.log(counter);
//
//     let readingStream = fs.createReadStream('./html.txt');
//     let writingStream = fs.createWriteStream('./shit.txt');
//     let readStream = fs.createReadStream('./error.html');
//     let writeStreamCounter = fs.createWriteStream('./counter.txt');
//     writeStreamCounter.write(counter.toString());
//     const urlDetails = url.parse(req.url);
//     const {Transform} = require('stream');
//     const capitalize = new Transform({
//         transform(chunk, encoding, callback) {
//             let transformedChunk = chunk.toString().toUpperCase();
//             this.push(transformedChunk);
//             callback();
//         }
//     });
//
//     readingStream.pipe(capitalize).pipe(writingStream);
//     switch (urlDetails.pathname) {
//         case '/':
//             readingStream.pipe(res);
//             break;
//         case '/upper':
//             fs.createReadStream('./upper Case html.txt').pipe(res);
//             break;
//         case '/counter':
//             counter++;
//             let read = fs.createReadStream('./counter.txt');
//             read.pipe(res);
//             break;
//         default:
//             readStream.pipe(res);
//
//     }
// });
// server.listen(port);
//
// 6 Skriv ett nytt Node-program som skickar ett request till webbservern
// du gjort i tidigare uppgifter. Programmet ska till exempel
// skriva ut vilken statuskod servern svarar med.
// const http = require('http');
// const port = 3000;
// const url = require('url');
// const server = http.createServer((req, res) => {
//     const urlPath = url.parse(req.url);
//     if (urlPath.pathname === '/') {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.write('200');
//         res.end();
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.write('404');
//         res.end();
//     }
// });
// server.listen(port, () => {
//     console.log(`Listening to ${port}`)
// });
//
//
//


const port = 3000;
const fs = require('fs');
const http = require('http');
const url = require('url');
let counter = 1;

// 7* Password cracker! Lägg till en route till webbservern. Om man skriver /login?user=name&password=password så ska servern
// antingen svara med att man är inloggad, eller att det var fel lösenord. Servern ska slumpa ett "lösenord" som ska vara ett
// heltal mellan 1 och 10 med Math.random(). Skriv sedan ett nytt Node-program, som skickar request till servern. (Hackern har
// tagit reda på ett användarnamn med social engineering, så programmet har redan ett giltigt användarnamn. Bara lösenordet är okänt.)
// Så länge servern svarar med att det var fel lösenord ska Hacker-programmet försöka igen. När det lyckas ska det skriva ut lösenordet
// på konsolen. (Tips: lite roligare utskrifter med https://www.npmjs.com/package/colors)
const server = http.createServer((req, res) => {
    let readingStream = fs.createReadStream('./html.txt');
    let writingStream = fs.createWriteStream('./shit.txt');
    let readStream = fs.createReadStream('./error.html');
    let writeStreamCounter = fs.createWriteStream('./counter.txt');
    writeStreamCounter.write(counter.toString());
    const urlDetails = url.parse(req.url);
    const {Transform} = require('stream');
    const capitalize = new Transform({
        transform(chunk, encoding, callback) {
            let transformedChunk = chunk.toString().toUpperCase();
            this.push(transformedChunk);
            callback();
        }
    });
    let randomPassWord = Math.floor(Math.random() * 10 + 1);
    readingStream.pipe(capitalize).pipe(writingStream);
    switch (urlDetails.pathname) {
        case '/':
            readingStream.pipe(res);
            break;
        case '/upper':
            fs.createReadStream('./upper Case html.txt').pipe(res);
            break;
        case '/counter':
            counter++;
            let read = fs.createReadStream('./counter.txt');
            read.pipe(res);
            break;
        case '/login':
            if (req.url.includes(randomPassWord.toString())) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('logged in');
                res.end();
            } else {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.write('wrong password');
                res.end();
            }
            break;
        default:
            readStream.pipe(res);

    }
});
// retry until successcode = 200 in recursive function.
const randomizePassword = Math.floor(Math.random() * 10 + 1);
const loginUrl = `http://localhost:3000/login?user=jim&password=${randomizePassword}`;
let countRetries = 0;
const retry = (statusCode) => {
    http.get(loginUrl, (req, res) => {
        if (req.statusCode === statusCode) {
            return console.log('Success: broke password after', countRetries + 1, 'attempts!: password =', randomizePassword);
        } else {
            ++countRetries;
            console.log('Attempt nr: ', countRetries, ' failed while trying to break password');
            return retry(200);
        }
    });
};
retry(200);

server.listen(port);
