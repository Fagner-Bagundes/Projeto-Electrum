const diaInput = document.querySelector(`#dias`)
const horasInput = document.querySelector(`#horas`)
const minutosInput = document.querySelector(`#minutos`)
const segundosInput = document.querySelector(`#segundos`)

let dias = 2;
let horas = 12;
let minutos = 25;
let segundos = 32;
let timer;


diaInput.innerHTML = dias;
function adicionaCronometro(params) {
    horasInput.innerHTML = horas;
    minutosInput.innerHTML = minutos;
    segundosInput.innerHTML = segundos;
    diaInput.innerHTML = dias;

}


let decrementa = {
    segundos(){
        --segundos
    },
    minutos(){
        --minutos
    },
    horas(){
        --horas
    },
    dias(){
        --dias
    }


}


function decrementaDia(){
    if (horas<=0) {
        horas = 23
        decrementa.dias()
    }

    if (minutos<=0) {
        minutos = 59
        decrementa.horas()
    }

    if (segundos<= 0) {
        segundos = 59
        decrementa.minutos()
    }
    decrementa.segundos();

}

function decrementaHoras() {

    if (horas > 0) {
        if (minutos<=0) {
            minutos = 59
            decrementa.horas()
        }

        if (segundos<= 0) {
            segundos = 59
            decrementa.minutos()
        }

    }
}

function decrementaMinutos(){
    if (minutos>0) {
        if (segundos<= 0) {
            segundos = 59
            decrementa.minutos()
        }
    } else{
        if (segundos=== 0 ) {
            recriaCronometro();
            clearInterval(timer)
        }
    }
}

function recriaCronometro(params) {
    setTimeout(()=>{
        dias = 2
        horas = 12
        minutos = 25
        segundos= 32
        alteraCronometro();
    },1000*2)
}

function alteraCronometro(params) {

    timer = setInterval(()=>{
        adicionaCronometro();
        if (dias > 0) {

            decrementaDia();

        } else{

            decrementaHoras();
            decrementaMinutos();
              
            decrementa.segundos()
            }
    }, 100)

}

alteraCronometro()