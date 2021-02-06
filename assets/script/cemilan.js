import {ularOn, tambahTubuh} from './ular.js';
import {randomGridPosisi} from './grid.js';

let cemilan = randomGridPosisi();
const totalTambahanTubuh = 1;
var color = 'kuning';

let getColor = document.querySelectorAll('#pilih #select-color-food div');
getColor.forEach(function(res){
    res.addEventListener('click', function(){
        let pilihan = res.id;
        color = pilihan;
    });
});

export function update(){
    if(ularOn(cemilan)){
        tambahTubuh(totalTambahanTubuh);
        cemilan = getRandomPosisiCemilan();
    }
}

export function draw(papanGame){
    const cemilanElement = document.createElement('div');
    cemilanElement.style.gridRowStart = cemilan.y;
    cemilanElement.style.gridColumnStart = cemilan.x;
    cemilanElement.setAttribute('class', 'cemilan ' + color);
    papanGame.appendChild(cemilanElement);
}

function getRandomPosisiCemilan(){
    let newPosisiCemilan;
    while (newPosisiCemilan == null || ularOn(newPosisiCemilan)) {
        newPosisiCemilan = randomGridPosisi();
    }
    return newPosisiCemilan;
}