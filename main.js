let player1 = null
let player2 = null
let play = 0
let tie = 0




function start() {
    player1 = document.querySelector("#selectsign").value



    if (player1 == "none") {
        alert("Re-select")
    } else {
        alert("Player 1 is " + player1)
        if (player1 == "X") {
            player2 = "0"
            alert("Player 2 is " + player2)
            document.getElementById("turn").innerHTML = "Player 1 is : " + player1 + "<br> Player 2 is : " + player2
            play = 1
            document.getElementById("chance").innerHTML = player1+ " Chance"
             document.getElementById("chance").style.color = "red"
           



        } else {
            player2 = "X"
            alert("Player 2 is " + player2)
            document.getElementById("turn").innerHTML = "Player 1 is : " + player1 + "<br> Player 2 is : " + player2
            play = 1
            document.getElementById("chance").innerHTML = player1+ " Chance"
            document.getElementById("chance").style.color = "red"
            



        }



    }

}
let flag = 1

function play1() { //Button 1 Condition for X or 0
   if(play ==0)
   {
    alert("Select the symbol first")
   }
   else{
   
    if (flag == 1) {

        document.getElementById("bt1").innerHTML = player1
        document.getElementById("bt1").style.backgroundColor = "red"
        document.getElementById("bt1").style.color = "white"
        document.getElementById("bt1").disabled = true
        document.getElementById("box1").style.backgroundColor = "red"
        document.getElementById("chance").innerHTML = player2+ " Chance"
        document.getElementById("chance").style.color = "orange"
        
        flag = 0;
        tie = tie+1



    } else {
        document.getElementById("bt1").innerHTML = player2
        document.getElementById("bt1").style.backgroundColor = "orange"
        document.getElementById("bt1").style.color = "white"
        document.getElementById("bt1").disabled = true
        document.getElementById("box1").style.backgroundColor = "orange"
        document.getElementById("chance").innerHTML = player1+ " Chance"
        document.getElementById("chance").style.color = "red"
        flag = 1;
        tie = tie+1
    }
}

}

function play2() { //Button 2 Condition for X or 0

    if(play ==0)
   {
    alert("Select the symbol first")
   }
   else{
    if (flag == 1) {

        document.getElementById("bt2").innerHTML = player1
        document.getElementById("bt2").style.backgroundColor = "red"
        document.getElementById("bt2").style.color = "white"
        document.getElementById("bt2").disabled = true
        document.getElementById("box2").style.backgroundColor = "red"
        document.getElementById("chance").innerHTML = player2+ " Chance"
        document.getElementById("chance").style.color = "orange"
        flag = 0;
        tie = tie+1



    } else {
        
        document.getElementById("bt2").innerHTML = player2
        document.getElementById("bt2").style.backgroundColor = "orange"
        document.getElementById("bt2").style.color = "white"
        document.getElementById("bt2").disabled = true
        document.getElementById("box2").style.backgroundColor = "orange"
        document.getElementById("chance").innerHTML = player1+ " Chance"
        document.getElementById("chance").style.color = "red"
        flag = 1;
        tie = tie+1

    }
}

}


function play3() { //Button 3 Condition for X or 0

    if(play ==0)
   {
    alert("Select the symbol first")
   }
   else{
    if (flag == 1) {

        document.getElementById("bt3").innerHTML = player1
        document.getElementById("bt3").style.backgroundColor = "red"
        document.getElementById("bt3").style.color = "white"
        document.getElementById("bt3").disabled = true
        document.getElementById("box3").style.backgroundColor = "red"
        document.getElementById("chance").innerHTML = player2+ " Chance"
        document.getElementById("chance").style.color = "orange"
        flag = 0;
        tie = tie+1



    } else {
        
        document.getElementById("bt3").innerHTML = player2
        document.getElementById("bt3").style.backgroundColor = "orange"
        document.getElementById("bt3").style.color = "white"
        document.getElementById("bt3").disabled = true
        document.getElementById("box3").style.backgroundColor = "orange"
        document.getElementById("chance").innerHTML = player1+ " Chance"
        document.getElementById("chance").style.color = "red"
        flag = 1;
        tie = tie+1

    }
}

}



