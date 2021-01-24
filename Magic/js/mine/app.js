const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1ButtonMinus = document.querySelector("#p1ButtonMinus");
const p2ButtonMinus = document.querySelector("#p2ButtonMinus");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const reset = document.querySelector("#reset");



let p1Score = 20;
let p2Score = 20;
let losingScore = 0;       
let isGameOver = false;



p1Button.addEventListener('click', function(){
    if(!isGameOver){
        if (p1Score!==losingScore){
            p1Score+=1;
            if(p1Score===losingScore){
                isGameOver=true;
                p1Display.classList.add('winner');
                p2Display.classList.add('loser');
            }
            p1Display.innerText = p1Score;
}
}
}
)

p2Button.addEventListener('click', function(){
    if(!isGameOver){
        if(p2Score!==losingScore){
            p2Score+=1;
            if(p2Score===losingScore){
                isGameOver=true;
                p2Display.classList.add('winner');
                p1Display.classList.add('loser');

            }
            p2Display.innerText = p2Score;
    }
   
}
}
)

p1ButtonMinus.addEventListener('click', function(){
    if(!isGameOver){
        if (p1Score!==losingScore){
            p1Score-=1;
            if(p1Score===losingScore){
                isGameOver=true;
                p1Display.classList.add('loser');
                p2Display.classList.add('winner');
            }
            p1Display.innerText = p1Score;
}
}
}
)

p2ButtonMinus.addEventListener('click', function(){
    if(!isGameOver){
        if(p2Score!==losingScore){
            p2Score-=1;
            if(p2Score===losingScore){
                isGameOver=true;
                p1Display.classList.add('winner');
                p2Display.classList.add('loser');

            }
            p2Display.innerText = p2Score;
    }
   
}
}
)





    reset.addEventListener('click', resetFunc)

function resetFunc(){
    p1Score = 20;
        p2Score = 20;
        p2Display.innerText = p2Score;
        p1Display.innerText = p1Score;
        isGameOver=false;
        p1Display.classList.remove('winner', 'loser');
        p2Display.classList.remove('loser', 'winner');
}