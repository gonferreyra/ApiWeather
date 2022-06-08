import { container } from "./app.js";

export function mostrarError(message) {
    console.log(message);
    const alerta = document.createElement('p')
    alerta.style = 'background:red;color:white;width:510px;margin:1rem auto;padding:1rem;text-align:center;border-radius:5px;'
    alerta.innerText = message
    container.appendChild(alerta)
    setTimeout(() => {
        alerta.remove();
    }, 4000);
}