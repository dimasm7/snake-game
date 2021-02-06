import { getInputArah } from "./input.js";

export let kecepatan_ular = 2;
const tubuhUlar = [{x: 11, y: 11}];
let segmentBaru = 0;
var color = 'hijau';

let getColor = document.querySelectorAll('#pilih #select-color-ular div');
getColor.forEach(function(res){
    res.addEventListener('click', function(){
        let pilihan = res.id;
        color = pilihan;
    });
});
let modalFokus = document.querySelectorAll('#pilihColor');
modalFokus.focus;

export function update(){
    addSegments();
    const inputArah = getInputArah();
    for (let i = tubuhUlar.length - 2; i >= 0; i--){
        tubuhUlar[i + 1] = { ...tubuhUlar[i] }
    }

    tubuhUlar[0].x += inputArah.x;
    tubuhUlar[0].y += inputArah.y;
}

export function draw(papanGame){
    tubuhUlar.forEach(segment => {
        const ularElement = document.createElement('div');
        ularElement.style.gridRowStart = segment.y;
        ularElement.style.gridColumnStart = segment.x;
        ularElement.setAttribute("class", "ular " + color);
        // ularElement.classList.add(color);
        papanGame.appendChild(ularElement);
    });
}

export function tambahTubuh(totalTambahanTubuh){
    segmentBaru += totalTambahanTubuh;
    kecepatan_ular++;
}

export function ularOn(segmentCemilan, {kepalaUlar = false} = {}){
    return tubuhUlar.some((segment, jumlahTubuh) =>{
        if(kepalaUlar && jumlahTubuh === 0) return false;

        return makan(segment, segmentCemilan);
    });
}

export function getKepalaUlar(){
    return tubuhUlar[0]
}

export function tabrakTubuh(){
    return ularOn(tubuhUlar[0], {kepalaUlar: true})
}

function makan(posisiUlar, posisiCemilan){
    return posisiUlar.x === posisiCemilan.x && posisiUlar.y === posisiCemilan.y;
}

function addSegments(){
    for (let i = 0; i < segmentBaru; i++){
        tubuhUlar.push({...tubuhUlar[tubuhUlar.length - 1]});
    }
    segmentBaru = 0;
}
