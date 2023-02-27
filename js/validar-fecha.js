//valida si una fecha es valida

let dd;
let MM;
let aaaa;

dd = prompt('Ingrese el día');
console.log('ha dia: '+dd);
MM = prompt('Ingrese el mes');
aaaa = prompt('Ingrese el año');

//se quita este código xq falla cuando intenta convertir un valor no numeérico
//const ddEsNumero = typeof(+dd) === 'number';  //+: intentata convertir a número dd
//const MMEsNumero = typeof(+MM) === 'number';
//const aaaaEsNumero = typeof(+aaaa) === 'number';

const ddEsNumero = !isNaN(dd);
const MMEsNumero = !isNaN(MM);
const aaaaEsNumero = !isNaN(aaaa);


if (ddEsNumero && MMEsNumero && aaaaEsNumero) {
    if (validaDia(dd)) {
        if (validaMes(MM)) {
            if (validaAnio(aaaa)) {
                if (validaDiaMesAnio(dd, MM, aaaa)) {
                    alert('La fecha es correcta')
                } else {
                    alert('La fecha es inválida');
                }
            } else {
                alert('El año es inválido');
            }
        } else {
            alert('El mes es inválido')
        }
    } else {
        alert('El dia es invalido');
    }
} else {
    alert('La fecha es inválida'); 
}


function validaRango(piso, tope, valor) {
    return valor>=piso && valor<=tope;  
}
function validaDia(dd) {
  return validaRango(1, 31, dd);      
}

function validaMes(MM) {
    return validaRango(1,12, MM);
}

function validaAnio(aaaa) {
    return validaRango(1900, 9999, aaaa);
}

function validaDiaMesAnio(dd, MM, aaaa) {
    if (MM==4 || MM==6 || MM==9 || MM==11) {
        return dd<=30;
    } else {
        if (MM==2) { //febrero
            if (aaaa%4==0) { //año bisiesto
                return dd<=29;
            } else {
                return dd<=28;
            }
        } else {
            return dd<=31;
        }
    }
}
