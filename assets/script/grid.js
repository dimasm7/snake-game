const ukuranBatasPapan = 21;

export function randomGridPosisi(){
    return {
        x: Math.floor(Math.random() * ukuranBatasPapan) + 1, 
        y: Math.floor(Math.random() * ukuranBatasPapan) + 1
    }
}

export function batasPapan(posisi){
    return (
        posisi.x < 1 || posisi.x > ukuranBatasPapan || posisi.y < 1 || posisi.y > ukuranBatasPapan
    )
}