//Targeting the elements
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const fourth = document.querySelector('#fourth');
const fifth = document.querySelector('#fifth');
const sixth = document.querySelector('#sixth');
const seventh = document.querySelector('#seventh');
const eight = document.querySelector('#eight');
const ninth = document.querySelector('#ninth');
const items = document.querySelector('.items');
const reset = document.querySelector('.reset');

//Cross Win conditions
cross = () => {
    if (first.innerHTML == 'X' && second.innerHTML == 'X' && third.innerHTML == 'X') {
        return 1;
    } else if (sixth.innerHTML == 'X' && fourth.innerHTML == 'X' && fifth.innerHTML == 'X') {
        return 1;
    } else if (seventh.innerHTML == 'X' && eight.innerHTML == 'X' && ninth.innerHTML == 'X') {
        return 1;
    } else if (first.innerHTML == 'X' && fifth.innerHTML == 'X' && ninth.innerHTML == 'X') {
        return 1;
    } else if (third.innerHTML == 'X' && fifth.innerHTML == 'X' && seventh.innerHTML == 'X') {
        return 1;
    } else if (first.innerHTML == 'X' && fourth.innerHTML == 'X' && seventh.innerHTML == 'X') {
        return 1;
    } else if (second.innerHTML == 'X' && fifth.innerHTML == 'X' && eight.innerHTML == 'X') {
        return 1;
    } else if (third.innerHTML == 'X' && sixth.innerHTML == 'X' && ninth.innerHTML == 'X') {
        return 1;
    }
}

// Zero Win conditions
zero = () => {
    if (first.innerHTML == 'O' && second.innerHTML == 'O' && third.innerHTML == 'O') {
        return 1;
    } else if (sixth.innerHTML == 'O' && fourth.innerHTML == 'O' && fifth.innerHTML == 'O') {
        return 1;
    } else if (seventh.innerHTML == 'O' && eight.innerHTML == 'O' && ninth.innerHTML == 'O') {
        return 1;
    } else if (first.innerHTML == 'O' && fifth.innerHTML == 'O' && ninth.innerHTML == 'O') {
        return 1;
    } else if (third.innerHTML == 'O' && fifth.innerHTML == 'O' && seventh.innerHTML == 'O') {
        return 1;
    } else if (first.innerHTML == 'O' && fourth.innerHTML == 'O' && seventh.innerHTML == 'O') {
        return 1;
    } else if (second.innerHTML == 'O' && fifth.innerHTML == 'O' && eight.innerHTML == 'O') {
        return 1;
    } else if (third.innerHTML == 'O' && sixth.innerHTML == 'O' && ninth.innerHTML == 'O') {
        return 1;
    }
}

//For reseting game
reset.addEventListener('click',()=>{
    first.innerHTML = "";
    second.innerHTML = "";
    third.innerHTML = "";
    fourth.innerHTML = "";
    fifth.innerHTML = "";
    sixth.innerHTML = "";
    seventh.innerHTML = "";
    eight.innerHTML = "";
    ninth.innerHTML = "";

    first.style.backgroundColor = "white";
    second.style.backgroundColor = "white";
    third.style.backgroundColor = "white";
    fourth.style.backgroundColor = "white";
    fifth.style.backgroundColor = "white";
    sixth.style.backgroundColor = "white";
    seventh.style.backgroundColor = "white";
    eight.style.backgroundColor = "white";
    ninth.style.backgroundColor = "white";
    wait_cnt = 0;
    cnt = 0;
})


//If Player1 or Player2 Won
player1 = () =>{
    alert("Player1 Won");
}

player2 = () => {
    alert("Player2 Won");
}


//Event listeners for all buttons
var cnt = 0;
var wait_cnt = 0;

first.addEventListener('click', function () {
    if(wait_cnt==0){
        if (cnt & 1) {
            first.innerHTML = "O";
            first.style.fontSize = "32px";
            first.style.backgroundColor = "green";
        } else {
            first.innerHTML = "X";
            first.style.fontSize = "32px";
            first.style.backgroundColor = "yellow";
        }
        cnt++;
        if (cross() == 1) {
            first.innerHTML = "X";
            first.style.fontSize = "32px";
            first.style.backgroundColor = "yellow";
            player1();
            wait_cnt++;
        }else if (zero() == 1) {
            first.innerHTML = "O";
            first.style.fontSize = "32px";
            first.style.backgroundColor = "green";
            player2();
            wait_cnt++;
        }
    }else{
        alert("Game Has Ended. Press reset to play once more")
        //w
    }
})

second.addEventListener('click', function () {

    if(wait_cnt==0){
        if (cnt & 1) {
            second.innerHTML = "O";
            second.style.fontSize = "32px";
            second.style.backgroundColor = "green";
        } else {
            second.innerHTML = "X";
            second.style.fontSize = "32px";
            second.style.backgroundColor = "yellow";
        }
        cnt++;
        if (cross() == 1) {
            second.innerHTML = "X";
            second.style.fontSize = "32px";
            second.style.backgroundColor = "yellow";
            player1();
            wait_cnt++;
        }else if (zero() == 1) {
            second.innerHTML = "O";
            second.style.fontSize = "32px";
            second.style.backgroundColor = "green";
            player2();
            wait_cnt++;
        }
    }else{
        alert("Game Has Ended. Press reset to play once more")
        //w
    }
})

