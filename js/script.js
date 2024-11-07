const diaInput = document.querySelector(`#dias`)
const horasInput = document.querySelector(`#horas`)
const minutosInput = document.querySelector(`#minutos`)
const segundosInput = document.querySelector(`#segundos`)

let dias = 2;
let horas = 5;
let minutos = 5;
let segundos = 5;

diaInput.innerHTML = dias;
function adicionaCronometro(params) {
    horasInput.innerHTML = horas;
    minutosInput.innerHTML = minutos;
    segundosInput.innerHTML = segundos;

}



function criaDias(params) {
    let timerdias = setInterval(()=>{
        --dias
        console.log(dias);
        
        if (dias <= 0){
            clearInterval(timerdias)
        }
        adicionaCronometro()
    },1000)
}

function criaHoras(params) {
    console.log(horas);
    
    let timerHr = setInterval(()=>{
        --horas
        adicionaCronometro()
        if (horas <= 0){
            clearInterval(timerHr)
            criaDias();
            return
        }
    },1000)
}

function criaMinutos() {
    let timerMin = setInterval(()=>{
        --minutos
        adicionaCronometro()
        
        if (minutos <= 0){
            clearInterval(timerMin)
            criaHoras()
            return
        }
    },)
}

function criaSegundos(){
    let timerSeg = setInterval(()=>{
        console.log(segundos);
        --segundos
        adicionaCronometro()
        
        if (segundos <= 0) {
            clearInterval(timerSeg)
            criaMinutos()
            return
        }
    },1000)
}


criaSegundos();