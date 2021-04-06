var img = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "15.jpg", "16.jpg", "19.jpg", "20.jpg", "21.jpg", "25.jpg"];
var tile = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
var gametrue = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
var selectImg = 0;
var selectTile = 0;
var pic1 = "";
var pic2 = "";
var click = 0;
var picPath1 = "";
var picPath2 = "";
var life = 7;
var score = 0;
var gameover = false;
var pair = 0;



function playGame(tileId) {
	if (gameover == false) {
		click++;

		if (click == 3) {
			if (pic1 != pic2) {
				document.getElementById(picPath1).style.opacity = "0";
				document.getElementById(picPath2).style.opacity = "0";
			}
			click = 1;
		}

		if (click == 1) {
			pic1 = gametrue[tileId - 1];
			picPath1 = "pic" + tileId;
			document.getElementById(picPath1).style.opacity = "1";
		}

		if (click == 2) {
			pic2 = gametrue[tileId - 1];
			picPath2 = "pic" + tileId;
			document.getElementById(picPath2).style.opacity = "1";

			if (pic1 != pic2) {
				life--;
				document.getElementById("life").innerHTML = "Life: " + life;
			} else {
				score = score + 500;
				document.getElementById("score").innerHTML = "Score: " + score;
				pair = pair + 2;
			}
		}

		if ((life == 0) || (pair == 16)) {
			if (life == 0){
				document.getElementById("gameover").innerHTML = "GAME OVER";
				document.getElementById("gameover").style.color = "crimson";
			}
			if (pair == 16){
				document.getElementById("gameover").innerHTML = "CONGRATULATIONS";
				document.getElementById("gameover").style.color = "deepskyblue";
				score = score + life * 1000;
				document.getElementById("score").innerHTML = "Score: " + score;
			}
			gameover = true;
			document.getElementById("mybtn").textContent = "PLAY AGAIN";
			document.getElementById("mybtn").style.visibility = "visible";
		}
	}
}


function randImg() {
	let i = 0;
	let j = 0;

	for (i = 0; i < 8; i++) {
		selectImg = Math.floor(Math.random() * img.length);

		for (j = 0; j < 2; j++) {
			selectTile = Math.floor(Math.random() * tile.length);
			shareImg(img[selectImg], tile[selectTile]);
			gametrue.splice(parseInt(tile[selectTile]) - 1, 1, img[selectImg]);
			tile.splice(selectTile, 1);
		}
		img.splice(selectImg, 1);
	}
}

function startGame() {
	if (document.getElementById("mybtn").textContent == "PLAY AGAIN"){
		location.reload();
	}
	
	document.getElementById("life").style.visibility = "visible";
	document.getElementById("score").style.visibility = "visible";

	document.getElementById("mybtn").style.visibility = "hidden";
	randImg();
}

function shareImg(img, tile) {
	var loadimg = document.createElement('img');
	loadimg.id = "pic" + tile;
	loadimg.src = img;
	document.getElementById(tile).appendChild(loadimg);

}
