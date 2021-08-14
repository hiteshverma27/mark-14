var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitButton = document.querySelector('#submit-button');
var outputBox = document.querySelector('#output-box');


function calculateProfitLoss(initial, quantity, current){
    if (initial > current){
        //write loss statement here
        var loss = (initial-current)*quantity;
        var lossPer = (loss/initial)*100;
        console.log(`Your loss is ${loss} and loss percentage is ${lossPer}% `)} 

    
    else if(current  > initial){
        //write profit logic here
        var profit = (current-initial)*quantity;
        var profitPer = (profit/initial)*100;
        console.log(`Your profit is ${profit} and profit percentage is ${profitPer}% `)
    }
    else{
        //write no profit statement here
        console.log("No profit no loss go get a life!!")

    }
}

calculateProfitLoss(10, 10, 10);