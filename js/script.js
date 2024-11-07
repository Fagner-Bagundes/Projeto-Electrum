const diaInput = document.querySelector(`#dias`)
const horasInput = document.querySelector(`#horas`)
const minutosInput = document.querySelector(`#minutos`)
const segundosInput = document.querySelector(`#segundos`)

let dias = 2;
let horas = 3;
let minutos = 5;
let segundos = 5;
let timerSeg;

diaInput.innerHTML = dias;
function adicionaCronometro(params) {
    horasInput.innerHTML = horas;
    minutosInput.innerHTML = minutos;
    segundosInput.innerHTML = segundos;

}



function criaDias(params) {

    if (dias <= 0) {
        
        clearInterval(timerSeg)
    } else{
        --dias
        

        
        adicionaCronometro()
    }
}

function criaHoras(params) {    
    if (dias <= 0){
        if (horas>0){
            console.log(horas);
            --horas
        }
    } else{
        if (horas <= 0) {
            criaDias()
            horas = 59
        }else{
            --horas

        }
    }
}
    

function criaMinutos() {
    if (horas <= 0){
        if (minutos>0){
            --minutos
        }
    } else{
        if (minutos <= 0) {
            criaHoras()
            minutos = 59
        }else{
            --minutos

        }
    }
}

function criaSegundos(){
    timerSeg = setInterval(()=>{
        --segundos
        adicionaCronometro()
        
        if (segundos <= 0) {
            clearInterval(timerSeg)
            criaMinutos()
            segundos = 60
            criaSegundos()
        }
    },1)
}


criaSegundos();