/* ------------------ FUNCIONES PARA EL PERFIL DE FRIDA ------------------*/
var $perfilPaaxFrida = document.querySelector("#perfil-paax-frida")
var $playMusicFrida = document.querySelector("#audioFrida")
var $coverImgFrida = document.querySelector("#coverFrida")

$perfilPaaxFrida.addEventListener("mouseover", () => {
    activarCoverFrida()
    reproducirMusicaFrida()
})

$perfilPaaxFrida.addEventListener("mouseout", () => {
    desactivarCoverFrida()
    detenerMusicaFrida()
})

function reproducirMusicaFrida() {
    $playMusicFrida.play()
}

function detenerMusicaFrida() {
    $playMusicFrida.pause()
}

function activarCoverFrida() {
    $coverImgFrida.style.opacity = 0.5
}

function desactivarCoverFrida() {
    $coverImgFrida.style.opacity = 1
}


/* ------------------ FUNCIONES PARA EL PERFIL DE DANIELA ------------------*/
var $perfilPaaxDani = document.querySelector("#perfil-paax-dani")
var $playMusicDani = document.querySelector("#audioDani")

$perfilPaaxDani.addEventListener("mouseover", () => {
    reproducirMusicaDani()
})

$perfilPaaxDani.addEventListener("mouseout", () => {
    detenerMusicaDani()
})

function reproducirMusicaDani() {
    $playMusicDani.play()
}

function detenerMusicaDani() {
    $playMusicDani.pause()
}


/* ------------------ FUNCIONES PARA EL PERFIL DE DANIEL ------------------*/
var $perfilPaaxDaniel = document.querySelector("#perfil-paax-daniel")
var $playMusicDaniel = document.querySelector("#audioDaniel")

$perfilPaaxDaniel.addEventListener("mouseover", () => {
    reproducirMusicaDaniel()
})

$perfilPaaxDaniel.addEventListener("mouseout", () => {
    detenerMusicaDaniel()
})

function reproducirMusicaDaniel() {
    $playMusicDaniel.play()
}

function detenerMusicaDaniel() {
    $playMusicDaniel.pause()
}


/* ------------------ FUNCIONES PARA EL PERFIL DE RICARDO ------------------*/
var $perfilPaaxRicardo = document.querySelector("#perfil-paax-ricardo")
var $playMusicRicardo = document.querySelector("#audioRicardo")

$perfilPaaxRicardo.addEventListener("mouseover", () => {
    reproducirMusicaRicardo()
})

$perfilPaaxRicardo.addEventListener("mouseout", () => {
    detenerMusicaRicardo()
})

function reproducirMusicaRicardo() {
    $playMusicRicardo.play()
}

function detenerMusicaRicardo() {
    $playMusicRicardo.pause()
}


/* ------------------ FUNCIONES PARA EL PERFIL DE GERARDO ------------------*/
var $perfilPaaxGerardo = document.querySelector("#perfil-paax-gerardo")
var $playMusicGerardo = document.querySelector("#audioGerardo")

$perfilPaaxGerardo.addEventListener("mouseover", () => {
    reproducirMusicaGerardo()
})

$perfilPaaxGerardo.addEventListener("mouseout", () => {
    detenerMusicaGerardo()
})

function reproducirMusicaGerardo() {
    $playMusicGerardo.play()
}

function detenerMusicaGerardo() {
    $playMusicGerardo.pause()
}


/* ------------------ FUNCIONES PARA EL PERFIL DE VÍCTOR ------------------*/
var $perfilPaaxVictor = document.querySelector("#perfil-paax-victor")
var $playMusicVictor = document.querySelector("#audioVictor")

$perfilPaaxVictor.addEventListener("mouseover", () => {
    reproducirMusicaVictor()
})

$perfilPaaxVictor.addEventListener("mouseout", () => {
    detenerMusicaVictor()
})

function reproducirMusicaVictor() {
    $playMusicVictor.play()
}

function detenerMusicaVictor() {
    $playMusicVictor.pause()
}


/* ------------------ FUNCIONES PARA EL PERFIL DE NIVER ------------------*/
var $perfilPaaxNiver = document.querySelector("#perfil-paax-niver")
var $playMusicNiver = document.querySelector("#audioNiver")

$perfilPaaxNiver.addEventListener("mouseover", () => {
    reproducirMusicaNiver()
})

$perfilPaaxNiver.addEventListener("mouseout", () => {
    detenerMusicaNiver()
})

function reproducirMusicaNiver() {
    $playMusicNiver.play()
}

function detenerMusicaNiver() {
    $playMusicNiver.pause()
}