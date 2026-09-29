let num;

let entrada = document.getElementById("entrada")
let boton = document.getElementById("boton")

boton.addEventListener("click", () => {
    num = entrada.value
    if (Number.isNaN(Number(num))) {
        alert("No es numero")
    } else {
        num % 2 === 0 ? alert("Es par") : alert("Es impar");
    }
})