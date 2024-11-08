const diaInput = document.querySelector(`#dias`)
const horasInput = document.querySelector(`#horas`)
const minutosInput = document.querySelector(`#minutos`)
const segundosInput = document.querySelector(`#segundos`)

let dias = 0;
let horas = 2;
let minutos = 2;
let segundos = 10;
let timer;
let incia = true;

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
        horas = 5
        decrementa.dias()
    }

    if (minutos<=0) {
        minutos = 5
        decrementa.horas()
    }

    if (segundos<= 0) {
        segundos = 10
        decrementa.minutos()
    }
    decrementa.segundos();

}

function decrementaHoras() {

    if (horas > 0) {
        if (minutos<=0) {
            minutos = 10
            decrementa.horas()
        }

        if (segundos<= 0) {
            segundos = 10
            decrementa.minutos()
        }

    }
}

function decrementaMinutos(){
    if (minutos>0) {
        if (segundos<= 0) {
            segundos = 10
            decrementa.minutos()
        }
    } else{
        if (segundos=== 0 ) {
            timer(clearInterval)
        }
    }
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
    }, 200)

}

alteraCronometro()