const p1  = {
    id:1,
    score:20,
    button: document.querySelector("#p1Button"),
    buttonMinus: document.querySelector("#p1ButtonMinus"),
    display: document.querySelector("#p1Display"),
    nameIn: document.querySelector("#p1NameIn"),
    name: document.querySelector("#p1Name"),
    submit: document.querySelector("#p1Submit"),
    changeName: document.querySelector("#p1ChangeName"),
    gameOver:("")
}

const p2 = {
    id:2,
    score: 20,
    button: document.querySelector("#p2Button"),
    buttonMinus: document.querySelector("#p2ButtonMinus"),
    display: document.querySelector("#p2Display"),
    nameIn: document.querySelector("#p2NameIn"),
    name: document.querySelector("#p2Name"),
    submit: document.querySelector("#p2Submit"),
    changeName: document.querySelector("#p2ChangeName"),
    gameOver:("")
}


const reset = document.querySelector("#reset");

let p1Score = 20;
let p2Score = 20;
let losingScore = 0;       
let isGameOver = false;
let p1GameOver = '';
let p2GameOver = '';

function toggleButtons(){
    p2.buttonMinus.classList.toggle('hide');
    p2.button.classList.toggle('hide');
    p1.buttonMinus.classList.toggle('hide');
    p1.button.classList.toggle('hide');
    p1.changeName.classList.toggle('hide');
    p2.changeName.classList.toggle('hide');

}

function hideNameSubmit(){
    p1.nameIn.classList.add('hide');
    p1.submit.classList.add('hide');
    p2.nameIn.classList.add('hide');
    p2.submit.classList.add('hide');
}


function nameInputHider(player){
    player.nameIn.classList.add('hide');
    player.submit.classList.add('hide');
    if(player.nameIn.value===''){
        player.name.innerText=`Player ${player.id}`}};

function removeColors (player){
    player.display.classList.remove('winner','loser');
}


function resetFunc(){
        p1.score = 20;
        p2.score = 20;
        p2.display.innerText = p2.score;
        p1.display.innerText = p1.score;
        isGameOver=false;
        removeColors(p1);
        removeColors(p2);
        showButtons(p1);
        showButtons(p2);
        p1.name.innerText=p1.gameOver;
        p2.name.innerText=p2.gameOver;

}

function showButtons(player){
    player.buttonMinus.classList.remove('hide');
     player.button.classList.remove('hide');
     player.changeName.classList.remove('hide');
}

function plusScores(player, opponent){
    {
        if(!isGameOver){
            if (player.score!==losingScore){
                player.score+=1;
                player.display.innerText = player.score;
    }
    }
    }

}

function minusScores(player,opponent){
    if(!isGameOver){
        if (player.score!==losingScore){
            player.score-=1;
            if(player.score===losingScore){
                isGameOver=true;
                hideNameSubmit();
                player.display.classList.add('loser');
                opponent.display.classList.add('winner');
                toggleButtons();
                player.gameOver= player.name.innerText;
                opponent.gameOver= opponent.name.innerText;
                player.name.innerText = `${player.gameOver}, lost!`;
                opponent.name.innerText = `${opponent.gameOver}, Won!`;
                
            }
            player.display.innerText = player.score;
}
}
}

function nameChanger(player){
    player.name.innerText = player.nameIn.value;
    player.gameOver = player.name.innerText;
    

}

function nameToggler(player){
    player.nameIn.classList.toggle('hide');
    player.submit.classList.toggle('hide');
    if(player.nameIn.innerText===''){
        player.name.innerText=`Player ${player.id}`}
        player.nameIn.value = "";
        player.gameOver=player.name.innerText;

}





p1.button.addEventListener('click', function(){
    plusScores(p1,p2);
})

p2.button.addEventListener('click', function(){
   plusScores(p2,p1);
})

p1.buttonMinus.addEventListener('click', function(){
 minusScores(p1,p2);
})

p2.buttonMinus.addEventListener('click', function(){
    minusScores(p2,p1);  
})

reset.addEventListener('click', resetFunc);

p2.nameIn.addEventListener('change', function(){
    nameChanger(p2);
})

p1.nameIn.addEventListener('change', function(){
    nameChanger(p1);
})

p1.submit.addEventListener('click', function(){
    nameInputHider(p1);
})

p2.submit.addEventListener('click', function(){
    nameInputHider(p2);
})

p1.nameIn.addEventListener('keyup', function(event){
    if(event.code === 'Enter'){
        nameInputHider(p1);}
})

p2.nameIn.addEventListener('keyup', function(event){
    if(event.code === 'Enter'){
        nameInputHider(p2);}
})

p1.changeName.addEventListener('click', function(){
    nameToggler(p1);
})

p2.changeName.addEventListener('click', function(){
    nameToggler(p2);
})

