var uno = document.getElementById('uno')
var dos = document.getElementById('dos')
var tres = document.getElementById('tres')
var cuatro = document.getElementById('cuatro')

sobreUno = () => {
    uno.classList.remove('uno')
    uno.classList.add('incrementarUno')
    tres.classList.remove('tres')
    tres.classList.add('decrecerTres')
}

fueraUno = () => {
    uno.classList.remove('incrementarUno')
    tres.classList.remove('decrecerTres')
    uno.classList.add('uno')
    tres.classList.add('tres')
}

sobreDos = () => {
    dos.classList.remove('dos')
    dos.classList.add('incrementarDos')
    cuatro.classList.remove('cuatro')
    cuatro.classList.add('decrecerCuatro')
}

fueraDos = () => {
    dos.classList.remove('incrementarDos')
    cuatro.classList.remove('decrecerCuatro')
    dos.classList.add('dos')
    cuatro.classList.add('cuatro')
}

sobreTres = () => {
    tres.classList.remove('tres')
    tres.classList.add('incrementarTres')
    uno.classList.remove('uno')
    uno.classList.add('decrecerUno')
}

fueraTres = () => {
    tres.classList.remove('incrementarTres')
    uno.classList.remove('decrecerUno')
    tres.classList.add('tres')
    uno.classList.add('uno')
}

sobreCuatro = () => {
    cuatro.classList.remove('cuatro')
    cuatro.classList.add('incrementarCuatro')
    dos.classList.remove('dos')
    dos.classList.add('decrecerDos')
}

fueraCuatro = () => {
    cuatro.classList.remove('incrementarCuatro')
    dos.classList.remove('decrecerDos')
    cuatro.classList.add('cuatro')
    dos.classList.add('dos')
}

uno.addEventListener('mouseover',sobreUno)
uno.addEventListener('mouseleave',fueraUno)
dos.addEventListener('mouseover',sobreDos)
dos.addEventListener('mouseleave',fueraDos)
tres.addEventListener('mouseover',sobreTres)
tres.addEventListener('mouseleave',fueraTres)
cuatro.addEventListener('mouseover',sobreCuatro)
cuatro.addEventListener('mouseleave',fueraCuatro)