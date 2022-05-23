//variables initialization
let unlockcards =0;
let card1 = null;
let card2 = null;
let firstresult = null;
let secondresult = null;
let moves =0;
let succes =0;
let timer = false;
let timerStarts =45;
let tempo = 45;
let regressivetimeid = null;
//pointing to html document
let showMoves = document.getElementById(`moves`);
let showSuccess = document.getElementById(`success`);
let showTime = document.getElementById(`timeremaining`);
//aleatory numbers
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers = numbers.sort(()=>{return Math.random()-0.5});
console.log(numbers);
//Functions
function counttimer(){
    regressivetimeid = setInterval(()=>{
        showTime.innerHTML = `Time: ${tempo} seconds`
        tempo--;
        if(tempo < 0){
            clearInterval(regressivetimeid);
            blockcards(numbers);
        }
    },1000, tempo)
}
function blockcards(){
    for (let i = 0; i<=15; i++){
        let blockcard = document.getElementById(i);
        blockcard.innerHTML =numbers[i];
        blockcard.disabled = true;
    }
}

//Function primary
function unlock(id){

    if(timer == false){
        counttimer();
        timer = true;
    }
    if(unlockcards == 0){
        //show first number
        card1 = document.getElementById(id);
        firstresult = numbers[id];
        card1.innerHTML = firstresult;

        //disable first button
        card1.disabled = true;
        unlockcards++;

        firstID = id;
    }else if (unlockcards == 1){
        //show second number
        card2 = document.getElementById(id);
        secondresult = numbers [id];
        card2.innerHTML = secondresult;

        //disable second botton
        card2.disabled = true;
        unlockcards++;

        secondID = id;

        //Increase moves
        moves++;
        showMoves.innerHTML = `Moves: ${moves}`;

        if(firstresult == secondresult){
            //return 0 counter unlockcards
            unlockcards =0;

            //Increase success
            succes++;
            showSuccess.innerHTML= `Success: ${succes}`;

            if(succes == 8){
                clearInterval(regressivetimeid)
                showSuccess.innerHTML = `Success: ${succes} OMG!!`;
                showTime.innerHTML = `Great! Only it only took you ${timerStarts-timer} seconds to resolve!`
                showMoves.innerHTML = `Moves: ${moves} OMG!!`;
            }
        }else{
            //show for a moment the values and return to block
            setTimeout(()=>{
                card1.innerHTML = ' ';
                card2.innerHTML = ' ';
                card1.disabled = false;
                card2.disabled = false;
                unlockcards = 0;
            }, 800)
        }
    }
}