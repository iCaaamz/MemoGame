//variables initialization
let unlockcards =0;
let card1 = null;
let card2 = null;
let firstresult = null;
let secondresult = null;
let moves =0;
let succes =0;

//pointing to html document
let showMoves = document.getElementById(`moves`);
let showSuccess = document.getElementById(`success`)
//aleatory numbers
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers = numbers.sort(()=>{return Math.random()-0.5});
console.log(numbers);

//Function primary
function unlock(id){
    unlockcards++;
    console.log(unlockcards);

    if(unlockcards == 1){
        //show first number
        card1 = document.getElementById(id);
        firstresult = numbers[id];
        card1.innerHTML = firstresult;

        //disable first button
        card1.disabled = true;
    }else if (unlockcards == 2){
        //sow second number
        card2 = document.getElementById(id);
        secondresult = numbers [id];
        card2.innerHTML = secondresult;

        //disable second botton
        card2.disabled = true;

        //Increase moves
        moves++;
        showMoves.innerHTML = `Movimientos: ${moves}`;

        if(firstresult == secondresult){
            //return 0 counter unlockcards
            unlockcards =0;

            //Increase success
            succes++;
            showSuccess.innerHTML= `Success: ${succes}`;

        }
    }

}