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
	//criaCactus.style.animation = 'slidecactus 7.6s linear';
	const animationKeyFrame = new KeyframeEffect(
		criaCactus,
		[{
				right: '-125px'
			},
			{
				right: '2000px'
			}
		], {
			duration: 4500,
			easing: 'linear'
		}
	)

	const animation = new Animation(animationKeyFrame, document.timeline);

	animation.play()

	const observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutationsRecord){
			console.log('callback that runs when observer is triggered');
			
		})
	})

	observer.observe(criaCactus, {
		attributes: true,
		/* characterData: true,
		childList: true,
		subtree: true,
		attributeOldValue: true,
		characterDataOldValue: true, */
		attributeFilter:['style.animation']
	});

	/* setTimeout(() => {
		criaCactus.remove();
	}, 4500);

	setTimeout(() => {
		cactus();
	}, random); */
}

cactus();