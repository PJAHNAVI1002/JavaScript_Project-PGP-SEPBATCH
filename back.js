const choices = document.querySelectorAll('.choices');
const secondsection = document.getElementById('secondsection');
const thirdsection = document.getElementById('thirdsection');

let humanchoose;

choices.forEach((a) => {
    a.addEventListener('click', (e) => {
        humanchoose = e.currentTarget.id;
        humanchoice();
    });
});

const humanchoice = () => {
    secondsection.style.display = 'none';
    thirdsection.style.display = 'flex';


    userPick(humanchoose);
}

function userPick(choice) {
    const userImage = document.querySelector('#userpicked #userImage');
    const computerImage = document.querySelector('#computerpicked #computerImage');
    const userCircle = document.querySelector('#userpicked circle');  
    const computerCircle = document.querySelector('#computerpicked circle');

    
    const userPickedSvg = document.getElementById('userpicked');
    if (choice === 'rock') {
        userImage.setAttribute('href', 'rock.png');
        userPickedSvg.id = 'rockpicked';
        userCircle.setAttribute('fill', 'url(#grad1)');
         
    } else if (choice === 'paper') {
        userImage.setAttribute('href', 'paper.png');
        userPickedSvg.id = 'paperpicked';
        userCircle.setAttribute('fill', 'url(#grad1)');
        
         
    } else if (choice === 'scissors') {
        userImage.setAttribute('href', 'scissors.png');
        userPickedSvg.id = 'scissorspicked';
        userCircle.setAttribute('fill', 'url(#grad1)');
        
         
    }

   
    const computerChoice = getComputerChoice();
    if (computerChoice === 'rock') {
        computerImage.setAttribute('href', 'rock.png');
        document.getElementById('computerpicked').id = 'rockpicked';
        computerCircle.setAttribute('fill', 'url(#grad1)');
    
    } else if (computerChoice === 'paper') {
        computerImage.setAttribute('href', 'paper.png');
        document.getElementById('computerpicked').id = 'paperpicked'; 
        computerCircle.setAttribute('fill', 'url(#grad1)');
        
        
    } else if (computerChoice === 'scissors') {
        computerImage.setAttribute('href', 'scissors.png');
        document.getElementById('computerpicked').id = 'scissorspicked';
        computerCircle.setAttribute('fill', 'url(#grad1)');
        

        
    }

   
    setResult(choice, computerChoice);
}


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function setResult(userChoice, computerChoice) {
    const resultContainer = document.querySelector('.resultContainer h1');
    
  
    if (userChoice === computerChoice) {
        resultContainer.textContent = "It's a Draw!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultContainer.textContent = "You Win!";
    } else {
        resultContainer.textContent = "You Lose!";
    }
}


const rulesBtn = document.getElementById("rules");       
const rulesSection = document.getElementById("rulesection"); 
const closeBtn = document.getElementById("closeBtn");   


rulesBtn.addEventListener("click", function() {
    rulesSection.style.display = "block";  
});


closeBtn.addEventListener("click", function() {
    rulesSection.style.display = "none";  
});


window.addEventListener("click", function(event) {
    if (event.target === rulesSection) {
        rulesSection.style.display = "none";  
    }
});




























/*const choices = document.querySelectorAll('.choices');
const secondsection = document.getElementById('secondsection');
const thirdsection = document.getElementById('thirdsection');

let humanchoose;


choices.forEach((a) => {
    a.addEventListener('click', (e) => {
        humanchoose = e.currentTarget.id;
        humanchoice();
        
        
    });
});

const  humanchoice = () =>{
    secondsection.style.display = 'none';
    thirdsection.style.display = 'flex';

}*/
