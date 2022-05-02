let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");

 rotulo1.innerHTML = "numero1"
 rotulo2.innerHTML = "numero2"
 rotulo3.innerHTML = "numero3"

 let numero1: number = number(dato1.value);
 let numero2: number = number(dato2.value);
 let numero3: number = number(dato3.value);

 btnEnviar.addEventListener("click", () => {
 
 if (numero1 > numero2 && numero1 > numero3) {
       console.log("El numero" + numero1 + "es el mayor");

 } else if(numero2 > numero1 && numero2 > numero3) {
       console.log("El numero" + numero2 + "es el mayor");
 
 } else if(numero3 > numero1 && numero3 > numero2) {
       console.log("El numero" + numero3 + "es el mayor");
 } 