const diaInput = document.querySelector(`#dias`)
const horasInput = document.querySelector(`#horas`)
const minutosInput = document.querySelector(`#minutos`)
const segundosInput = document.querySelector(`#segundos`)

let dia = 2;
let horas = 12;
let minutos = 25;
let segundos = 32;

function criaDias(params) {
    setInterval(()=>{
        if (segundos === 0) return
        segundos--
    },1000000)
}

function criaHoras(params) {
    setInterval(()=>{
        if (horas === 0) return
        segundos--
    },100000)
}

function criaMinutos() {
    setInterval(()=>{
        if (minutos === 0) return
        segundos--
    },10000)
}

function criaSegundos(){
    setInterval(()=>{
        if (segundos === 0) return
        segundos--
    },1000)
}



// const data = new Date().toLocaleString(`pt-BR`)
// console.log(data);
