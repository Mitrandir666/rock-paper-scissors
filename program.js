theGame();

function theGame(){

let round = 0;
let playerPoints = 0;
let computerPoints = 0;
let playerWeapon;
let computerWeapon;
let computerWeaponArray = ["ROCK", "PAPER", "SCISSORS"];

//inicjalizacja glownego rodzica
const body = document.querySelector("body");

//inicjalizacja tytulu
const title = document.querySelector("#gameTitle");

// inicjalizacja kontenera na ekran startowy gry
const startGame = document.querySelector("#containerForGameStarting");

// inicjalizacja przycisku "rozpocznij gre"
const beginButton = document.querySelector("#startGame");

//inicjalizacja kontenera z numerem rundy
const kontenerNaNumerRundy = document.querySelector("#containerForRoundNumberDisplay");
const wyswietlNumerRundy = document.createElement("div");
wyswietlNumerRundy.id = "wyswietlNumerRundy";

//inicjalizacja kontenera do wyboru broni
const kontenerNaWyborBroni = document.querySelector("#weaponSelectorContainer");

//inicjalizacja kontenera na wyswietlacze broni
const kontenerNaWyswietlanieBroni = document.querySelector("#weaponDisplayContainer");

//inicjalizacja kontenera na kolejne rundy
const newRoundButtonContainer = document.querySelector("#buttonNextRoundContainer");

//inicjalizacja kontenera na wynik rundy
const roundResultsContainer = document.querySelector("#roundResultsContainer");

//inicjalizacja kontenera na wynik calej gry
const winnerContainer = document.querySelector("#winnerNameContainer");


// obsluga przycisku "rozpocznij gre"
beginButton.addEventListener('click', hideContainerForGameStarting);
beginButton.addEventListener('click', displayPoints);
beginButton.addEventListener('click', updateRoundNumber);
beginButton.addEventListener('click', nextRound);
   


function hideContainerForGameStarting(){ // ta funkcja wylacza przycisk "rozpocznij gre";
    body.removeChild(startGame);
    body.removeChild(title);
};

function displayPoints(){
    const containerForPointsDisplay = document.querySelector("#containerForPointsDisplay");
    
    // player  points display
    const containerForPlayerPoints = document.createElement("div");//1
    containerForPlayerPoints.style.backgroundColor = "white";//tuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
    containerForPlayerPoints.id = "containerForPlayerPoints";
    containerForPointsDisplay.appendChild(containerForPlayerPoints);

    const titleForPlayerPointsDisplay = document.createElement("h2");
    titleForPlayerPointsDisplay.id = "titleForPlayerPointsDisplay";
    titleForPlayerPointsDisplay.innerText = "PLAYER SCORE";
    containerForPlayerPoints.appendChild(titleForPlayerPointsDisplay);

    const boxForPlayerPoints = document.createElement("div");
    boxForPlayerPoints.id ="boxForPlayerPoints";
    containerForPlayerPoints.appendChild(boxForPlayerPoints);

    const playerPointsDisplay = document.createElement("p");
    playerPointsDisplay.id = "playerPointsDisplay";
    playerPointsDisplay.innerText = playerPoints;
    boxForPlayerPoints.appendChild(playerPointsDisplay);

    

    //computer points display
    const containerForComputerPoints = document.createElement("div");//1
    containerForComputerPoints.style.backgroundColor = "white";//tuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
    containerForComputerPoints.id = "containerForComputerPoints";
    containerForPointsDisplay.appendChild(containerForComputerPoints);//ok

    const titleForComputerPointsDisplay = document.createElement("h2");
    titleForComputerPointsDisplay.id = "titleForComputerPointsDisplay";
    titleForComputerPointsDisplay.innerText = "COMPUTER SCORE";
    containerForComputerPoints.appendChild(titleForComputerPointsDisplay);

    const boxForComputerPoints = document.createElement("div");
    boxForComputerPoints.id = "boxForComputerPoints";
    containerForComputerPoints.appendChild(boxForComputerPoints);

    const computerPointsDisplay = document.createElement("p");
    computerPointsDisplay.id = "computerPointsDisplay";
    computerPointsDisplay.innerText = computerPoints;
    boxForComputerPoints.appendChild(computerPointsDisplay);
}




function nextRound(){
    
    //budowa etykiety na wybor broni
    const containerForWeaponSelectTitle = document.createElement("div");
    containerForWeaponSelectTitle.id = "containerForWeaponSelectTitle";
    kontenerNaWyborBroni.appendChild(containerForWeaponSelectTitle);
    const textSelectYourWeapon = document.createElement("h3");
    textSelectYourWeapon.id = "textSelectYourWeapon";
    textSelectYourWeapon.innerText = "SELECT YOUR WEAPON :";
    containerForWeaponSelectTitle.appendChild(textSelectYourWeapon);

    //budowa kontenera na przyciski wyboru broni
    const containerForWeaponButtons = document.createElement("div");
    containerForWeaponButtons.id = "containerForWeaponButtons";
    kontenerNaWyborBroni.appendChild(containerForWeaponButtons);
    
    //budowa przyciskow wyboru broni
    const buttonRock = document.createElement("button");
    buttonRock.id = "rockWeaponButton";
    buttonRock.innerText = "ROCK";
    containerForWeaponButtons.appendChild(buttonRock);
    const buttonPaper = document.createElement("button");
    buttonPaper.id = "paperWeaponButton";
    buttonPaper.innerText = "PAPER";
    containerForWeaponButtons.appendChild(buttonPaper);
    const buttonScissors = document.createElement("button");
    buttonScissors.id = "scissorsWeaponButton";
    buttonScissors.innerText = "SCISSORS";
    containerForWeaponButtons.appendChild(buttonScissors);
    
    buttonRock.addEventListener('click', rockWeaponButton);
    buttonPaper.addEventListener('click', paperWeaponButton);
    buttonScissors.addEventListener('click', scissorsWeaponButton);
};

function rockWeaponButton(){
    playerWeapon = "ROCK";
    kontenerNaWyborBroni.removeChild(containerForWeaponSelectTitle);
    kontenerNaWyborBroni.removeChild(containerForWeaponButtons); 
    computerWeapon = computerSelection(); 
    weaponContainersInicialisation();// tworzy divy i wyswietla w nich nazwy broni ktore zostaly wybrane
    roundResult();// oblicza i aktualizuje punkty
    if (round<5){
        createNextRoundButton();//wyswietla przycisk nextRound
    }
    else
    endGame();
};

function paperWeaponButton(){
    playerWeapon = "PAPER";
    kontenerNaWyborBroni.removeChild(containerForWeaponSelectTitle);
    kontenerNaWyborBroni.removeChild(containerForWeaponButtons);
    computerWeapon = computerSelection();
    weaponContainersInicialisation();// tworzy divy i wyswietla w nich nazwy broni ktore zostaly wybrane
    roundResult();// oblicza i aktualizuje punkty
    if (round<5){
        createNextRoundButton();//wyswietla przycisk nextRound
    }
    else
    endGame();
};

function scissorsWeaponButton(){
    playerWeapon = "SCISSORS";
    kontenerNaWyborBroni.removeChild(containerForWeaponSelectTitle);
    kontenerNaWyborBroni.removeChild(containerForWeaponButtons);
    computerWeapon = computerSelection();
    weaponContainersInicialisation();// tworzy divy i wyswietla w nich nazwy broni ktore zostaly wybrane
    roundResult();// oblicza i aktualizuje punkty
    if (round<5){
        createNextRoundButton();//wyswietla przycisk nextRound
    }
    else
    endGame();
}

function testForNextRoundButton(){
    //budowa napisu "Choose your weapon"
    const containerForWeaponSelectTitle = document.createElement("div");
    containerForWeaponSelectTitle.id = "containerForWeaponSelectTitle";
    kontenerNaWyborBroni.appendChild(containerForWeaponSelectTitle);
    const textSelectYourWeapon = document.createElement("h3");
    textSelectYourWeapon.id = "textSelectYourWeapon";
    textSelectYourWeapon.innerText = "SELECT YOUR WEAPON";
    containerForWeaponSelectTitle.appendChild(textSelectYourWeapon);

    //budowa kontenera na przyciski wyboru broni
    const containerForWeaponButtons = document.createElement("div");
    containerForWeaponButtons.id = "containerForWeaponButtons";
    kontenerNaWyborBroni.appendChild(containerForWeaponButtons);
    
    //budowa przyciskow do wyboru broni
    const buttonRock = document.createElement("button");
    buttonRock.id = "rockWeaponButton";
    buttonRock.innerText = "ROCK";
    containerForWeaponButtons.appendChild(buttonRock);
    const buttonPaper = document.createElement("button");
    buttonPaper.id = "paperWeaponButton";
    buttonPaper.innerText = "PAPER";
    containerForWeaponButtons.appendChild(buttonPaper);
    const buttonScissors = document.createElement("button");
    buttonScissors.id = "scissorsWeaponButton";
    buttonScissors.innerText = "SCISSORS";
    containerForWeaponButtons.appendChild(buttonScissors);
    buttonRock.addEventListener('click', rockWeaponButton);
    buttonPaper.addEventListener('click', paperWeaponButton);
    buttonScissors.addEventListener('click', scissorsWeaponButton);
}



function roundResult(){

    //tworzenie kontenera na wyswietlanie wyniku rundy
        const roundResultDisplayContainer = document.createElement("div");
        roundResultDisplayContainer.id = "roundResultDisplayContainer";
        roundResultsContainer.appendChild(roundResultDisplayContainer);

        // tworzenie h3 na wyswietlanie tekstu z wynikiem
        const roundResultDisplayText = document.createElement("h3");
        roundResultDisplayText.id = "roundResultDisplayText";

    //naliczanie i aktualizacja punktow
    if (((playerWeapon === "ROCK") && (computerWeapon === "SCISSORS"))||((playerWeapon === "PAPER") && (computerWeapon === "ROCK"))||((playerWeapon === "SCISSORS") && (computerWeapon === "PAPER"))){
        roundResultDisplayText.innerHTML = "PLAYER WIN <br> POINTS + 1 ";
        roundResultDisplayContainer.appendChild(roundResultDisplayText);
        playerPoints+=1;
        playerPointsDisplay.innerText = playerPoints;//test
        computerPointsDisplay.innerText = computerPoints;//test
        containerForPlayerPoints.style.backgroundColor = "lightgrey";//tuuuuuuuuuu
    }
    else if (playerWeapon === computerWeapon){
        roundResultDisplayText.innerHTML = "DRAW <br> POINTS + 1 ";
        roundResultDisplayContainer.appendChild(roundResultDisplayText);
        playerPoints+=1;
        computerPoints+=1;
        playerPointsDisplay.innerText = playerPoints;//test
        computerPointsDisplay.innerText = computerPoints;//test
        containerForPlayerPoints.style.backgroundColor = "lightgrey";//tuuuuuuuuuu
        containerForComputerPoints.style.backgroundColor = "lightgrey";//tuuuuuuuuuu
    }
    else {
        roundResultDisplayText.innerHTML = "COMPUTER WIN <br> COMPUTER POINTS + 1 ";
        roundResultDisplayContainer.appendChild(roundResultDisplayText);
        computerPoints+=1;
        playerPointsDisplay.innerText = playerPoints;//test
        computerPointsDisplay.innerText = computerPoints;//test
        containerForComputerPoints.style.backgroundColor = "lightgrey";//tuuuuuuuuuu
    }
};

function deleteNextRoundButton(){// kasuje przycisk nextRound wtedy gdy runda jeszcze sie nie zakonczyla
    newRoundButtonContainer.removeChild(buttonNextRound);
};

function clearWeaponDisplayContainer(){// czysci wyswietlanie nazw broni dla nastepnej rundy
    playerWeapon = "";
    computerWeapon = "";
    playerDisplayWeaponContainer.remove();
    computerDisplayWeaponContainer.remove();
};

function clearRoundResultDisplayContainer(){// kasuje rezultat poprzedniej rundy
    roundResultDisplayContainer.remove();
};

function weaponContainersInicialisation(){
    // inicjalizacja kontenerow na wyswietlanie wybranych broni.
        
        //dla gracza:
            const playerDisplayWeaponContainer = document.createElement("div");
            playerDisplayWeaponContainer.id = "playerDisplayWeaponContainer";
            kontenerNaWyswietlanieBroni.appendChild(playerDisplayWeaponContainer);
            const playerWeaponTitle = document.createElement("h2");
            playerWeaponTitle.id = "playerWeaponTitle";
            playerWeaponTitle.innerText = "Your choice : "
            playerDisplayWeaponContainer.appendChild(playerWeaponTitle);
            const playerWeaponName = document.createElement("h3");
            playerWeaponName.id = "playerWeaponName";
            playerWeaponName.innerText = playerWeapon;
            playerDisplayWeaponContainer.appendChild(playerWeaponName);

        //dla komputera
            const computerDisplayWeaponContainer = document.createElement("div");
            computerDisplayWeaponContainer.id = "computerDisplayWeaponContainer";
            kontenerNaWyswietlanieBroni.appendChild(computerDisplayWeaponContainer);
            const computerWeaponTitle = document.createElement("h2");
            computerWeaponTitle.id = "computerWeaponTitle";
            computerWeaponTitle.innerText = "Computer's choice :";
            computerDisplayWeaponContainer.appendChild(computerWeaponTitle);
            const computerWeaponName = document.createElement("h3");
            computerWeaponName.id = "computerWeaponName";
            computerWeaponName.innerText = computerWeapon;
            computerDisplayWeaponContainer.appendChild(computerWeaponName);
};

function createNextRoundButton(){// tworzy przycisk next round oraz go programuje
    // inicjalizacja przycisku NEXT ROUND - test      
        const buttonNextRound = document.createElement("button");
        buttonNextRound.id = "buttonNextRound";
        buttonNextRound.innerText = "NEXT ROUND";
        newRoundButtonContainer.appendChild(buttonNextRound);
        buttonNextRound.addEventListener('click', updateRoundNumber);
        buttonNextRound.addEventListener('click', testForNextRoundButton);
        buttonNextRound.addEventListener('click', deleteNextRoundButton);
        buttonNextRound.addEventListener('click', clearWeaponDisplayContainer);// test 
        buttonNextRound.addEventListener('click', clearRoundResultDisplayContainer); // test
        buttonNextRound.addEventListener('click', clearBackgroundColors);
};

function updateRoundNumber(){// aktualizuje numer odgrywanej rundy
    if (round<5){
        wyswietlNumerRundy.innerText = "";
        round+=1;
        wyswietlNumerRundy.innerText = "ROUND " + round;
        kontenerNaNumerRundy.appendChild(wyswietlNumerRundy);
    }
};

function computerSelection(){// konputer losuje swoja bron
    return computerWeaponArray[Math.floor(Math.random()*3)];
};

function lastRound(){
    kontenerNaNumerRundy.remove();
    playerDisplayWeaponContainer.remove();
    computerDisplayWeaponContainer.remove();
    roundResultDisplayContainer.remove();

    containerForPointsDisplay.style.marginTop = "20vh";//337

    
    if (playerPoints < computerPoints){
        containerForPlayerPoints.style.backgroundColor = "red";
        containerForComputerPoints.style.backgroundColor = "green";
    // komunikat tekstowy kto wygral
        const winnerName = document.createElement("h1");
        winnerName.id = "winnerName";
        winnerName.innerText = "YOU LOST";
        winnerContainer.appendChild(winnerName);
        
    }else if (playerPoints == computerPoints){
        //komunikat tekstowy kto wygral
        const winnerName = document.createElement("h1");
        winnerName.id = "winnerName";
        winnerName.innerText = "DRAW";
        winnerContainer.appendChild(winnerName);
        containerForPlayerPoints.style.backgroundColor = "orange";
        containerForComputerPoints.style.backgroundColor = "orange";
        
    }else{
        containerForPlayerPoints.style.backgroundColor = "green";
        containerForComputerPoints.style.backgroundColor = "red";
        //komunikat tekstowy kto wygral
        const winnerName = document.createElement("h1");
        winnerName.id = "winnerName";
        winnerName.innerText = "YOU WIN";
        winnerContainer.appendChild(winnerName);
    }
    const nextGame = document.createElement("button");
    nextGame.id = "nextGameButton";
    nextGame.innerText = "Play again";
    winnerContainer.appendChild(nextGame);
    nextGame.addEventListener('click', function(){
        location.reload();
    });
};    
function endGame(){
    setTimeout(lastRound, 2000);
};
function clearBackgroundColors(){
    containerForComputerPoints.style.backgroundColor = "white";//tuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
    containerForPlayerPoints.style.backgroundColor = "white";//tuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
}


};// koniec funkcji theGame