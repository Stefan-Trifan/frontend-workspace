let num;

let entrada = document.getElementById("entrada")
let boton = document.getElementById("boton")
let col2 = document.getElementById("col2")

boton.addEventListener("click", () => {

    num = entrada.value
    let nuevo_parrafo = document.createElement("p")
    let resultado

    if (Number.isNaN(Number(num))) {
        resultado = `${num}: No es numero`
    }
    else {
        num % 2 === 0 ? resultado = `${num} Es par` : resultado = `${num}: Es Impar`;
    }

    nuevo_parrafo.textContent = resultado

    col2.appendChild(nuevo_parrafo)
})