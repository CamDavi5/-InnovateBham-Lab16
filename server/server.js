//Step 1
const path = require('path');
const fs = require('fs');

let chirpArr = [
    {
        username: '@Sora',
        message: "Kingdom Hearts is light!"
    },
    {
        username: '@Kirby',
        message: "Puyo poyo! ('.')/"
    },
    {
        username: '@Tanjiro',
        message: "Here's your reminder that Nezuko is the best little sister!"
    },
    {
        username: '@Waluigi',
        message: "To whoever is reading this: L+ratio"
    },
    {
        username: '@Lucio',
        message: "Movin' with the payload!"
    }
];

let chirpsPath = path.join(__dirname, '../chirps.json')
fs.writeFile(chirpsPath, JSON.stringify(chirpArr), (err) => {
    if (err) {
        console.log(err);
    }
});

fs.readFile(chirpsPath, {
    encoding: "utf-8"
}, (err, data) => {
    if(err) {
        console.log(err);
    }
    
    JSON.parse(data).forEach(chirp => {
        console.log(chirp.username);
        console.log(chirp.message);
    });
});