const containerGame = document.querySelector('.game-container');

function cactus(){
    let random = Math.floor(Math.random()*(Math.floor(6000)-Math.ceil(1000) )+Math.ceil(1000));

    const cactusTypes= {
        big:'url(./src/image/cactusBig0000.png) no-repeat 0px 45px',
        small:'url(./src/image/cactusSmall0000.png) no-repeat 0px 85px',
        smallMany:'url(./src/image/cactusSmallMany0000.png) no-repeat 0px 85px'
    }

    const criaCactus = document.createElement('div');
    criaCactus.classList.add('cactus');
    criaCactus.style.background = cactusTypes[Object.keys(cactusTypes)[Math.floor(Math.random()*Object.keys(cactusTypes).length)]];
    containerGame.appendChild(criaCactus)
    criaCactus.style.animation = 'slidecactus 7.6s linear';
    setTimeout(() => {
        criaCactus.remove()  
    }, 7600);
    
    setTimeout(()=>{ 
        cactus()
         
        console.log(random)
        
    },random )   
    
    /*  if(criaCactus.getBoundingClientRect().x <= 100 ){
        console.log('teste')
        criaCactus.style.animation = '';
        
    }
    console.log(criaCactus.getBoundingClientRect().x) */
    
    
}

cactus() 
let random = Math.floor(Math.random()*(Math.floor(6000)-Math.ceil(1000) )+Math.ceil(1000))

setInterval(()=>{ 

    random = Math.floor(Math.random()*(Math.floor(6000)-Math.ceil(1000) )+Math.ceil(1000))
    
},10 )   




