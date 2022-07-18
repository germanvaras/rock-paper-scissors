// strings
const piedra = "piedra"
const papel = "papel"
const tijera = "tijeras"
// resultado
const empate = 0;
const victoria = 1;
const derrota = 2;

// dom
const btnPiedra = document.getElementById("piedra");
const btnPapel = document.getElementById("papel");
const btnTijera = document.getElementById("tijera");
const textoInicio = document.getElementById("subtitulo");
const imgUsuario = document.getElementById("imagenUsuario");
const imgMaquina = document.getElementById("imagenMaquina");
// eventos click
btnPiedra.onclick = () => {
    return jugar(piedra)
};
btnPapel.onclick = () => {
   return jugar(papel)
};
btnTijera.onclick = () => {
   return jugar(tijera)
};
// funcion principal
function jugar(eleccionUsuario){
// imagen de la opcion elegida elegida
imgUsuario.src = "img/" + eleccionUsuario + ".svg"
// texto mientras la maquina piensa
textoInicio.innerHTML = "Eligiendo..."
// intervalo para que rote la imagen de la maquina hasta que tome su elecion (3segundos)
const intervalo = setInterval(function(){
    const eleccionMaquina = calcularMaquina()
    imgMaquina.src = "img/" + eleccionMaquina + ".svg"
},100)
// funcion para retrasar la eleción de la maquina
setTimeout(function(){
    clearInterval(intervalo)
    const eleccionMaquina = calcularMaquina()

    const resultado = calcularResultado(eleccionUsuario, eleccionMaquina)
    
    // imagen de la eleccion de la maquina
    imgMaquina.src = "img/" + eleccionMaquina + ".svg"
    
    switch(resultado){
        case empate:
            textoInicio.innerHTML = "Has Empatado!";
            break;
        case victoria:
            textoInicio.innerHTML = "Has Ganado!";
            break;
        case derrota:
            textoInicio.innerHTML = "Has Perdido!";
             break;
    }
}, 2000)

}
// funcion para pasar la eleccion de la maquina de numeros a variables creadas
function calcularMaquina(){
    const numero = Math.floor(Math.random() * 3)
    switch( numero){
        case 0 : return piedra;
        case 1 : return papel;
        case 2 : return tijera;
    }
    
}
// validacion de resultado
function calcularResultado (eleccionUsuario, eleccionMaquina){
    if (eleccionUsuario === eleccionMaquina){
        return empate
    }
    else if (eleccionUsuario === piedra){
        if(eleccionMaquina === papel) return derrota
        if(eleccionMaquina === tijera) return victoria

    }
    else if (eleccionUsuario === papel){
        if(eleccionMaquina === tijera) return derrota
        if(eleccionMaquina === piedra) return victoria

    }
    else if (eleccionUsuario === tijera){
        if(eleccionMaquina === piedra) return derrota
        if(eleccionMaquina === papel) return victoria

    }

}