function play4() { //Button 4 Condition for X or 0

    if(play ==0)
   {
    alert("Select the symbol first")
   }
   else{
    if (flag == 1) {

        document.getElementById("bt4").innerHTML = player1
        document.getElementById("bt4").style.backgroundColor = "red"
        document.getElementById("bt4").style.color = "white"
        document.getElementById("bt4").disabled = true
        document.getElementById("box4").style.backgroundColor = "red"
        document.getElementById("chance").innerHTML = player2+ " Chance"
        document.getElementById("chance").style.color = "orange"
        flag = 0;
        tie = tie+1



    } else {
        
        document.getElementById("bt4").innerHTML = player2
        document.getElementById("bt4").style.backgroundColor = "orange"
        document.getElementById("bt4").style.color = "white"
        document.getElementById("bt4").disabled = true
        document.getElementById("box4").style.backgroundColor = "orange"
        document.getElementById("chance").innerHTML = player1+ " Chance"
        document.getElementById("chance").style.color = "red"
        flag = 1;
        tie = tie+1

    }
}

}

function play5() {//Button  Condition for X or 0

    if(play == 0)
   {
    alert("Select the symbol first")
   }
   else{
    if (flag == 1) {

        document.getElementById("bt5").innerHTML = player1
        document.getElementById("bt5").style.backgroundColor = "red"
        document.getElementById("bt5").style.color = "white"
        document.getElementById("bt5").disabled = true
        document.getElementById("box5").style.backgroundColor = "red"
        document.getElementById("chance").innerHTML = player2+ " Chance"
        document.getElementById("chance").style.color = "orange"
        flag = 0;
        tie = tie+1



    } else {
        
        document.getElementById("bt5").innerHTML = player2
        document.getElementById("bt5").style.backgroundColor = "orange"
        document.getElementById("bt5").style.color = "white"
        document.getElementById("bt5").disabled = true
        document.getElementById("box5").style.backgroundColor = "orange"
        document.getElementById("chance").innerHTML = player1+ " Chance"
        document.getElementById("chance").style.color = "red"
        flag = 1;
        tie = tie+1

    }
}

}


function play6() {

    if(play ==0)
   {
    alert("Select the symbol first")
   }
   else{
    if (flag == 1) {

        document.getElementById("bt6").innerHTML = player1
        document.getElementById("bt6").style.backgroundColor = "red"
        document.getElementById("bt6").style.color = "white"
        document.getElementById("bt6").disabled = true
        document.getElementById("box6").style.backgroundColor = "red"
        document.getElementById("chance").innerHTML = player2+ " Chance"
        document.getElementById("chance").style.color = "orange"
        flag = 0;
        tie = tie+1



    } else {
        
        document.getElementById("bt6").innerHTML = player2
        document.getElementById("bt6").style.backgroundColor = "orange"
        document.getElementById("bt6").style.color = "white"
        document.getElementById("bt6").disabled = true
        document.getElementById("box6").style.backgroundColor = "orange"
        document.getElementById("chance").innerHTML = player1+ " Chance"
        document.getElementById("chance").style.color = "red"
        flag = 1;

    }
}

}

function play7() {

    if(play ==0)
   {
    alert("Select the symbol first")
   }
   else{
    if (flag == 1) {

        document.getElementById("bt7").innerHTML = player1
        document.getElementById("bt7").style.backgroundColor = "red"
        document.getElementById("bt7").style.color = "white"
        document.getElementById("bt7").disabled = true
        document.getElementById("box7").style.backgroundColor = "red"
        document.getElementById("chance").innerHTML = player2+ " Chance"
        document.getElementById("chance").style.color = "orange"
        flag = 0;
        tie = tie+1



    } else {
        
        document.getElementById("bt7").innerHTML = player2
        document.getElementById("bt7").style.backgroundColor = "orange"
        document.getElementById("bt7").style.color = "white"
        document.getElementById("bt7").disabled = true
        document.getElementById("box7").style.backgroundColor = "orange"
        document.getElementById("chance").innerHTML = player1+ " Chance"
        document.getElementById("chance").style.color = "red"
        flag = 1;
        tie = tie+1

    }
}

}

function play8() {

    if(play ==0)
   {
    alert("Select the symbol first")
   }
   else{
    if (flag == 1) {

        document.getElementById("bt8").innerHTML = player1
        document.getElementById("bt8").style.backgroundColor = "red"
        document.getElementById("bt8").style.color = "white"
        document.getElementById("bt8").disabled = true
        document.getElementById("box8").style.backgroundColor = "red"
        document.getElementById("chance").innerHTML = player2+ " Chance"
        document.getElementById("chance").style.color = "orange"
        flag = 0;
        tie = tie+1



    } else {
        
        document.getElementById("bt8").innerHTML = player2
        document.getElementById("bt8").style.backgroundColor = "orange"
        document.getElementById("bt8").style.color = "white"
        document.getElementById("bt8").disabled = true
        document.getElementById("box8").style.backgroundColor = "orange"
        document.getElementById("chance").innerHTML = player1+ " Chance"
        document.getElementById("chance").style.color = "red"
        flag = 1;
        tie = tie+1

    }
}

}

