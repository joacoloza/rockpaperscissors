const resultsDiv = document.getElementById("resultsDiv");
const computerOut = document.createElement('p');
const outPut = document.createElement('p');
const evalueOut = document.createElement('p');
const finalOut  =document.createElement('p');
resultsDiv.appendChild(computerOut);
resultsDiv.appendChild(evalueOut);
resultsDiv.appendChild(outPut);
resultsDiv.appendChild(finalOut);


const buttonElem = document.querySelector("button");
buttonElem.textContent = 'Play Round!';
buttonElem.addEventListener('click',()=>{
    playRound();
});


function getComputerChoice(){ 
    var options= ["rock","papper","scissors"]
    var i =  Math.floor(Math.random() * options.length);
    computerOut.textContent = 'computer choose'+' '+options[i] ;
    return options[i];
}

function playRound(){
    pcPoints=0;
    playerPoints=0;
    
    const divElem = document.getElementById("buttonsDiv");  
    const btnRock = document.createElement('button');
    btnRock.textContent = 'Rock'; 
    const btnPapper = document.createElement('button');
    btnPapper.textContent = 'Papper';
    const btnScissors = document.createElement('button');
    btnScissors.textContent = 'Scissors';

    divElem.appendChild(btnRock);
    divElem.appendChild(btnPapper);
    divElem.appendChild(btnScissors);

    btnRock.addEventListener('click',function(){
        point=evalue(getComputerChoice(),'rock');
        updatePoints(point);
        outPut.textContent='pc points'+' '+pcPoints+' '+'your points'+playerPoints;
        if (playerPoints === 5) {
            alert("You win!");
            disableButtons();
        } else if (pcPoints === 5) {
            alert("PC wins!");
            disableButtons();

        }
    });

    btnPapper.addEventListener('click',function(){
        point=evalue(getComputerChoice(),'papper');
        updatePoints(point);
        outPut.textContent='pc points'+' '+pcPoints+' '+'your points'+playerPoints;
        if (playerPoints === 5) {
            alert("You win!");
            disableButtons();
        } else if (pcPoints === 5) {
            alert("PC wins!");
            disableButtons();
        }
    });
    
    btnScissors.addEventListener('click',function(){
        point= evalue(getComputerChoice(),'scissors');
        updatePoints(point);
        outPut.textContent='pc points'+' '+pcPoints+' '+'your points'+playerPoints;
        if (playerPoints === 5) {
            alert("You win!");
            disableButtons();
        } else if (pcPoints === 5) {
            alert("PC wins!");
            disableButtons();
        }
    });

    function updatePoints(point) {
        if (point === "p") {
            playerPoints++;
            console.log(playerPoints + "pp");
        } else if (point === "pc") {
            pcPoints++;
            console.log(playerPoints + "pc");
        }
    }

    function disableButtons() {
        divElem.removeChild(btnRock);
        divElem.removeChild(btnPapper);
        divElem.removeChild(btnScissors);
        computerOut.textContent = '';
        outPut.textContent = '';
        evalueOut.textContent = '';
        finalOut.textContent = '';
    }
}

function evalue (pc,player){
    if (pc === player) {
        evalueOut.textContent='its a tie';
        return 'tie';
    } else if ((pc === 'rock' && player === 'scissors') ||
               (pc === 'paper' && player === 'rock') ||
               (pc === 'scissors' && player === 'paper')) {
                evalueOut.textContent='Pc wins';
                return 'pc';
    } else {
        evalueOut.textContent='U win';
        return 'p';
    }
}
