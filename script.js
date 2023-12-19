function sixSideDie() {
    let rollDie = Math.random() * 10;
    let wholeNumber = Math.floor(rollDie);
    if(wholeNumber < 1 || wholeNumber > 6){
        sixSideDie();
    }
    else(console.log(wholeNumber))
    
}
sixSideDie();


// function multiDice(numSides) {
//     let diceRoll = Math.random() * 21;
//     let wholenumber = Math.floor(diceRoll);
//     if(wholenumber < 1 || wholenumber > numSides){
//         multiDice();
//     }
//     else(console.log(wholenumber))
// }
// multiDice(6);



