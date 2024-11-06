const diaInput = document.querySelector(`#dias`)
const horasInput = document.querySelector(`#horas`)
const minutosInput = document.querySelector(`#minutos`)
const segundosInput = document.querySelector(`#segundos`)

let dia;
let horas;
let minutos;
let segundos;

const data = new Date().toLocaleString(`pt-BR`)
console.log(data);
