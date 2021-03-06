// import { consultarAPI } from './consultaAPI.js'
import { mostrarError } from "./error.js"

import { consultarAPI } from "./consultaAPI.js"

const resultado = document.querySelector('#resultado')
const formulario = document.querySelector('#formulario')
export const container = document.querySelector('.container')

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima)
})

function buscarClima(e) {
    e.preventDefault()
    resultado.innerHTML = `
        <p class="text-center text-white mt-6">Agrega tu ciudad y país, el resultado se mostrará aquí</p>
    `;
    const ciudad = document.querySelector('#ciudad').value
    const pais = document.querySelector('#pais').value
    if (ciudad == '' || pais == '') {
        mostrarError('Debe ingresar ciudad y pais. Intente nuevamente');
    } else {
        const data = consultarAPI(ciudad, pais)
    }
}

export const mostrarHTML = (data) => {
    const { name, main: { temp, temp_max, temp_min }, weather: [{ icon }] } = data;
    resultado.innerHTML = `
    <div class='weatherdiv'>
    <h2 class='weatherh2 text-center text-white'>Temperatura en ${name}</h2>
    <p class='weatherp text-center text-white'>${kelvinToCelcius(temp)} °C</p>
    <p> <img src="http://openweathermap.org/img/wn/${icon}@2x.png"  class='weatherIcon' alt=""> </p>
    <p class='weatherp text-center text-white'>Maxima: ${(temp_max - 273.15).toFixed(1)}°</p>
    <p class='weatherp text-center text-white'>Minima: ${(temp_min - 273.15).toFixed(1)}°</p>
    </div>
    `
};

const kelvinToCelcius = (temp) => {
    return (temp - 273.15).toFixed(1)
}

/* 
Validacion para que no envien input vacios 
Mostrar valores en el DOM 
temp: 283.15
temp_max: 283.15
temp_min: 283.15
Para mostrar en Grados Celcius restar 273.15
Mostrar un cartel de error que dure aprox 5 segundos
*/