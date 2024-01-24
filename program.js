const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
let playerPoints = 0;
let computerPoints =0;


function getComputerChoice(){                                               // randomly taking weapon name from an array for computerplayer
    let weaponArray = ['rock', 'paper', 'scissors'];
    let computer = weaponArray[Math.floor(Math.random()*3)];
    return computer;
}

function getPlayerChoice(){                                                 // player chooses his weapon
    let weaponArray = ['rock', 'paper', 'scissors'];
    let player = weaponArray[prompt('0 = rock, 1 = paper, 2 = scissors. Chose Your weapon wisely: ')];
    return player;
}

function playRound(playerSelection, computerSelection){                     //function compares players and computers weapons and calculate the verdict.
    if (playerSelection===computerSelection){
        playerPoints=playerPoints + 1;
        computerPoints=computerPoints +1;
        return 'DRAW! ' + playerSelection +' is equal ' + computerSelection;
    }else if ((playerSelection==='rock' && computerSelection==='scissors')||(playerSelection==='paper' && computerSelection==='rock')||(playerSelection==='scissors' && computerSelection==='paper')){
        playerPoints=playerPoints +1;
        return 'player wins! '+ playerSelection+ ' beat '+ computerSelection;
    }else{
        computerPoints=computerPoints +1;
        return 'computer wins '+ computerSelection+ ' beat '+ playerSelection;
    }
}
console.log(playRound(playerSelection, computerSelection));





// let weaponArray=['rock','paper','scissors'];            //tablica z ktorej komputer i gracz wybieraja bron


// let computer = weaponArray[Math.floor(Math.random()*3)];             // komputer losuje swoja bron z tablicy
//     console.log(computer);

// let player = weaponArray[prompt('0 = rock, 1 = paper, 2 = scissors. Choose Your weapon wisely: ')]; // gracz wybiera bron z tablicy
//     console.log(player);

// //draw
// if (computer === player){
//     console.log('computer choosed: ' + computer);
//     console.log('player choosed: ' + player);
//     console.log('DRAW');
//     console.log('play again - press: F5');
// //computer    
// }    else if((computer==='scissors' && player==='paper') || (computer==='rock' && player==='scissors') || (computer==='paper' && player==='rock')){
//     console.log('computer choosed: ' + computer);
//     console.log('player choosed: ' + player);
//     console.log('COMPUTER WON!');
//     console.log('play again - press: F5');
// //player    
// }   else{
//     console.log('computer choosed: ' + computer);
//     console.log('player choosed: ' + player);
//     console.log('PLAYER WON!');
//     console.log('play again - press: F5');
// }
