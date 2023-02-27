
let edad = 20;

switch (edad) {
    case 10:
        console.log('es 10');
        break;
    case 20:
        console.log('es 20');
        break;
    case 20:
        console.log('es 20');
        break;
    default:
        console.log('es otro valor');
}

/*
let persQueVivenEnEdificioA = [5];
persQueVivenEnEdificioA[0] = 1;
persQueVivenEnEdificioA[1] = 4;
persQueVivenEnEdificioA[2] = 3;
persQueVivenEnEdificioA[3] = 2;
persQueVivenEnEdificioA[4] = 2;
*/
const persQueVivenEnEdificioA = [1,4,3,2,2];
//const persQueVivenEnEdificioA = [5];

console.log('pers que viven en piso 2: '+persQueVivenEnEdificioA[2]);

console.log('directo');
for (let piso=0; piso<persQueVivenEnEdificioA.length; piso++) {
    console.log('pers que viven en piso '+piso+": "+persQueVivenEnEdificioA[piso]) 
}

console.log('inverso');
for (let piso=persQueVivenEnEdificioA.length-1; piso>=0; piso--) {
    console.log('pers que viven en piso '+piso+": "+persQueVivenEnEdificioA[piso]) 
}

console.log('de a 2 pisos');
for (let piso=0; piso<persQueVivenEnEdificioA.length; piso+=2) {
    console.log('pers que viven en piso '+piso+": "+persQueVivenEnEdificioA[piso]) 
}

console.log('busca max');
let posMax = 0;
for (let piso=0; piso<persQueVivenEnEdificioA.length; piso++) {
    if (persQueVivenEnEdificioA[piso] > persQueVivenEnEdificioA[posMax]) {
        posMax = piso;
    }
}
console.log('persQueVivenEnEdificioA: '+persQueVivenEnEdificioA[posMax] +' posMax: '+posMax);


