let userscore = 0;
let compscore = 0;

const game = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#userscore")
const compscorepara = document.querySelector("#compscore")

const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};
const drawgame = () => {
    console.log("game was a draw...");
    msg.innerText = "draw" ;
     msg.style.backgroundColor = "brown";
};
const showwinner =(userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText =userscore;
        console.log("you win!");
        msg.innerText = `you win. your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = "green";
        
    }else{
        compscore++;
        compscorepara.innerText =compscore
        console.log("you lose!");
        msg.innerText = `you lose. ${compchoice} beats your ${userchoice}`
         msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    console.log("user choice = ", userchoice);

    const compchoice = gencompchoice();
    console.log("comp choice = ", compchoice);


    if(userchoice === compchoice){
        drawgame();
    } else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice ==="paper" ? false: true;
        }else if(userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true;
        }else{
            compchoice === "rock" ?false: true;
        }showwinner(userwin,userchoice,compchoice);
    }
};

game.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        console.log("choice was clicked", choiceId);

        playgame(choiceId);

    });
});