add = (accumulator, a) => {
    return accumulator + a;
}

diceRoller = (a,b) => {
    var diceHolder = [];
    
    for (i = a; i > 0; i--) {
        let k = Math.floor(Math.random() *Math.floor(b));
        diceHolder.push(k);
    }

    console.log(diceHolder.join('+'));
    const sum = parseInt(diceHolder.reduce(add));
    var sumAndModifier = sum + modifier;
    console.log("Total: " + sum + " + modifier: " + sumAndModifier);
}
    const readline = require('readline-sync');
    var timesRolled  = readline.question("How many times would you like to roll? ");
    var sideOfDice = readline.question("What is the sided die? ");
    var modifier = parseInt(readline.question("Modifer: "));
    
    diceRoller(timesRolled,sideOfDice);