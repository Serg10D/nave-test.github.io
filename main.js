const nave = document.getElementById("nave")
const imgnave = document.getElementById("imgnave")
const disparo = document.getElementById("disparo")
const conteiner = document.getElementById("conteiner")
const enemigo = document.getElementById("enemigo")
const meteorito = document.getElementById("meteorito")
const explosion = document.getElementById("explosion")

let posX = 600
let posY = 470
let pos2X = 600
let pos2Y = 470

function movimientonave(){

    nave.style.left = `${posX}px`
    nave.style.top = `${posY}px`
}
function limite(){

    let naveLimite = nave.getBoundingClientRect()
    if (posY < 0){
        posY = 0
    }else if (posX < 0){
        posX = 0
    }
    
    if (posX + naveLimite.width > window.innerWidth) {
        posX = window.innerWidth - naveLimite.width
    }else if (posY + naveLimite.height > window.innerHeight) {
        posY = window.innerHeight - naveLimite.height}

}

document.addEventListener('keydown', function(event) {


    switch(event.key) {
        case 'ArrowRight':
            posX  +=25
            movimientonave()
            
            break
        case 'ArrowLeft':
            posX  -=25
            movimientonave()
            break
        case 'ArrowUp':
            posY -=25
            movimientonave()
            break
        case 'ArrowDown':
            posY +=25
            movimientonave()
            break
        
    }
    limite()
    
})

let disparocomprobar = false


document.addEventListener('keydown', function(event){

    if (event.key === 'c'){
       if (disparocomprobar){
        disparo.style.display = 'none'
        disparocomprobar = false
       }else {
        disparo.style.display = 'block'
        disparocomprobar = true
       }


    }

    
})

function colision(){
    let bala = disparo.getBoundingClientRect()
    let enemigocolision = enemigo.getBoundingClientRect()
    if (
        bala.top <= enemigocolision.bottom &&
        bala.right >= enemigocolision.left &&
        bala.left <= enemigocolision.right
    ){  
        enemigo.style.display = 'none'
        let azar = Math.floor(Math.random()*1200)
        setTimeout(() => {
            enemigo.style.right = `${azar}px`
            enemigo.style.display = 'block'
        }, 1000);

    }

}
function colisionmeteorito(){
    let navecolision = nave.getBoundingClientRect()
    let meteoritoColision = meteorito.getBoundingClientRect()
    if (
        meteoritoColision.top <= navecolision.bottom &&
        meteoritoColision.right >= navecolision.left &&
        meteoritoColision.left <= navecolision.right &&
        meteoritoColision.bottom >= navecolision.top 

    ){  

        imgnave.style.display = 'none'
        explosion.style.display = 'block'
        setTimeout(() => {
            explosion.style.display = 'none'
            nave.style.display = 'none'
        }, 800);

 
        

    }


}
function limitemeteorito(){
    let navecolision2 = nave.getBoundingClientRect()
    let meteoritoColision2 = meteorito.getBoundingClientRect()

    if (
        meteoritoColision2.bottom >= i
    ){
        let azar = Math.floor(Math.random()*1200)
        setTimeout(() => {
            meteorito.style.left = `${azar}px`                  
        }, 1000);
    }
}


function loop(){
    colisionmeteorito()
    colision()
    setTimeout(loop, 100)
}
loop()

