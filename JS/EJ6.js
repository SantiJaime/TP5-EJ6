let horaId = document.getElementById("horaId")
let minId = document.getElementById("minId")
let segId = document.getElementById("segId")
const btnIniciar = document.getElementById("btnIniciar")
let temp;

let hora = parseInt(prompt("Ingrese las horas"))
if(hora < 10) horaId.innerText = `0${hora}`
else horaId.innerText = hora

let min = parseInt(prompt("Ingrese los minutos"))
if(min < 10) minId.innerText = `0${min}`
else minId.innerText = min

let seg = parseInt(prompt("Ingrese los segundos"))
if(seg < 10) segId.innerText = `0${seg}`
else segId.innerText = seg

const iniciar = () => {
    seg--
    if(seg < 10) segId.innerText = `0${seg}`
    else segId.innerText = seg
    if(seg < 0){
        seg = 59
        if(seg < 10) segId.innerText = `0${seg}`
        else segId.innerText = seg
        min--
        if(min < 10) minId.innerText = `0${min}`
        else minId.innerText = min
    }
    if(min < 0){
        min = 59
        if(min < 10) minId.innerText = `0${min}`
        else minId.innerText = min
        hora--
        if(hora < 10) horaId.innerText = `0${hora}`
        else horaId.innerText = hora
    }
    if(hora === 0 && min === 0 && seg === 0){
        parar()
        btnIniciar.disabled = true
    }
}
const intervalo = () => temp = setInterval(iniciar, 1000)

const parar = () => clearInterval(temp)

const reiniciar = () => {
    parar()
    hora = parseInt(prompt("Ingrese las horas"))
    if(hora < 10) horaId.innerText = `0${hora}`
    else horaId.innerText = hora

    min = parseInt(prompt("Ingrese los minutos"))
    if(min < 10) minId.innerText = `0${min}`
    else minId.innerText = min

    seg = parseInt(prompt("Ingrese los segundos"))
    if(seg < 10) segId.innerText = `0${seg}`
    else segId.innerText = seg
}