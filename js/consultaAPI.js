
import { mostrarError } from './error.js'
import { mostrarHTML } from './app.js';

export function consultarAPI(ciudad, pais) {
    const apiKEY = 'b463dc96882da7c4efdc8dc95527b092'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKEY}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.cod === '404') {
                mostrarError('No existe la ciudad');
            } else {
                mostrarHTML(data)
            }
        })
}

