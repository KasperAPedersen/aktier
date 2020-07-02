let stocks = [
    // Name, valuta, currVal, currProfit, low, high, status, currValSearch, currProfitSearch, lowSearch, highSearch, statusSearch
    ["Wirecard AG", "EUR",  0, 0, 0, 0, "åben", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 OjNHA", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"],
    ["Norwegian Air Shuttle", "NOK", 0, 0, 0, 0, "åben", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"],
    ["Tryg A/S", "DKK", 0, 0, 0, 0, "åben", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"],
    ["Ryanair Holdings Plc", "EUR", 0, 0, 0, 0, "åben", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"],
    ["H. Lundbeck A/S", "DKK", 0, 0, 0, 0, "åben", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"],
    ["SAS AB", "DKK", 0, 0, 0, 0, "åben", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"],
    ["FOM Technologies A/S", "DKK", 0, 0, 0, 0, "åben", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"],
    ["ISS A/S", "DKK", 0, 0, 0, 0, "åben", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"]
];


window.addEventListener('DOMContentLoaded', () => {
    for(let i = 0; i < stocks.length; i++) {
        updateStock(i);
        addStock(i);
    }

    setInterval(() => {
        for(let i = 0; i < stocks.length; i++) {
            updateStock(i);
        }
    }, 1000);
});

function updateStock(stock){
    fetch(`/get?stock=${stock}`)
    .then((res) => {
        if(res.status !== 200) {
            throw new Error('Failed to fetch!');
        } else {
            return res.json();
        }
    })
    .then((json) => {
        getCurrentPrice(json, stock);
        getCurrentProfit(json, stock);
        getLowestPrice(json, stock);
        getHighestPrice(json, stock);
        getStatus(json, stock);
        updateStockList(stock);
    });
}

function getCurrentPrice(json, stock){
    let elem = document.createElement('div');
    elem.innerHTML = json.html;
    
    if(elem.getElementsByClassName(stocks[stock][7])[0] != undefined) {
        stocks[stock][2] = elem.getElementsByClassName(stocks[stock][7])[0].innerHTML;
    }
}

function getCurrentProfit(json, stock) {
    let elem = document.createElement('div');
    elem.innerHTML = json.html;

    if(elem.getElementsByClassName(stocks[stock][8])[1] != undefined) {
        stocks[stock][3] = elem.getElementsByClassName(stocks[stock][8])[1].innerText;
    }
}

function getLowestPrice(json, stock) {
    let elem = document.createElement('div');
    elem.innerHTML = json.html;

    if(elem.getElementsByClassName(stocks[stock][9])[3] != undefined) {
        stocks[stock][4] = elem.getElementsByClassName(stocks[stock][9])[3].innerText;
    }
}

function getHighestPrice(json, stock) {
    let elem = document.createElement('div');
    elem.innerHTML = json.html;

    if(elem.getElementsByClassName(stocks[stock][10])[2] != undefined){
        stocks[stock][5] = elem.getElementsByClassName(stocks[stock][10])[2].innerText;
    }
}

function getStatus(json, stock) {
    let elem = document.createElement('div');
    elem.innerHTML = json.html;

    if(elem.getElementsByClassName(stocks[stock][11])[2] != undefined){
        stocks[stock][6] = elem.getElementsByClassName(stocks[stock][11])[10].innerText;
    }
}

function updateStockList(stock){
    document.getElementById(`stock${stock}Price`).innerHTML = `${stocks[stock][2]} <span class="stockValuta">${stocks[stock][1]}</span>`;
    document.getElementById(`stock${stock}Profit`).innerHTML = stocks[stock][3];
    document.getElementById(`stock${stock}Low`).innerHTML = stocks[stock][4];
    document.getElementById(`stock${stock}High`).innerHTML = stocks[stock][5];
    document.getElementById(`stock${stock}Status`).innerHTML = stocks[stock][6];
}

function addStock(stock){
   let tab = document.createElement('div');
   tab.classList = "stockTab";
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
    </div>`;
    document.getElementById('stocks').appendChild(tab);
}