function play9() {

    if(play ==0)
   {
    alert("Select the symbol first")
   }
   else{
    if (flag == 1) {

        document.getElementById("bt9").innerHTML = player1
        document.getElementById("bt9").style.backgroundColor = "red"
        document.getElementById("bt9").style.color = "white"
        document.getElementById("bt9").disabled = true
        document.getElementById("box9").style.backgroundColor = "red"
        document.getElementById("chance").innerHTML = player2+ " Chance"
        document.getElementById("chance").style.color = "orange"
        flag = 0;
        tie = tie+1



    } else {
        
        document.getElementById("bt9").innerHTML = player2
        document.getElementById("bt9").style.backgroundColor = "orange"
        document.getElementById("bt9").style.color = "white"
        document.getElementById("bt9").disabled = true
        document.getElementById("box9").style.backgroundColor = "orange"
        document.getElementById("chance").innerHTML = player1+ " Chance"
        document.getElementById("chance").style.color = "red"
        flag = 1;
        tie = tie+1

    }
}

}


function check()
{   
let btn1 = document.getElementById("bt1")
let btn2 = document.getElementById("bt2")
let btn3 = document.getElementById("bt3")
let btn4 = document.getElementById("bt4")
let btn5 = document.getElementById("bt5")
let btn6 = document.getElementById("bt6")
let btn7 = document.getElementById("bt7")
let btn8 = document.getElementById("bt8")
let btn9 = document.getElementById("bt9")
let win  = document.getElementById("winner")


// if((btn1.disabled == true) && (btn2.disabled == true )&& (btn3.disabled == true) && (btn4.disabled == true) && (btn5.disabled == true)&& (btn6.disabled == true) && (btn7.disabled == true) && (btn8.disabled == true) && (btn9.disabled == true)  )
// {

                // Checking for player 1 winning
    if((btn1.innerHTML == player1)&& (btn2.innerHTML == player1)&& (btn3.innerHTML == player1))
    {
        win.innerHTML = player1+ " is winner"
        win.style.color = "red"
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn5.disabled = true
        btn6.disabled = true
        btn7.disabled = true
        btn8.disabled = true
        btn9.disabled = true
    }
    else if((btn1.innerHTML == player1)&& (btn5.innerHTML == player1)&& (btn9.innerHTML == player1))
    {
        win.innerHTML = player1+ " is winner"
        win.style.color = "red"
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn5.disabled = true
        btn6.disabled = true
        btn7.disabled = true
        btn8.disabled = true
        btn9.disabled = true
    }
    else if((btn3.innerHTML == player1)&& (btn5.innerHTML == player1)&& (btn7.innerHTML == player1))
    {
        win.innerHTML = player1+ " is winner"
        win.style.color = "red"
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn5.disabled = true
        btn6.disabled = true
        btn7.disabled = true
        btn8.disabled = true
        btn9.disabled = true
    }
    else if((btn1.innerHTML == player1)&& (btn4.innerHTML == player1)&& (btn7.innerHTML == player1))
    {
        win.innerHTML = player1+ " is winner"
        win.style.color = "red"
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn5.disabled = true
        btn6.disabled = true
        btn7.disabled = true
        btn8.disabled = true
        btn9.disabled = true
    }
    else if((btn3.innerHTML == player1)&& (btn6.innerHTML == player1)&& (btn9.innerHTML == player1))
    {
        win.innerHTML = player1+ " is winner"
        win.style.color = "red"
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn5.disabled = true
        btn6.disabled = true
        btn7.disabled = true
        btn8.disabled = true
        btn9.disabled = true
    }
    else if((btn2.innerHTML == player1)&& (btn5.innerHTML == player1)&& (btn8.innerHTML == player1))
    {
        win.innerHTML = player1+ " is winner"
        win.style.color = "red"
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn5.disabled = true
        btn6.disabled = true
        btn7.disabled = true
        btn8.disabled = true
        btn9.disabled = true
    }
    else if((btn4.innerHTML == player1)&& (btn5.innerHTML == player1)&& (btn6.innerHTML == player1))
    {
        win.innerHTML = player1+ " is winner"
        win.style.color = "red"
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn5.disabled = true
        btn6.disabled = true
        btn7.disabled = true
        btn8.disabled = true
        btn9.disabled = true
    }
    else if((btn7.innerHTML == player1)&& (btn8.innerHTML == player1)&& (btn9.innerHTML == player1))
    {
        win.innerHTML = player1+ " is winner"
        win.style.color = "red"
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn5.disabled = true
        btn6.disabled = true
        btn7.disabled = true
        btn8.disabled = true
        btn9.disabled = true
    }






                    // Checking for player 2 winning
                    if((btn1.innerHTML == player2)&& (btn2.innerHTML == player2)&& (btn3.innerHTML == player2))
                    {
                        win.innerHTML = player2+ " is winner"
                        win.style.color = "orange"
                        btn1.disabled = true
                        btn2.disabled = true
                        btn3.disabled = true
                        btn4.disabled = true
                        btn5.disabled = true
                        btn6.disabled = true
                        btn7.disabled = true
                        btn8.disabled = true
                        btn9.disabled = true
                    }
                    else if((btn1.innerHTML == player2)&& (btn5.innerHTML == player2)&& (btn9.innerHTML == player2))
                    {
                        win.innerHTML = player2+ " is winner"
                        win.style.color = "orange"
                        btn1.disabled = true
                        btn2.disabled = true
                        btn3.disabled = true
                        btn4.disabled = true
                        btn5.disabled = true
                        btn6.disabled = true
                        btn7.disabled = true
                        btn8.disabled = true
                        btn9.disabled = true
                    }
                    else if((btn3.innerHTML == player2)&& (btn5.innerHTML == player2)&& (btn7.innerHTML == player2))
                    {
                        win.innerHTML = player2+ " is winner"
                        win.style.color = "orange"
                        btn1.disabled = true
                        btn2.disabled = true
                        btn3.disabled = true
                        btn4.disabled = true
                        btn5.disabled = true
                        btn6.disabled = true
                        btn7.disabled = true
                        btn8.disabled = true
                        btn9.disabled = true
                    }
                    else if((btn1.innerHTML == player2)&& (btn4.innerHTML == player2)&& (btn7.innerHTML == player2))
                    {
                        win.innerHTML = player2+ " is winner"
                        win.style.color = "orange"
                        btn1.disabled = true
                        btn2.disabled = true
                        btn3.disabled = true
                        btn4.disabled = true
                        btn5.disabled = true
                        btn6.disabled = true
                        btn7.disabled = true
                        btn8.disabled = true
                        btn9.disabled = true
                    }
                    else if((btn3.innerHTML == player2)&& (btn6.innerHTML == player2)&& (btn9.innerHTML == player2))
                    {
                        win.innerHTML = player2+ " is winner"
                        win.style.color = "orange"
                        btn1.disabled = true
                        btn2.disabled = true
                        btn3.disabled = true
                        btn4.disabled = true
                        btn5.disabled = true
                        btn6.disabled = true
                        btn7.disabled = true
                        btn8.disabled = true
                        btn9.disabled = true
                    }
                    else if((btn2.innerHTML == player2)&& (btn5.innerHTML == player2)&& (btn8.innerHTML == player2))
                    {
                        win.innerHTML = player2+ " is winner"
                        win.style.color = "orange"
                        btn1.disabled = true
                        btn2.disabled = true
                        btn3.disabled = true
                        btn4.disabled = true
                        btn5.disabled = true
                        btn6.disabled = true
                        btn7.disabled = true
                        btn8.disabled = true
                        btn9.disabled = true
                    }
                    else if((btn4.innerHTML == player2)&& (btn5.innerHTML == player2)&& (btn6.innerHTML == player2))
                    {
                        win.innerHTML = player2+ " is winner"
                        win.style.color = "orange"
                        btn1.disabled = true
                        btn2.disabled = true
                        btn3.disabled = true
                        btn4.disabled = true
                        btn5.disabled = true
                        btn6.disabled = true
                        btn7.disabled = true
                        btn8.disabled = true
                        btn9.disabled = true
                    }
                    else if((btn7.innerHTML == player2)&& (btn8.innerHTML == player2)&& (btn9.innerHTML == player2))
                    {
                        win.innerHTML = player2+ " is winner"
                        win.style.color = "orange"
                        btn1.disabled = true
                        btn2.disabled = true
                        btn3.disabled = true
                        btn4.disabled = true
                        btn5.disabled = true
                        btn6.disabled = true
                        btn7.disabled = true
                        btn8.disabled = true
                        btn9.disabled = true
                    }

                    else if(tie == 9)
                    {
                        win.innerHTML = "The game is tie"
                    }
                    
                
}

function clearall()
{
    if(confirm("Are you sure?"))
    {
        location.reload()
    }
    else{
        alert("Game is on!")
    }
}

    
// }