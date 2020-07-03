let stockUpdateInterval = 2500; // How often should the stock information be updated? in ms
let stocks = [
    // Name, valuta, currVal, currProfit, low, high, status, currValSearch, currProfitSearch, lowSearch, highSearch, statusSearch
    ["Wirecard AG", "EUR",  0, 0, 0, 0, "Lukket", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"],
    ["Norwegian Air Shuttle", "NOK", 0, 0, 0, 0, "Lukket", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"],
    ["Tryg A/S", "DKK", 0, 0, 0, 0, "Lukket", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"],
    ["Ryanair Holdings Plc", "EUR", 0, 0, 0, 0, "Lukket", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"],
    ["H. Lundbeck A/S", "DKK", 0, 0, 0, 0, "Lukket", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"],
    ["SAS AB", "DKK", 0, 0, 0, 0, "Lukket", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"],
    ["FOM Technologies A/S", "DKK", 0, 0, 0, 0, "Lukket", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"],
    ["ISS A/S", "DKK", 0, 0, 0, 0, "Lukket", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"],
    ["Marriott Int. - C. A", "USD", 0, 0, 0, 0, "Lukket", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"],
    ["Marriott Vac. - W. Corp.", "USD", 0, 0, 0, 0, "Lukket", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"],
    ["Gilead Sciences, Inc. (NASDAQ)", "USD", 0, 0, 0, 0, "Lukket", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"],
    ["Gilead Sciences, Inc. (XETRA)", "EUR", 0, 0, 0, 0, "Lukket", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"]

];


window.addEventListener('DOMContentLoaded', () => {
    for(let i = 0; i < stocks.length; i++) { // Loop through each stock
        updateStock(i); // Update stock information
        addStock(i); // Add stocks to html
    }

    setInterval(() => {
        for(let i = 0; i < stocks.length; i++) { // Loop through each stock
            updateStock(i); // Update stock information
        }
    }, stockUpdateInterval); // Every X ms
});

function updateStock(stock){
    fetch(`/get?stock=${stock}`) // Fetch the selected stock
    .then((res) => {
        if(res.status !== 200) { // If the status doesn't equal 200
            throw new Error('Failed to fetch!'); // Return error
        } else {
            return res.json(); // Return response in json format
        }
    })
    .then((json) => {
        getCurrentPrice(json, stock); // Get the stocks current price
        getCurrentProfit(json, stock); // Get the stocks current +/- (for today)
        getLowestPrice(json, stock); // Get the stocks lowest price (for today)
        getHighestPrice(json, stock); // Get the stocks highest price (for today)
        getStatus(json, stock); // Get the stocks marked status (open/closed)
        updateStockList(stock); // Update the html with the new stock information
    });
}

function getCurrentPrice(json, stock){
    let elem = document.createElement('div'); // Create a div element
    elem.innerHTML = json.html; // Adding the fetched data to the div element
    
    if(elem.getElementsByClassName(stocks[stock][7])[0] != undefined) { // Find the current price of the stock
        stocks[stock][2] = elem.getElementsByClassName(stocks[stock][7])[0].innerHTML; // Update the currPrice variable
    }
}

function getCurrentProfit(json, stock) {
    let elem = document.createElement('div'); // Create a div element
    elem.innerHTML = json.html; // Adding the fetched data to the div element

    if(elem.getElementsByClassName(stocks[stock][8])[1] != undefined) { // Find the current price of the stock
        stocks[stock][3] = elem.getElementsByClassName(stocks[stock][8])[1].innerText; // Update the currProfit variable
    } else if(elem.getElementsByClassName('Development__StyledDevelopment-hnn1ri-0 OjNHA')[1] != undefined){
        stocks[stock][3] = elem.getElementsByClassName('Development__StyledDevelopment-hnn1ri-0 OjNHA')[1].innerText; // Update the currProfit variable
    }
}

function getLowestPrice(json, stock) {
    let elem = document.createElement('div'); // Create a div element
    elem.innerHTML = json.html; // Adding the fetched data to the div element

    if(elem.getElementsByClassName(stocks[stock][9])[3] != undefined) { // Find the lowest price of the stock
        stocks[stock][4] = elem.getElementsByClassName(stocks[stock][9])[3].innerText; // Update the low variable
    }
}

function getHighestPrice(json, stock) {
    let elem = document.createElement('div'); // Create a div element
    elem.innerHTML = json.html; // Adding the fetched data to the div element

    if(elem.getElementsByClassName(stocks[stock][10])[2] != undefined){ // Find the highest price of the stock
        stocks[stock][5] = elem.getElementsByClassName(stocks[stock][10])[2].innerText; // Update the high variable
    }
}

function getStatus(json, stock) {
    let elem = document.createElement('div'); // Create a div element
    elem.innerHTML = json.html; // Adding the fetched data to the div element

    if(elem.getElementsByClassName(stocks[stock][11])[2] != undefined){ // Find the status of the stocks marked
        stocks[stock][6] = elem.getElementsByClassName(stocks[stock][11])[10].innerText; // Update the status variable
    }
}

function updateStockList(stock){
    document.getElementById(`stock${stock}Price`).innerHTML = `${stocks[stock][2]} <span class="stockValuta">${stocks[stock][1]}</span>`; // Update the stocks current price
    document.getElementById(`stock${stock}Profit`).innerHTML = stocks[stock][3]; // Update the stocks current +/-
    document.getElementById(`stock${stock}Low`).innerHTML = stocks[stock][4]; // Update the stocks lowest price
    document.getElementById(`stock${stock}High`).innerHTML = stocks[stock][5]; // Update the stocks highest price
    document.getElementById(`stock${stock}Status`).innerHTML = stocks[stock][6]; // Update the stocks marked status
}

function addStock(stock){
   let tab = document.createElement('div'); // Create a div element
   tab.classList = "stockTab"; // Set the divs classes
   tab.innerHTML = `<div class="stockHead">
        <p class="stockTitle">${stocks[stock][0]}</p>
        <p class="stockStatus" id="stock${stock}Status">${stocks[stock][6]}</p>
        <div class="floatFixer"></div>
    </div>
    <div class="stockBody">
        <p class="stockPrice" id="stock${stock}Price">${stocks[stock][2]} <span class="stockValuta">${stocks[stock][1]}</span></p>
        <i class="fas fa-dollar-sign stockProfit" id="stock${stock}Profit">${stocks[stock][3]}</i>
        <i class="fas fa-long-arrow-alt-down stockLow" id="stock${stock}Low">${stocks[stock][4]}</i><i class="fas fa-long-arrow-alt-up stockHigh" id="stock${stock}High">${stocks[stock][5]}</i>
        <div class="floatFixer"></div>
    </div>`; // Set the divs html
    document.getElementById('stocks').appendChild(tab); // Add the div to the html
}