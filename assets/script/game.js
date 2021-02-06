import {update as updateUlar, draw as drawUlar, kecepatan_ular, getKepalaUlar, tabrakTubuh} from './ular.js';
import {update as updateCemilan, draw as drawCemilan} from './cemilan.js';
import {batasPapan} from './grid.js';

let tamat = false;
let terakhirRenderWaktu = 0;
const papanGame = document.getElementById('papan-game');
var color = 'abu-abu';

let getColor = document.querySelectorAll('#pilih #select-color-board div');
getColor.forEach(function(res){
   res.addEventListener('click', function(){
      let pilihan = res.id;
      color = pilihan;
   });
});

function main(waktuSekarang){   

   papanGame.setAttribute('class', color);

   if(tamat){
      
      const score = document.querySelectorAll(".ular").length;

      return swal("GAME OVER !! :)", "TETAP SEMANGAT !! SCORE ANDA = " + score, "error")
            .then(()=>{ window.location.reload()});
   }

   window.requestAnimationFrame(main);

   const detikRenderTerakhir = (waktuSekarang - terakhirRenderWaktu) / 1000;

   if(detikRenderTerakhir < 1 / kecepatan_ular) return true;

   terakhirRenderWaktu = waktuSekarang;

   update();
   draw();
}

 window.requestAnimationFrame(main);

 function update(){
   updateUlar();
   updateCemilan();
   checkBatas();
 }

 function draw(){
    papanGame.innerHTML = '';
    drawUlar(papanGame);
    drawCemilan(papanGame);
 }

 function checkBatas(){
    tamat = batasPapan(getKepalaUlar()) || tabrakTubuh();
 }

 var modal = document.getElementById("modal");
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }