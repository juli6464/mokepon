//alert("hola, mundo JS")

//variables globales
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador )

    //botones de ataque
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)

    let botonAgua  = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    //boton reiniciar
    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

//selecciona el mokepon del jugador
function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota=document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display='none'
    let sectionSeleccionarAtaque=document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display='flex'

    let inputHipodoge =document.getElementById("hipodoge")
    let inputCapipepo =document.getElementById("capipepo")
    let inputRatigueya =document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else {
        alert("Seleccione una mascota")
    }

    seleccionarMascotaEnemigo()
}

//selecciona el mokepon del enemigo
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    
    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"    
    } else if(mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"    
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"    
    }

}

function ataqueFuego(){
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "Tierra"
    ataqueAleatorioEnemigo()

}

//funcion de ataque aleatorio enemigo
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3)
    
    if(ataqueAleatorio == 1){
        ataqueEnemigo = "Fuego"
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = "Agua"
    } else {
        ataqueEnemigo = "Tierra"
    }

     combate()

}
//funcion de combate
function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

        if(ataqueEnemigo == ataqueJugador){
            crearMensaje("Empate")
        }else if(ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra"){
            crearMensaje("Ganaste")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        }else if(ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
            crearMensaje("Ganaste")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        }else if(ataqueJugador == "Tierra" && ataqueEnemigo == "Agua"){
            crearMensaje("Ganaste")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        }else{
            crearMensaje("Perdiste")
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
        }

        revisarVidas()

}

function revisarVidas(){
        //revisar las vidas
        if(vidasJugador == 0){
            crearMensajeFinal("Lo siento Perdiste 😢")
        }else if(vidasEnemigo == 0){
            crearMensajeFinal("Ganaste 🎉")
        }
}

//mensaje donde muestra los ataques y quien gana 
function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("resultado")
    let ataquesDelJugador = document.getElementById("ataques-del-Jugador")
    let ataquesDelEnemigo = document.getElementById("ataques-del-Enemigo")

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo


    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

//mensaje donde muestra el ganador
function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("resultado")

    sectionMensajes.innerHTML =  resultadoFinal

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true

    let botonAgua  = document.getElementById("boton-agua")
    botonAgua.disabled = true

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

window.addEventListener("load", iniciarJuego)