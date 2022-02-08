player1_name = localStorage.getItem("Player1_name");
player2_name = localStorage.getItem("Player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":" ;
document.getElementById("player2_name").innerHTML = player2_name + ":" ;

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
document.getElementById("player_ans").innerHTML = "Answer turn - " + player2_name;

function send(){
get_word = document.getElementById("word").value;
word = get_word.toLowerCase();
console.log(word);

c1 = word.charAt(1);
console.log(c1);

divide_2 = Math.floor(word.length/2);
c2 = word.charAt(divide_2);
console.log(c2);

minus_1 = word.length-1;
c3 = word.charAt(minus_1);
console.log(c3);

remove_c1 = word.replace(c1,"_");
remove_c2 = remove_c1.replace(c2,"_");
remove_c3 = remove_c2.replace(c3,"_");
console.log(remove_c3);

question = "<h4 id='word_display'> Q. " + remove_c3 + "</h4>";
ans = "<br> Answer: <input type= 'text' id='input_checkbox'>";
check_button = "<br> <br> <button class='btn btn-success' onclick='check()'>Check </button>";
row = question + ans + check_button;

document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}
question_turn = "player1";
ans_turn = "player2";

function check() {
get_answer = document.getElementById("input_checkbox").value;
answer = get_answer.toLowerCase();
console.log("answer in lower case = "+ answer);

if (answer == word) {
if (ans_turn == "player1"){
player1_score = player1_score+1 ;
document.getElementById("player1_score").innerHTML = player1_score;
}
else{
player2_score = player2_score+1 ;
document.getElementById("player2_score").innerHTML = player2_score;
}
}

if (question_turn == "player1"){
question_turn = "player2";
document.getElementById("player_question").innerHTML = "Question turn = "+ player2_name ;
}
else{
question_turn = "player1";
document.getElementById("player_question").innerHTML = "Question turn = "+ player1_name;
}

if (ans_turn == "player2"){
ans_turn = "player1";
document.getElementById("player_ans").innerHTML = "Answer turn = "+ player1_name;
}
else{
    ans_turn = "player2";
    document.getElementById("player_ans").innerHTML = "Answer turn = "+ player2_name;
}
}