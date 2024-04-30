


let playerPoints = 0;
let computerPoints = 0;

const startGame = document.querySelector("#startGame");
startGame.addEventListener('click', game);


   
  
 
    function game(){
    
        let computerWeapon; /*tu wstaw funcje wyboru broni przez komputer - mozliwe ze trzeba te zmienna przeniesc gdzies nizej zeby zadzialala w odpowiednim momencie*/
        let playerWeapon; /* tu wstaw funkcje wyboru broni przez gracza - uwaga na widzialnosc zdarzen i zmiennych - mozliwe ze trzeba te zmienna przeniesc nizej aby zadzialala w odpowiednim momencie*/
        const body = document.querySelector("body");
        const weaponSelectorContainer = document.querySelector("#weapon_selector_container");
        const chooseWeaponTitle = document.createElement("h2");
        chooseWeaponTitle.textContent = "Choose your weapon: ";
        weaponSelectorContainer.appendChild(chooseWeaponTitle);
        body.removeChild(startGame);

        //attaching button ROCK
        const rockButton = document.createElement("button");
        rockButton.id = "rockButton";
        rockButton.textContent = "ROCK";
        weaponSelectorContainer.appendChild(rockButton);

        //attaching button scissors
        const scissorsButton = document.createElement("button");
        scissorsButton.id = "scissorsButton";
        scissorsButton.textContent = "SCISSORS";
        weaponSelectorContainer.appendChild(scissorsButton);

        //attaching button paper
        const paperButton = document.createElement("button");
        paperButton.id = "paperButton";
        paperButton.textContent = "PAPER";
        weaponSelectorContainer.appendChild(paperButton);

        //eventlistener for rockButton and its function
        rockButton.addEventListener('click', rockWeaponSelection);
        
        //eventlistener for scissorsButton and its function
        scissorsButton.addEventListener('click', scissorsWeaponSelection);
        
        //eventlistener for paperButton and its function
        paperButton.addEventListener('click', paperWeaponSelection);
        

    };//end of game function

    //functions for weaponButtons - player selection
    function rockWeaponSelection(){
        playerWeapon = "rock";
        console.log(playerWeapon);
        computerWeapon = computerSelection();
        console.log(computerWeapon);
        document.querySelector("#weapon_selector_container").remove();//tuuuuuuuuuuuuuuu
    };
    function scissorsWeaponSelection(){
        playerWeapon = "scissors";
        console.log(playerWeapon);
        computerWeapon = computerSelection();
        console.log(computerWeapon);
        document.querySelector("#weapon_selector_container").remove();
    };
    function paperWeaponSelection(){
        playerWeapon = "paper";
        console.log(playerWeapon);
        computerWeapon=computerSelection();
        console.log(computerWeapon);
        document.querySelector("#weapon_selector_container").remove();
    };

    //function body where computer is choosing its weapon
    function computerSelection(){
        let computerWeaponArray=["rock","paper","scissors"];
        return computerWeaponArray[Math.floor(Math.random()*3)];
    }
















