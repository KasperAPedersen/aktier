
// --
let usePort = 3000;
let stocks = [
    "https://www.nordnet.dk/markedet/aktiekurser/16129173-wirecard",
    "https://www.nordnet.dk/markedet/aktiekurser/16105606-norwegian-air-shuttle",
    "https://www.nordnet.dk/markedet/aktiekurser/16097566-tryg",
    "https://www.nordnet.dk/markedet/aktiekurser/16466059-ryanair-holdings",
    "https://www.nordnet.dk/markedet/aktiekurser/16100065-h-lundbeck",
    "https://www.nordnet.dk/markedet/aktiekurser/16100078-sas",
    "https://www.nordnet.dk/markedet/aktiekurser/17258080-fom-technologies",
    "https://www.nordnet.dk/markedet/aktiekurser/16270886-iss"
];
// --

let morgan = require('morgan');
let express = require('express');
let request = require('request');
let app = new express();

app.use(morgan('dev'));
app.use(express.static('public'));

app.listen(usePort, (err) => {
    console.log(err ? err : `Listening on port ${usePort}`);
});

app.get('/get', (req, res) => {
    if(req.query["stock"] != "" && req.query["stock"] != undefined && !isNaN(req.query["stock"])) {
        if(req.query["stock"] < stocks.length) {
            request(stocks[req.query["stock"]], (error, response, body) => {
                if(!error) {
                    res.json({
                        html: body
                    });
                    res.end();
                } else {
                    console.log('Something went wrong!');
                }
            });
        } else {
            console.log('The stock index doesn\'t exist!');
        }
    } else {
        console.log("Missing stock index");
    }
});