third.addEventListener('click', function () {
    if(wait_cnt==0){
        if (cnt & 1) {
            third.innerHTML = "O";
            third.style.fontSize = "32px";
            third.style.backgroundColor = "green";
        } else {
            third.innerHTML = "X";
            third.style.fontSize = "32px";
            third.style.backgroundColor = "yellow";
        }
        cnt++;
        if (cross() == 1) {
            third.innerHTML = "X";
            third.style.fontSize = "32px";
            third.style.backgroundColor = "yellow";
            player1();
            wait_cnt++;
        }else if (zero() == 1) {
            third.innerHTML = "O";
            third.style.fontSize = "32px";
            third.style.backgroundColor = "green";
            player2();
            wait_cnt++;
        }
    }else{
        alert("Game Has Ended. Press reset to play once more")
        //w
    }
})

fourth.addEventListener('click', function () {
    if(wait_cnt==0){
        if (cnt & 1) {
            fourth.innerHTML = "O";
            fourth.style.fontSize = "32px";
            fourth.style.backgroundColor = "green";
        } else {
            fourth.innerHTML = "X";
            fourth.style.fontSize = "32px";
            fourth.style.backgroundColor = "yellow";
        }
        cnt++;
        if (cross() == 1) {
            fourth.innerHTML = "X";
            fourth.style.fontSize = "32px";
            fourth.style.backgroundColor = "yellow";
            player1();
            wait_cnt++;
        }else if (zero() == 1) {
            fourth.innerHTML = "O";
            fourth.style.fontSize = "32px";
            fourth.style.backgroundColor = "green";
            player2();
            wait_cnt++;
        }
    }else{
        alert("Game Has Ended. Press reset to play once more");
        //w
    }
})

fifth.addEventListener('click', function () {
    if(wait_cnt==0){
        if (cnt & 1) {
            fifth.innerHTML = "O";
            fifth.style.fontSize = "32px";
            fifth.style.backgroundColor = "green";
        } else {
            fifth.innerHTML = "X";
            fifth.style.fontSize = "32px";
            fifth.style.backgroundColor = "yellow";
        }
        cnt++;
        if (cross() == 1) {
            fifth.innerHTML = "X";
            fifth.style.fontSize = "32px";
            fifth.style.backgroundColor = "yellow";
            player1();
            wait_cnt++;
        }else if (zero() == 1) {
            fifth.innerHTML = "O";
            fifth.style.fontSize = "32px";
            fifth.style.backgroundColor = "green";
            player2();
            wait_cnt++;
        }
    }else{
        alert("Game Has Ended. Press reset to play once more")
        //w
    }
})

sixth.addEventListener('click', function () {
    if(wait_cnt==0){
        if (cnt & 1) {
            sixth.innerHTML = "O";
            sixth.style.fontSize = "32px";
            sixth.style.backgroundColor = "green";
        } else {
            sixth.innerHTML = "X";
            sixth.style.fontSize = "32px";
            sixth.style.backgroundColor = "yellow";
        }
        cnt++;
        if (cross() == 1) {
            sixth.innerHTML = "X";
            sixth.style.fontSize = "32px";
            sixth.style.backgroundColor = "yellow";
            player1();
            wait_cnt++;
        }else if (zero() == 1) {
            sixth.innerHTML = "O";
            sixth.style.fontSize = "32px";
            sixth.style.backgroundColor = "green";
            player2();
            wait_cnt++;
        }
    }else{
        alert("Game Has Ended. Press reset to play once more")
        //w
    }
})

seventh.addEventListener('click', function () {
    if(wait_cnt==0){
        if (cnt & 1) {
            seventh.innerHTML = "O";
            seventh.style.fontSize = "32px";
            seventh.style.backgroundColor = "green";
        } else {
            seventh.innerHTML = "X";
            seventh.style.fontSize = "32px";
            seventh.style.backgroundColor = "yellow";
        }
        cnt++;
        if (cross() == 1) {
            seventh.innerHTML = "X";
            seventh.style.fontSize = "32px";
            seventh.style.backgroundColor = "yellow";
            player1();
            wait_cnt++;
        }else if (zero() == 1) {
            seventh.innerHTML = "O";
            seventh.style.fontSize = "32px";
            seventh.style.backgroundColor = "green";
            player2();
            wait_cnt++;
        }
    }else{
        alert("Game Has Ended. Press reset to play once more")
        //w
    }
})


eight.addEventListener('click', function () {
    if(wait_cnt==0){
        if (cnt & 1) {
            eight.innerHTML = "O";
            eight.style.fontSize = "32px";
            eight.style.backgroundColor = "green";
        } else {
            eight.innerHTML = "X";
            eight.style.fontSize = "32px";
            eight.style.backgroundColor = "yellow";
        }
        cnt++;
        if (cross() == 1) {
            eight.innerHTML = "X";
            eight.style.fontSize = "32px";
            eight.style.backgroundColor = "yellow";
            player1();
            wait_cnt++;
        }else if (zero() == 1) {
            eight.innerHTML = "O";
            eight.style.fontSize = "32px";
            eight.style.backgroundColor = "green";
            player2();
            wait_cnt++;
        }
    }else{
        alert("Game Has Ended. Press reset to play once more")
        //w
    }
})

ninth.addEventListener('click', function () {
    if(wait_cnt==0){
        if (cnt & 1) {
            ninth.innerHTML = "O";
            ninth.style.fontSize = "32px";
            ninth.style.backgroundColor = "green";
        } else {
            ninth.innerHTML = "X";
            ninth.style.fontSize = "32px";
            ninth.style.backgroundColor = "yellow";
        }
        cnt++;
        if (cross() == 1) {
            ninth.innerHTML = "X";
            ninth.style.fontSize = "32px";
            ninth.style.backgroundColor = "yellow";
            player1();
            wait_cnt++;
        }else if (zero() == 1) {
            ninth.innerHTML = "O";
            ninth.style.fontSize = "32px";
            ninth.style.backgroundColor = "green";
            player2();
            wait_cnt++;
        }
    }else{
        alert("Game Has Ended. Press reset to play once more");
        //w
    }
})



