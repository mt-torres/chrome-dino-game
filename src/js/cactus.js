import {
	dino,
	isHigher,
	movimento,
	isJumping
} from "./dino.js";

const containerGame = document.querySelector(".game-container");
const chao = document.querySelector(".background");
const gameOver = document.querySelector('.game-over');
const botao = document.querySelector('.game-over__btn');

let isColliding = false;

function cactus() {

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
		if (!isColliding) {

			criaCactus.remove();
		} else {
			clearTimeout(removeCactus);
		}

	}, 4500);

	let puxaCactus = setTimeout(() => {
		if (!isColliding) {
			cactus();
			
		} else {
			clearTimeout(puxaCactus);
  
		}
	}, random);

	testaColisao();

	function testaColisao() {
		const cactusAll = document.querySelectorAll(".cactus")

		const colisao = setInterval(() => {
			cactusAll.forEach((item) => {
				const posicaoCactus = (parseInt(window.getComputedStyle(item).getPropertyValue('left')));

				if (posicaoCactus <= 110 && posicaoCactus >= 32 && !isHigher) {
					movimento.pause()
					paraCactus(cactusAll);
					chao.classList.remove('animacao');
					dino.classList.add('dino-dead');
					gameOver.classList.add('game-over--show')
					clearTimeout(puxaCactus);
					clearTimeout(removeCactus);
					clearInterval(colisao)
					isColliding = true;

				}

			})

		}, 10)

	}

	function paraCactus(elementos) {
		elementos.forEach((item) => {
			item.style.right = window.getComputedStyle(item).getPropertyValue('right');
			item.classList.remove('cactus-run');
			item.classList.remove('cactus');

		})

	}

}


cactus();
movimento.play()



botao.addEventListener('click', () => {
	const cactusAll = document.querySelectorAll(".cactus1")
	cactusAll.forEach((item) => {
		item.remove()
	})
	gameOver.classList.remove('game-over--show')
	dino.classList.remove('dino-dead')
	chao.classList.add('animacao');
	movimento.play()
	isColliding = false;
	cactus();

})