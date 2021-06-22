var currentPlayer = 1;
var plays = 1;
var end = false;

document.querySelector('#board');

board.b0.addEventListener("click",takeTurn);
board.b1.addEventListener("click",takeTurn);
board.b2.addEventListener("click",takeTurn);
board.b3.addEventListener("click",takeTurn);
board.b4.addEventListener("click",takeTurn);
board.b5.addEventListener("click",takeTurn);
board.b6.addEventListener("click",takeTurn);
board.b7.addEventListener("click",takeTurn);
board.b8.addEventListener("click",takeTurn);

function takeTurn(){
	
	if (this.value == "" && end == false){
		this.value = (currentPlayer % 2 == 0 ? 'O' : 'X');
		this.style.color = (currentPlayer % 2 == 0 ? '#006e30' : '#00056e');
		if (plays >= 5){
			checkWin();
			
		}
	currentPlayer++;
	plays++;
	console.log(plays);
	}//if
	
	
}//end of takeTurn

function checkWin(){
	if (board.b0.value == board.b1.value && board.b1.value == board.b2.value && board.b0.value !=""){
		announceWin(board.b0.value);
	}//if
	else if (board.b3.value == board.b4.value && board.b4.value == board.b5.value && board.b3.value !=""){
		announceWin(board.b3.value);
	}//else/if
	else if (board.b6.value == board.b7.value && board.b7.value == board.b8.value && board.b6.value !=""){
		announceWin(board.b6.value);
	}//else/if
	else if (board.b0.value == board.b3.value && board.b3.value == board.b6.value && board.b0.value !=""){
		announceWin(board.b0.value);
	}//else/if
	else if (board.b1.value == board.b4.value && board.b4.value == board.b7.value && board.b1.value !=""){
		announceWin(board.b1.value);
	}//else/if
	else if (board.b2.value == board.b5.value && board.b5.value == board.b8.value && board.b2.value !=""){
		announceWin(board.b3.value);
	}//else/if
	else if (board.b0.value == board.b4.value && board.b4.value == board.b8.value && board.b0.value !=""){
		announceWin(board.b0.value);
	}//else/if
	else if (board.b2.value == board.b4.value && board.b4.value == board.b6.value && board.b2.value !=""){
		announceWin(board.b2.value);
	}//else/if
	else if (plays == 9){
		announceTie();
	}//else/if
}//end of checkWin

function announceWin(winner){
	document.querySelector('#popup').innerHTML = '<img src = "images/x.png" alt = "x button" id = "x" onclick = "hidePopup()"><h2> ' + winner + ' wins after ' + plays + ' turns!</h2>';
	
	document.querySelector('#container').style.display = "flex";
	end = true;

}//end of announceWin

function announceTie(){
	document.querySelector('#container').style.display = "flex";
	end = true;
	
}//anounceTie
function hidePopup(){
	document.querySelector('#container').style.display = "none";
}