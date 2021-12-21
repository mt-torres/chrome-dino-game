const dino = document.querySelector(".dino-run1");
let isJumping = false;

function handleKeyEvent(event) {
   if (event.key === " " && !isJumping) {
      jump();
   }
}

function jump() {
   isJumping = true;
   let position = 0;
   let up = setInterval(() => {
      if (position >= 200 ) {
         clearInterval(up);
         let down = setInterval(() => {
            if (position <= 15) {
               isJumping = false;
               clearInterval(down);
            } else {
               position -= 20;
               dino.style.bottom = position + "px";
            }
         }, 25);
      } else {
         position += 20;
         dino.style.bottom = position + "px";
      }
   }, 25);
}

function dinoRun(){  
   setInterval(()=>{
      if(isJumping){
         dino.classList.remove('dino-run2')
         dino.classList.add('dino-jump') 
         
      }else{
         dino.classList.remove('dino-jump')
         dino.classList.toggle('dino-run2')
      }
   },80)
}
dinoRun()
document.addEventListener("keydown", handleKeyEvent);