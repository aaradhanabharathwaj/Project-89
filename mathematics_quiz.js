player_1=localStorage.getItem("player_1");
player_2=localStorage.getItem("player_2");
player_1_score=0;
player_2_score=0;
question_turn="player_1";
answer_turn="player_2";
document.getElementById("player_1").innerHTML="<h2 class='myh3'>"+player_1 + ":"+"</h2>";
document.getElementById("player_2").innerHTML="<h2 class='myh3'>"+player_2 + ":"+"</h2>";
document.getElementById("player_1_score").innerHTML="<h4>" + player_1_score +"</h4>";
document.getElementById("player_2_score").innerHTML="<h4>" +player_2_score+"</h4>";
document.getElementById("player_answer").innerHTML="<h3 class='myh4'>"+"Answer Turn :"+ player_1+"</h4>";
document.getElementById("player_question").innerHTML="<h3 class='myh4'>"+"Question Turn :"+ player_2+"</h4>";
function sending(){
number1=document.getElementById("number_1").value;
number2=document.getElementById("number_2").value;
actual_answer=parseInt("number_1") * parseInt("number_2");
player_question="<h4>" + number1 + " x " + number2 + "</h4>";
input_box="<br><br><h4 id='ans'>Answer :</h4> <input type='number' class='form-control' id='input_check_box'>";
check_button = "<br><br><button id='check' onclick='check()'>Check</button>"; 
row = player_question + input_box + check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("number_1").value="";
document.getElementById("number_2").value="";
}
function check(){
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==actual_answer){
        if(answer_turn==player_1){
            update_player_1_score=player_1_score+1;
            document.getElementById("player_1_score").innerHTML=update_player_1_score;
        }
        else{
            update_player_2_score=player_2_score+1;
            document.getElementById("player_2_score").innerHTML=update_player_2_score;
        }
        if(question_turn==player_1){
            question_turn="player_2"
            document.getElementById("player_question").innerHTML="<h4 id=qt>Question Tun - " + player_2+"</h4>";
        }
        else{
            question_turn="player_1"
            document.getElementById("player_question").innerHTML="<h4 id=qt>Question Tun - " + player_1+"</h4>";  
        }
        if(answer_turn=="player_1"){
            answer_turn="player_2";
            document.getElementById("player_answer").innerHTML="<h4 id=qt>Answer Turn -  "+ player_2+"</h4>";        
            }
        else{
            answer_turn="player_1";
            document.getElementById("player_answer").innerHTML="<h4 id=qt>Answer Turn - "+ player_2+"</h4>";    
            document.getElementById("output").innerHTML="";
        }
    }
    }