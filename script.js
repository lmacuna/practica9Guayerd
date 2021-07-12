//Ejercicios de funciones

//1)Crear una función que reciba tu edad y retorne tu edad en años perro. (Multiplicado por 7).

/*let edad = parseInt(prompt("ingresa tu edad"));

function aniosPerro(edad) {
    return (edad * 7);
}

console.log(aniosPerro(edad));
*/

//2)Crear una función que reciba un nombre y devuelva un saludo.

/*let nombre = prompt("ingresa tu nombre");
let saludo = "hola";

function saludar(nombre) {
    return (saludo + " " + nombre + " como estas?");
}
console.log(saludar(nombre));*/



//3)Crear una función que salude.
/*
function saludoInicial() {
    return "Buenos dias";
}
console.log(saludoInicial());
*/



//4)Crear una función que reciba los parámetros, la temperatura y el sistema (Farenheit o Celsius), y devuelva la temperatura transformada al otro sistema. (Si recibe Farenheit, devolver Celsius, si recibe Celsius devolver Farenheit).
/*
let temp = parseInt(prompt("Ingrese temperatura"));
let tipo = prompt("Ingrese:\n f -convertir a farhenheit\nc-Convertir a celsius");

function conversorTemp(temp, tipo) {
    if (tipo.toLowerCase() === "f") {
        return (((temp * (9 / 5)) + 32)) + "ºF";
    } else if (tipo.toLowerCase() === "c") {
        return ((temp - 32) * (5 / 9) + "ºC");
    }
}
console.log(conversorTemp(temp, tipo));
*/


//5)Realizar una función que reciba como parámetro un número. Si esta entre 5 y 10, que le aplique la función de factorial (ejercicio 12 de bucles), si es menor , aplicar una función que muestre su módulo (valor absoluto, valor sin el “-” en caso de ser negativo), y si es mayor que 10 aplicarle una función que muestre su doble. Ejemplos de entrada y salida:
//6 → 6! = 720
//4 → |4| = 4
//-8 → |-8| = 8
//50 → 100
//11 → 22

/*let numero = parseInt(prompt("Ingrese un numero"));
let factorial = 1;


function procesar(numero) {
    if (numero >= 5 && numero <= 10) {
        for (let i = 1; i <= numero; i++) {
            factorial = factorial * i;
        }
        return ("El factorial de " + numero + "! es: " + numero + "! = " + factorial);
    } else if (numero < 0) {

        return ("El valor absoluto de " + numero + " es: " + (numero * -1));

    } else if (numero > 0 && numero < 5) {
        return ("El valor absoluto de " + numero + " es: " + numero);
    } else if (numero > 10) {
        return (numero + " es mayor a 10 le corresponde \nmostrarse multiplicado por 2: " + (numero * 2));
    } else {
        return "has ingresado cero--->" + numero;
    }
}
console.log(procesar(numero));
*/


//EJERCICIO Nº6
//Rehacer el ejercicio 12 de condicionales utilizando funciones para validar edad y cobrar. 
/*
let producto = parseInt(prompt("Ingresa la bebida que vas a comprar\n1-cerveza\n2-jugo\n3-Agua"));
let edad = parseInt(prompt("Ingresa tu edad"));
let vuelto;
let plata = parseInt(prompt("Ingresa tu dinero"));
let cerveza = 230;
let jugo = 160;
let agua = 120;
let productos = [cerveza, jugo, agua];

let mensaje = "tu vuelto es : ";


function validarEdad(edad, producto) {

    if (edad < 18 && producto === 1) {

        return "Eres menor de edad, no puedes llevar alcohol";

    } else {

        return pagar(plata, producto);

    }
}


function pagar(plata, producto) {
    if (plata < productos[producto - 1]) {
        return "no te alcanza la plata!!\n el producto te sale $" + productos[producto - 1] + " y tu pagas con " + plata;
    } else {
        vuelto = plata - productos[producto - 1];

        return (mensaje + vuelto);
    }

}
alert(validarEdad(edad, producto));
console.log(validarEdad(edad, producto));
*/



//EJERCICIO Nº7 Crear una función que reciba tres parámetros: Horas, minutos y segundos, y devolver todo pasado a segundos.
/*
let hora = parseInt(prompt("ingresa la hora sin los minutos"));
let minutos = parseInt(prompt("ahora ingresa los minutos"));
let segundos = parseInt(prompt("por ultimo ingrsa los segundos"));
let convertSegundos;

function todoSegundos(hora, minutos, segundos) {
    hora = (hora * 60) * 60;
    minutos = minutos * 60;
    convertSegundos = hora + minutos + segundos;
    return "Tu conversion todo a segundos " + convertSegundos + " segundos";

}
alert(todoSegundos(hora, minutos, segundos));
*/



//EJERCICIO Nº8 Realizar una función de carga de notas en un array. Luego realizar otra función que calcule el promedio de todas y lo devuelva.
/*
let notas=[];
let nota;
let notaa=0;
let promedio;
let continuar;
function cargarNotas(){
   do{
     nota=parseFloat(prompt("Ingresa las notas"));
     notas.push(nota);
     continuar=confirm("Ingresar notas?")
   }while(continuar);

   return promediar(notas);

}
cargarNotas(console.log(notas));


function promediar(notas){
    for(let i = 0;i<notas.length;i++){
        notaa=notaa+notas[i];
    }
    promedio=notaa/notas.length;
    return alert("el promedio es: "+promedio.toFixed(1));
    
}
*/


