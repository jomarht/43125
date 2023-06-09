let unNumero = 5;

// Con (unNumero == 5) comparamos si unNumero es igual a 5
if (unNumero == 5){
    console.log("vas a ver este mensaje");
}

// Con (unNumero == 6) comparamos si unNumero es igual a 6
if (unNumero == 6){ 
    console.log("no vas a ver este mensaje");
}

/* */

let dosNumero = 5

// Con (unNumero == 5) comparamos si unNumero es igual a 5
if (dosNumero == 5){
    console.log("vas a ver este mensaje:" + dosNumero);
}

// Con (unNumero == 6) comparamos si unNumero es igual a 6
if (dosNumero == 6){ 
    console.log("no vas a ver este mensaje");
}

/**/

let unColor = "Rojo"

// Con (unColor == "Rojo") comparamos si unColor es igual "Rojo"
if (unColor == "Rojo"){
    console.log("el color es Rojo");
}else{
//La instrucción se interpreta cuando unColor NO es "Rojo"
    console.log("el color NO es Rojo");
}

/**/

/* let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario == "") {
    alert("No ingresaste el nombre de usuario");
}
else {
    alert("Nombre de usuario ingresado " + nombreUsuario);
}
 */

/**/

let nummeroDos = 10;
let numeroTres = 50;

if (nummeroDos > numeroTres) {
    console.log(`${numeroDos} es mayor a ${numeroTres}`);
} else {
    console.log(`NumeroTres: ${numeroTres} es mayor a NumeroDos: ${nummeroDos}`);
}

// Comparando dos valores usando if con interpolación de variables

var valor1 = 10;
var valor2 = 5;

// Comparamos los valores usando if con interpolación de variables
if (valor1 > valor2) {
    console.log(`El valor1 (${valor1}) es mayor que valor2 (${valor2})`);
} else if (valor1 < valor2) {
    console.log(`El valor1 (${valor1}) es menor que valor2 (${valor2})`);
} else {
    console.log(`El valor1 (${valor1}) es igual a valor2 (${valor2})`);
}


// Ejemplo de operadores de comparación

let a = 5;
let b = 10;

// Operador de igualdad (==)
console.log(`Valor de A:${a} Valor de B:${b}`);
console.log("Operador de igualdad (a==b) " + (a == b));  // false

// Operador de desigualdad (!=)
console.log(a != b);  // true

// Operador estrictamente igual (===)
console.log(a === b); // false

// Operador estrictamente desigual (!==)
console.log(a !== b); // true

// Operador mayor que (>)
console.log(a > b);   // false

// Operador menor que (<)
console.log(a < b);   // true

// Operador mayor o igual que (>=)
console.log(a >= b);  // false

// Operador menor o igual que (<=)
console.log(a <= b);  // true

let f = true;
let g = false;

console.log(`Valor de F:${f} Valor de G:${g}`);
// Operador lógico AND (&&)
console.log(f && g);  // false

// Operador lógico OR (||)
console.log(f || g);  // true

// Operador lógico NOT (!)
console.log(!f);      // false
console.log(!g);      // true

// Combinación de operadores lógicos
var c = true;
var d = false;
var e = true;

console.log((c && d) || e);     // true
console.log(!(c && d) || e);    // true
console.log(!(c && (d || e)));  // false

/*---------------------------------------------------*/

/* let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
} */

/*---------------------------------------------------*/

/* let nombreIngresado   = prompt("Ingresar nombre");

if((nombreIngresado == "ANA") || (nombreIngresado =="ana")){
    alert("El nombre ingresado es Ana"); 
}else{
    alert("El nombre ingresado NO ES Ana"); 
} */

/** ----------------------------------------------------*/

/* let nombreIngresado   = prompt("Ingresar nombre");

if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
    alert("Hola Ema"); 
}else{
    alert("Error: Ingresar nombre valido");
} */

/** ----------------------------------------------------*/


let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingresar Apellido");

if (nombre !="" && apellido !="") {
    console.log(`tu nombre es  ${nombre} y tu Apellido es ${apellido}`)
} else {
    
}
