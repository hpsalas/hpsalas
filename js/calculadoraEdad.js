/*
Ingresar la edad de una persona por teclado
Si la edad es mayor a 18, informar que es mayor, sinó que es menor
Si es menor a cero, decir que no es válido.
*/

let edad;
edad = prompt('Ingrese la edad: '); //lee el valor y se guarda
console.log('ha leido: '+edad);

const edadTope = 18;

//if (edad !== NaN) {  //Nan: Not a Number

let esNumero = typeof(+edad) === 'number';
if (esNumero) {  //+ lo convierte a número
    if (edad >= edadTope ) {
        alert('es mayor de edad');
    } else {
        alert('es menor de edad');
    }
}  else {
    alert('Debe ingresar un número.');
}