//EJERCICIO Nº9

/*Escribir una función para cobrar en caja. Agregando funciones que: 
* Si no es cliente A, agregue el IVA. 
* Se solicite un monto de descuento a aplicar, y lo aplique.
* Finalmente, realice el cobro solicitando al usuario con cuánto desea abonar.
*/
/*
let importes=[];
let importe;
let total = 0;
const iva=21;
let continuar;
let cliente;
let pagar;

//Scannear importes
function scanner(){
    do{
      importe=parseFloat(prompt("Ingrese importe"));
      importes.push(importe);
      continuar=confirm("Seguir Scanneando?");
    }while(continuar);

    cliente=prompt("Tipo de cliente:\nA: cliente sin iva\nB: cliente con carga de IVA");
    
    while(cliente.toUpperCase()!=="A"&&cliente.toUpperCase()!=="B"){
        cliente=prompt("Tipo de cliente:\nA: cliente sin iva\nB: cliente con carga de IVA");
       
    }
    return sitieneIva(cliente)+cobrar(total);
}



//Discriminar iva
function sitieneIva(cliente){
    for(let i=0;i<importes.length;i++){
        total=total+importes[i];
    }
 if(cliente.toUpperCase()==="B"){
    total=((total*21)/100)+total;
    return alert("FACTURA B:\n Total + IVA: $"+total)+console.log("FACTURA B:\n Total con IVA: $"+total);
 }else if(cliente.toUpperCase()==="A"){
     return alert("FACTURA A:\n Total S/IVA: $"+total)+console.log("FACTURA A:\n Total S/IVA: $"+total);
 }
}


 
//Cobro
function cobrar(total){
    
   pagar=parseFloat(prompt("Ingrese pago"));
  
    while(pagar<total||isNaN(pagar)){
        pagar=parseFloat(prompt("dinero insuficiente!!!\nIngrese pago "));
    } 
    total=pagar-total;
    return alert("Efectivo: $"+pagar+"\nvuelto: $"+total)+console.log("Efectivo: $"+pagar+"\nvuelto: $"+total);
}

scanner();
*/

//EJERCICIO Nº 10

/*Vamos a realizar (intentando no llorar) un conversor de monedas. Primero vamos a generar una función que reciba dos parámetros, tipo de moneda y monto y la convierta a pesos. (Tipos de moneda aceptados dólares, euros y reales).
Luego vamos a realizar una función que llame a esta función dos veces, con parámetros diferentes, sume ambos valores y devuelva el resultado.
Ejemplo: us$4, €3. Devuelve el total de: $1180. (Dificil no llorar a este punto). */


let moneda;
let importe;
let continuar;
let total=0;
var pesos=[];
function convertPesos(){
    
    moneda=parseInt(prompt("Tipo de Moneda\n1-dolares a pesos(llorando)\n2-Euros a pesos(llorando)\n3-Reales a pesos-Messi\n4-sumar\n5-Salir\n9-RESET"));
    while(moneda!==1&&moneda!==2&&moneda!==3&&moneda!==5&&moneda!==4&&moneda!==9){
        alert("Ingresa una opcion del menu");
        moneda=parseInt(prompt("Tipo de Moneda\n1-dolares a pesos(llorando)\n2-Euros a pesos(llorando)\n3-Reales a pesos-Messi\n4-sumar\n5-Salir\n9-RESET"));
    }
    if(moneda===1||moneda===2||moneda===3){
    importe=parseFloat(prompt("Ingrese monto a convertir"));
    
    while(importe<0||isNaN(importe)){
        importe=parseFloat(prompt("Ingrese monto valido a convertir"));
    }
    }
    if(moneda===1){
        importe=importe*95.86;
        continuar=confirm("guardar importe para sumar?");
        if(continuar){
            pesos.push(importe);
            return alert("cambiaste dolares a pesos \nimporte: $"+importe);
        }else{
            return alert("cambiaste dolares a pesos \nimporte: $"+importe);
        }        
    }else if(moneda===2){
        importe=importe*113.82;
        continuar=confirm("guardar importe para sumar?");
        if(continuar){
            pesos.push(importe);
            return alert("cambiaste dolares a pesos \nimporte: $"+importe);
        }else{        
            return alert(" cambiaste euros a pesos \nimporte: $"+importe);
        }
    }else if(moneda===3){
        importe=importe*18.44;
        continuar=confirm("guardar importe para sumar?");
        if(continuar){
            pesos.push(importe);
            return alert("cambiaste dolares a pesos \nimporte: $"+importe);
        }else{         
        return alert(" cambiaste reales a pesos \nimporte: $"+importe);
        }
    }else if(moneda===4){
        sumarConversiones(pesos);
        pesos.length=0;
        total=0;
    }else if(moneda===9){
        pesos.length=0;
        total=0;
        return alert("valores en cero: "+pesos.length+""+total);
    }
    
}

do{
convertPesos();
continuar=confirm("continuar operaciones?");
}while(continuar);


function sumarConversiones(pesos){
    for(let i=0;i<pesos.length;i++){
        total=total+pesos[i];
    }
  
    return alert("El total en pesos es : $"+total);
    
}
sumarConversiones();