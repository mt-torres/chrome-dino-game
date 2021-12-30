import { isHigher, movimento } from "./dino.js";

const containerGame = document.querySelector(".game-container");
const chao = document.querySelector(".background");

let isColliding = false;

function cactus() {

	console.log('inicio da função '+isColliding)

	let random = Math.floor(
		Math.random() * (Math.floor(5000) - Math.ceil(1000)) + Math.ceil(1000)
	);

	const cactusTypes = {
		big: "url(./src/image/cactusBig0000.png) no-repeat ",
		small: "url(./src/image/cactusSmall0000.png) no-repeat",
		smallMany: "url(./src/image/cactusSmallMany0000.png) no-repeat",
	};

	const criaCactus = document.createElement("div");
	criaCactus.classList.add("cactus");
	criaCactus.classList.add("cactus1");
	criaCactus.classList.add("cactus-run");
	criaCactus.style.background =
		cactusTypes[
			Object.keys(cactusTypes)[
				Math.floor(Math.random() * Object.keys(cactusTypes).length)
			]
		];
	containerGame.appendChild(criaCactus);

	
	
	let removeCactus = setTimeout(() => {
		if(!isColliding){ 
			
		criaCactus.remove();
		}else{
			clearTimeout(puxaCactus)
		}
		
	},4500);
	
	let puxaCactus = setTimeout(() => {
		if(!isColliding){
			
			cactus();
			console.log("fui  acionado");
		}else{
			clearTimeout(puxaCactus)
			
		}
	}, random);
	
	testaColisao()

	function testaColisao(){

		const colisao = setInterval(() => {
			const cactusAll = document.querySelectorAll(".cactus")
			cactusAll.forEach((item) => {
				const posicaoCactus = (parseInt(window.getComputedStyle(item).getPropertyValue('left')))

				if (posicaoCactus <= 110 && posicaoCactus >= 32 && !isHigher) {
					
					console.log('vc morreu')
					paraCactus(cactusAll)
					chao.classList.remove('animacao')
					clearInterval(movimento)
					isColliding = true;
					console.log("iscolliding " +isColliding)
					return isColliding
	
				}

			})
	
			
		}, 10)
		console.log("iscolliding " +isColliding)
		return isColliding
	}
	
	function paraCactus(elementos){	
		elementos.forEach((item)=>{
			item.style.right = window.getComputedStyle(item).getPropertyValue('right') 
			item.classList.remove('cactus-run')
			item.classList.remove('cactus')
		
		})
		
	}
		
}

cactus();