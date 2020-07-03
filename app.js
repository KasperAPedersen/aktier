
// --
let logMessages = true;
let logHTTPRequests = false;
let usePort = 80;
let stocks = [
    "https://www.nordnet.dk/markedet/aktiekurser/16129173-wirecard",
    "https://www.nordnet.dk/markedet/aktiekurser/16105606-norwegian-air-shuttle",
    "https://www.nordnet.dk/markedet/aktiekurser/16097566-tryg",
    "https://www.nordnet.dk/markedet/aktiekurser/16466059-ryanair-holdings",
    "https://www.nordnet.dk/markedet/aktiekurser/16100065-h-lundbeck",
    "https://www.nordnet.dk/markedet/aktiekurser/16100078-sas",
    "https://www.nordnet.dk/markedet/aktiekurser/17258080-fom-technologies",
    "https://www.nordnet.dk/markedet/aktiekurser/16270886-iss",
    "https://www.nordnet.dk/markedet/aktiekurser/16122008-marriott-international-class"
];
// --

let morgan = require('morgan');
let express = require('express');
let request = require('request');
let app = new express();

if(logHTTPRequests) app.use(morgan('dev'));
app.use(express.static('public'));

app.listen(usePort, (err) => {
    if(logMessages) err ? msg("err", 0, err) : msg("", 0, `Listening on port ${usePort}`);
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
                    if(logMessages) msg("stockErr", req.query["stock"], "Something went wrong!");
                }
            });
        } else {
            if(logMessages) msg("warn", req.query["stock"], "The stock index doesn\'t exist!");
        }
    } else {
        if(logMessages) msg("stockErr", req.query["stock"], "Missing stock index");
    }
});


function msg(type, stock, msg) {
    let temp = "";
    switch(type) {
        case 'err':
            temp = `[!] ${msg}`;
            break;
        case 'stockErr':
            temp = `[!] ${msg} @ stock ${stock}`;
            break;
        case 'warn':
            temp = `[#] ${msg} @ stock ${stock}`;
            break;
        default:
            temp = `[~] ${msg}`;
            break;
    }
    console.log(temp);
}