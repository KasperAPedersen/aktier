# Website with the stocks I'm currently looking at.

## How to use:
1. Enter the following command ``` npm install ``` in the console
2. Change the port to your desired port @ app.js - line 3
3. Enter the following command ``` sudo npm start ``` in the console

## How to add a stock to the watchlist:
1. Find the stock on nordnet.
2. Add the nordnet link to the 'stocks' array @ app.js - line 4
3. Add the following line to the 'stocks' array @ index.js - line 1
```
["***STOCK NAME***", "***STOCK VALUTA***", 0, 0, 0, 0, "åben", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dKBtpx StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Development__StyledDevelopment-hnn1ri-0 MQEHm", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 jILKmC StatsBox__StyledPriceText-sc-1p4v3dm-2 cfKViN", "Typography__Span-sc-10mju41-0 efGqYn Typography__StyledTypography-sc-10mju41-1 dXsYiZ"]
```

## How to remove a stock from the watchlist:
1. Remove the stocks link from the 'stocks' array @ app.js - line 4
2. Remove the stock from the 'stocks' array @ index.js - line 1