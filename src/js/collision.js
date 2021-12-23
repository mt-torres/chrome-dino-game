const dino1 = document.querySelector(".dino-run1");
const cactus2 = document.querySelector(".cactus");

cactus2.addEventListener('animationend',()=>{
    console.log('ola')
    if( cactus2.getBoundingClientRect().x <= 40){
        console.log(cactus2.style.bottom)
        console.log(cactus2.getBoundingClientRect().x)
    } 
})

/* setInterval(()=>{
    if( dino1.getBoundingClientRect().y >= 83){
        console.log(dino1.style.bottom)
        console.log(dino1.getBoundingClientRect().y)
    } 

},.1) */
/* setInterval(()=>{
    if(cactus2.offsetLeft <= dino1.offsetLeft && dino1.style.bottom <= 190 +'px'  ){
        alert("oi")
    }

},.1) */



//console.log(cactus2)
/* setInterval(()=>{
    cactus2.forEach(item => {
        if(item.getBoundingClientRect().x = 40 ){
            console.log(item.getBoundingClientRect().x )
            console.log('ola')
        }
    
    })

}, 7600) */


