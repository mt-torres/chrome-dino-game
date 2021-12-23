import { isHigher } from "./dino.js";

const containerGame = document.querySelector(".game-container");
let isColliding = false;

function cactus() {
	let random = Math.floor(
		Math.random() * (Math.floor(6000) - Math.ceil(1000)) + Math.ceil(1000)
	);

	const cactusTypes = {
		big: "url(./src/image/cactusBig0000.png) no-repeat ",
		small: "url(./src/image/cactusSmall0000.png) no-repeat",
		smallMany: "url(./src/image/cactusSmallMany0000.png) no-repeat",
	};

	const criaCactus = document.createElement("div");
	criaCactus.classList.add("cactus");
	criaCactus.style.background =
		cactusTypes[
			Object.keys(cactusTypes)[
				Math.floor(Math.random() * Object.keys(cactusTypes).length)
			]
		];
	containerGame.appendChild(criaCactus);
	let position = 1950;
	setInterval(()=>{
		position -=8 ; 
		criaCactus.style.left = position + 'px'
		if(position <=110 && position >=32 ){
			isColliding = true;
			if(isColliding == true && isHigher == false){
				console.log("voce morreu")
			}
			
		}else{
			isColliding = false;
			
		}
	},10  )

	setTimeout(() => {
		criaCactus.remove();
	}, 4400); 

	setTimeout(() => {
		cactus();
	}, random);
}



cactus();