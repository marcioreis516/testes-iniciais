let liga=document.getElementById('ac');
let im=document.getElementById('im');
let desliga=document.getElementById('ap');


desliga.onclick = function(){
   if(desliga.value=='apagar'){
    im.src='lam off.png';
    liga.value='ligar'  //value significa que quer so o valor do elemento.
   // liga.innerHTML='apagar'//   <------------essa linha de código muda o nome do buutão
} else{
      im.src='https://w7.pngwing.com/pngs/169/236/png-transparent-light-bulb-realistic.png'}}


 liga.onclick= function(){
    if(desliga.value=='acender'){
      im.asrc='https://w7.pngwing.com/pngs/169/236/png-transparent-light-bulb-realistic.png';
      desliga.value='desligar'
     // desliga.innerHTML='ligar'
    }else{
      im.src='https://w7.pngwing.com/pngs/169/236/png-transparent-light-bulb-realistic.png'
    }}


href="https://www.youtube.com/watch?v=D1tioXSkQQk"