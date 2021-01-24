const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1ButtonMinus = document.querySelector("#p1ButtonMinus");
const p2ButtonMinus = document.querySelector("#p2ButtonMinus");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const reset = document.querySelector("#reset");
const p2NameIn = document.querySelector("#p2NameIn");
const p2Name = document.querySelector("#p2Name");
const p1NameIn = document.querySelector("#p1NameIn");
const p1Name = document.querySelector("#p1Name");
const p1Submit = document.querySelector("#p1Submit");
const p2Submit = document.querySelector("#p2Submit");
const p1ChangeName = document.querySelector("#p1ChangeName");
const p2ChangeName = document.querySelector("#p2ChangeName");


let p1Score = 20;
let p2Score = 20;
let losingScore = 0;       
let isGameOver = false;
let p1GameOver = '';
let p2GameOver = '';

function toggleButtons(){
    p2ButtonMinus.classList.toggle('hide');
    p2Button.classList.toggle('hide');
    p1ButtonMinus.classList.toggle('hide');
    p1Button.classList.toggle('hide');
    p1ChangeName.classList.toggle('hide');
    p2ChangeName.classList.toggle('hide');

}


p1Button.addEventListener('click', function(){
    if(!isGameOver){
        if (p1Score!==losingScore){
            p1Score+=1;
            if(p1Score===losingScore){
                isGameOver=true;
                hideNameSubmit();
                p1Display.classList.add('winner');
                p2Display.classList.add('loser');
                toggleButtons();

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
                hideNameSubmit();
                p2Display.classList.add('winner');
                p1Display.classList.add('loser');
                toggleButtons();

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
                hideNameSubmit();
                p1Display.classList.add('loser');
                p2Display.classList.add('winner');
                toggleButtons();
                p1GameOver= p1Name.innerText;
                p2GameOver= p2Name.innerText;
                p1Name.innerText = `${p1GameOver}, lost!`;
                p2Name.innerText = `${p2GameOver}, Won!`;
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
                hideNameSubmit();
                p1Display.classList.add('winner');
                p2Display.classList.add('loser');
                toggleButtons();
               p2GameOver= p2Name.innerText;
                p1GameOver= p1Name.innerText;
                p2Name.innerText = `${p2GameOver}, lost!`;
                p1Name.innerText= `${p1GameOver}, Won!`;


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
        p2ButtonMinus.classList.remove('hide');
        p2Button.classList.remove('hide');
        p1ButtonMinus.classList.remove('hide');
        p1Button.classList.remove('hide');
        p1ChangeName.classList.remove('hide');
    p2ChangeName.classList.remove('hide');
if(p1GameOver!=='' && p2GameOver!==''){
   p1Name.innerText=p1GameOver;
   p2Name.innerText=p2GameOver;
}

}

p2NameIn.addEventListener('input', function(){
    p2Name.innerText = p2NameIn.value;

})

p1NameIn.addEventListener('input', function(){
    p1Name.innerText = p1NameIn.value;

})

p1Submit.addEventListener('click', function(){
    p1NameIn.classList.add('hide');
    p1Submit.classList.add('hide');
    if(p1NameIn.value===''){
        p1Name.innerText="Player 1"}
})

p2Submit.addEventListener('click', function(){
    p2NameIn.classList.add('hide');
    p2Submit.classList.add('hide');
    if(p2NameIn.value===''){
        p2Name.innerText="Player 2"}
})

p1ChangeName.addEventListener('click', function(){
    p1NameIn.classList.toggle('hide');
    p1Submit.classList.toggle('hide');
    if(p1NameIn.value===''){
        p1Name.innerText="Player 1"}

})

p2ChangeName.addEventListener('click', function(){
    p2NameIn.classList.toggle('hide');
    p2Submit.classList.toggle('hide');
    if(p2NameIn.value===''){
        p2Name.innerText="Player 2"}

})

function hideNameSubmit(){
    p1NameIn.classList.add('hide');
    p1Submit.classList.add('hide');
    p2NameIn.classList.add('hide');
    p2Submit.classList.add('hide');
}