let inputArah = {x: 0, y: 0};
// let inputArahAkhir = {x: 0, y: 0};

window.addEventListener('keydown', e => {
    switch (e.key){
        case 'ArrowUp':
            if(inputArah.y !== 0) break
            inputArah = {x: 0, y: -1}
            break;
        case 'ArrowDown':
            if(inputArah.y !== 0) break
            inputArah = {x: 0, y: 1}
            break;
        case 'ArrowLeft':
            if(inputArah.x !== 0) break
            inputArah = {x: -1, y: 0}
            break;
        case 'ArrowRight':
            if(inputArah.x !== 0) break
            inputArah = {x: 1, y: 0}
            break;
    }
});

export function getInputArah(){
    // inputArahAkhir = inputArah;
    return inputArah;
}