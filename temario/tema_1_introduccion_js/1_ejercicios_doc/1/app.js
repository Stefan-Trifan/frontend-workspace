nombre = prompt("Cual es tu nombre? Sin apellido")
apellido = prompt("Cual es tu apellido?")
edad = prompt("Cual es tu edad?")
const resultado = document.getElementById("titulo")

if (confirm("Estas seguro??")){
    resultado.textContent = `Hola ${nombre} ${apellido}. Tienes ${edad} años`
}
else {
    resultado.textContent = `Espabila`
}
