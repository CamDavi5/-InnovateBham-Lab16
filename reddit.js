//Step 2
const rp = require('request-promise');
const path = require('path');
const fs = require('fs');

let redditPath = path.join(__dirname, 'popular-articles.json');
let redditArr = [];

rp('https://reddit.com/r/popular.json')
    .then((htmlString) => {
        JSON.parse(htmlString).data.children.forEach(post => {
            redditArr.push(
                {
                    title: post.data.title,
                    url: post.data.url,
                    author: post.data.author_fullname
                }
            );
        });

        fs.writeFile(redditPath, JSON.stringify(redditArr), (err) => {
            console.log(err);
        });
    })
    .catch((err) => {
        console.log(err);
    });

