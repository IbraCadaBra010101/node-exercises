// 1a Skriv ett program som läser in en textfil och skriver ut innehållet på konsolen. Använd funktionen readFile.
// require the filesystem module
//
// fs.readFile('ovningar.txt', (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(data.toString(), 'some data');
//     }
// });

// 1b Skriv ett program som sparar texten "filhantering visar hur vi använder strömmar i Node" i en fil. Använd writeFile.

// fs.writeFile('./ovningar.txt','>>>>>>>filhantering visar hur vi använder strömmar i Node>>>>>>>', (err) => {
//     if(err){
//         return console.log(err);
//     }
//     console.log('text was save to file ovningar.txt');
// });
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

