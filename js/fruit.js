//Mr Seagull Wrote this - IT IS AWESOMMMMMMMEEEEEEEEEEE


//Set balance to 500
let balance = 500;
let bet = 0;
let betAmount = document.getElementById("betAmount");
let plusOne = document.getElementById("plusOne");
let plusTen = document.getElementById("plusTen");
let minusOne = document.getElementById("minusOne");
let minusTen = document.getElementById("minusTen");
let status = document.getElementById("status");
let winningTotal = document.getElementById("totalWinningsDisplay");
let balanceTitle = document.getElementById("balanceTitle");
let balanceDisplay = document.getElementById("balanceDisplay");
let numberOfWinsDisplay = document.getElementById("numberOfWins");
let numberOfWins = 0;
let totalWinnings = 0;
let final = [];
let win = 0;
let reset = document.getElementById("reset");
balanceDisplay.textContent = balance;

reset.onclick = () => {
    location.reload();
}




balanceTitle.textContent = " Your Balance is "


const betIncrease1 = () => {
    if ((bet <=99) && (bet <= balance)){
        bet += 1;
        betAmount.textContent = bet;
        return bet;   
    } else {
        return bet;
    }
}

const betIncrease10 = () => {
    if ((bet <=90) && (bet <= balance)){
        bet += 10;
        betAmount.textContent = bet;
        return bet;   
    } else {
        return bet;
    }
}

const betDecrease1 = () => {
    if (bet > 0){
        bet -= 1;
        betAmount.textContent = bet;
        return bet;   
    } else {
        return bet;
    }
}

const betDecrease10 = () => {
    if (bet >= 10){
        bet -= 10;
        betAmount.textContent = bet;
        return bet;   
    } else {
        return bet;
    }
}

let spin = () => {
    if (balance <= 0) {
        balanceTitle.textContent = "No balance remaining, please reset!"
    } 

    if (bet > balance) {
        balanceTitle.textContent = "Not enough balance remaining, please reduce bet!"  
    } 
    
    else {
        balance -= bet;
        final = [];
        final.push(spinReel("r1"));
        final.push(spinReel("r2"));
        final.push(spinReel("r3"));
        //Check if the reels match up by checking 1 and 0 & 0 and 2
        if (final[0] == final[1] && final[0] == final[2]){
            winner();
        }
        else {
            loser();
        }
    updateTheScreen();
    }
} 


let spinReel = (reel) => {
    let i = Math.floor(Math.random()*7);
    if (i == 0){
        document.getElementById(reel).src = "images/OneBar.png";
    }
    if (i == 1){
        document.getElementById(reel).src = "images/Grapes.png";
    }
    if (i == 2){
        document.getElementById(reel).src = "images/Lemon.png";
    }
    if (i == 3){
        document.getElementById(reel).src = "images/Orange.png";
    }
    if (i == 4){
        document.getElementById(reel).src = "images/Strawberry.png";
    }
    if (i == 5){
        document.getElementById(reel).src = "images/Watermelon.png";
    }
    if (i == 6){
        document.getElementById(reel).src = "images/ThreeBars.png";
    }
    return i;
}

const loser = () => {
    document.getElementById("status").src = "images/Fail.png";
}

const winner = () => {
    numberOfWins++;
    numberOfWinsDisplay.textContent = numberOfWins;
    console.log(balance);
    document.getElementById("status").src = "images/BigWin.png";
    if (final[0] == 0) { //One Bar x1
        balance += bet;
        win = bet;
        totalWinnings += win;
        winningTotal.textContent = totalWinnings;
        console.log(balance);
        console.log(win);
    }
    if (final[0] == 1) { //Grape x2
        balance += (bet * 2);  
        win = (bet*2);
        totalWinnings += win;
        winningTotal.textContent = totalWinnings;
        console.log(balance);
        console.log(win);
    }
    if (final[0] == 2) { //Lemon x3
        balance += (bet * 3); 
        win = (bet*3); 
        totalWinnings += win;
        winningTotal.textContent = totalWinnings;
        console.log(balance);
        console.log(win);
    }
    if (final[0] == 3) { //Orange x6
        balance += (bet * 6);  
        win = (bet*6);
        totalWinnings += win;
        winningTotal.textContent = totalWinnings;
        console.log(balance);
        console.log(win);
    }
    if (final[0] == 4) { //Strawberry x5
        balance += (bet * 5); 
        win = (bet*5); 
        totalWinnings += win;
        winningTotal.textContent = totalWinnings;  
        console.log(balance);
        console.log(win);
    }
    if (final[0] == 5) { //Watermelon x4
        balance += (bet * 4);  
        win = (bet*4);
        totalWinnings += win;
        winningTotal.textContent = totalWinnings;
        console.log(balance);
        console.log(win);
    }
    if (final[0] == 6) { //Three Bars x10
        balance += (bet * 10); 
        win = (bet*10);
        totalWinnings += win;
        winningTotal.textContent = totalWinnings;
        console.log(balance);
        console.log(win);
    }

}





const updateTheScreen = () => {
    document.getElementById("balanceDisplay").innerHTML = balance
    
}


plusOne.addEventListener("click", betIncrease1); 
plusTen.addEventListener("click", betIncrease10); 
minusOne.addEventListener("click", betDecrease1); 
minusTen.addEventListener("click", betDecrease10); 

document.getElementById("start").addEventListener("click",spin);