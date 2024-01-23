let weaponArray=['rock','paper','scissors'];            //tablica z ktorej komputer i gracz wybieraja bron


let computer = weaponArray[Math.floor(Math.random()*3)];             // komputer losuje swoja bron z tablicy
    console.log(computer);

let player = weaponArray[prompt('0 = rock, 1 = paper, 2 = scissors. Choose Your weapon wisely: ')]; // gracz wybiera bron z tablicy
    console.log(player);

//draw
if (computer === player){
    console.log('computer choosed: ' + computer);
    console.log('player choosed: ' + player);
    console.log('DRAW');
    console.log('play again - press: F5');
//computer    
}    else if((computer==='scissors' && player==='paper') || (computer==='rock' && player==='scissors') || (computer==='paper' && player==='rock')){
    console.log('computer choosed: ' + computer);
    console.log('player choosed: ' + player);
    console.log('COMPUTER WON!');
    console.log('play again - press: F5');
//player    
}   else{
    console.log('computer choosed: ' + computer);
    console.log('player choosed: ' + player);
    console.log('PLAYER WON!');
    console.log('play again - press: F5');
}
