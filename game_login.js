function add_username(){
player1_name = document.getElementById("Player1_name_input").value;
player2_name = document.getElementById("Player2_name_input").value;
localStorage.setItem("Player1_name", player1_name);
localStorage.setItem("Player2_name", player2_name);
window.location = "game_page.html";
}